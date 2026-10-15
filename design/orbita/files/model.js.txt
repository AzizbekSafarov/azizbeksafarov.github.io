export const data=[
  {
    "id": "iss",
    "name": "Xalqaro kosmik stansiya",
    "tag": "YER ORBITASI",
    "text": "Yer atrofida aylanadigan xalqaro laboratoriya. Mikrogravitatsiya sharoitidagi tadqiqotlar insonning kosmosda yashashi va ishlashini o‘rganadi.",
    "facts": [
      [
        "MUHIT",
        "Mikrogravitatsiya"
      ],
      [
        "YO‘NALISH",
        "Inson va ilm-fan"
      ]
    ],
    "source": "https://www.nasa.gov/international-space-station/"
  },
  {
    "id": "webb",
    "name": "James Webb",
    "tag": "INFRAQIZIL ASTRONOMIYA",
    "text": "Webb infraqizil nurlanishni kuzatadi. Dastlabki galaktikalar, yulduzlar paydo bo‘lishi va ekzosayyoralar atmosferasi uning tadqiqot yo‘nalishlari orasida.",
    "facts": [
      [
        "KUZATUV",
        "Infraqizil"
      ],
      [
        "NUQTA",
        "Quyosh–Yer L2 atrofi"
      ]
    ],
    "source": "https://science.nasa.gov/mission/webb/"
  },
  {
    "id": "voyager",
    "name": "Voyager 1",
    "tag": "YULDUZLARARO FAZO",
    "text": "1977-yilda uchirilgan apparat tashqi sayyoralarni o‘rgandi va keyinchalik yulduzlararo fazoga yetib bordi. Bu atlas jonli telemetriya bermaydi.",
    "facts": [
      [
        "UCHIRILGAN",
        "1977"
      ],
      [
        "TADQIQOT",
        "Yulduzlararo muhit"
      ]
    ],
    "source": "https://science.nasa.gov/mission/voyager/"
  }
];
export function normalize(value){return Array.isArray(value)?[...new Set(value.filter(id=>data.some(p=>p.id===id)))]:[];}
