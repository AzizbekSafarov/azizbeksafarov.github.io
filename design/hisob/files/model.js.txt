export const data=[
  {
    "id": "toshkent",
    "name": "Toshkent",
    "values": [
      42,
      48,
      39,
      56,
      61,
      57,
      68
    ],
    "previous": 380
  },
  {
    "id": "samarqand",
    "name": "Samarqand",
    "values": [
      23,
      27,
      31,
      24,
      34,
      39,
      42
    ],
    "previous": 220
  },
  {
    "id": "buxoro",
    "name": "Buxoro",
    "values": [
      16,
      19,
      17,
      22,
      28,
      26,
      31
    ],
    "previous": 150
  },
  {
    "id": "fargona",
    "name": "Farg‘ona",
    "values": [
      28,
      32,
      27,
      35,
      39,
      42,
      47
    ],
    "previous": 230
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
export function normalizeSearch(value){return String(value??'').normalize('NFKC').toLocaleLowerCase('uz').replace(/[\u2018\u2019\u02bb\u02bc`\u00b4']/g,'').trim();}
export function report(period=7,query='',sort='total',direction=-1){const factor=period===30?4:1,rows=data.map(p=>({...p,total:p.values.reduce((a,b)=>a+b,0)*factor,previous:p.previous*factor}));const total=rows.reduce((n,p)=>n+p.total,0),previous=rows.reduce((n,p)=>n+p.previous,0);return {total,previous,series:data[0].values.map((_,i)=>data.reduce((n,p)=>n+p.values[i]*factor,0)),rows:rows.filter(p=>normalizeSearch(p.name).includes(normalizeSearch(query))).sort((a,b)=>direction*(sort==='name'?a.name.localeCompare(b.name):a.total-b.total))};}
export function csv(rows){return '\"Hudud\",\"Ishtiroklar\",\"Oldingi davr\"\n'+rows.map(r=>[r.name,r.total,r.previous].map(v=>'\"'+String(v).replaceAll('\"','\"\"')+'\"').join(',')).join('\n');}
