export const data=[
  {
    "id": "registan",
    "name": "Maydon va mutanosiblik",
    "tag": "01 / ME’MORCHILIK",
    "category": "architecture",
    "image": "registan.jpg",
    "text": "Registonning uch madrasasi katta shahar maydoni atrofida yagona me’moriy ansambl yaratadi. Fotografik ekspozitsiyada umumiy kompozitsiya va fasadlarning o‘zaro munosabati kuzatiladi.",
    "source": "https://uzbekistan.travel/en/o/registan/"
  },
  {
    "id": "shohi",
    "name": "Rangning xotirasi",
    "tag": "02 / KOSHINKORLIK",
    "category": "detail",
    "image": "shohi-zinda.jpg",
    "text": "Shohi Zinda ansamblidagi bezak sirtlari yorug‘lik va masofaga qarab turlicha ko‘rinadi. Ushbu fotografik lavha koshinlarning rangi hamda takroriy naqshiga e’tibor qaratadi.",
    "source": "https://uzbekistan.travel/ru/o/memorialnyj-ansambl-shahi-zinda/"
  },
  {
    "id": "amir",
    "name": "Gumbaz ostidagi hikoya",
    "tag": "03 / ME’MORCHILIK",
    "category": "architecture",
    "image": "guri-amir.jpg",
    "text": "Go‘ri Amir Temuriylar davri me’moriy merosining muhim yodgorliklaridan. Bu raqamli ko‘rgazma muzeyning rasmiy kolleksiyasi emas: ochiq litsenziyali fotosuratlar asosidagi mustaqil kuratorlik namunasi.",
    "source": "https://uzbekistan.travel/en/o/gur-emir/"
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
