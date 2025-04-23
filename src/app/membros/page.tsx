// Primeiro, defina o tipo Member
export type Member = {
  id: number;
  name: string;
  motorcycle: string;
  category: string;
  displacement: string;
  image: string;
  isMember: boolean;
};

// Depois exporte os dados com o tipo correto
export const membersData: Member[] = [
  {
    id: 1,
    name: "João Barbosa",
    motorcycle: "Yamaha Ténéré",
    category: "Trail",
    displacement: "700cc",
    image:
      "https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg",
    isMember: true,
  },
  {
    id: 2,
    name: "Maria Silva",
    motorcycle: "Honda CBR600RR",
    category: "Estrada",
    displacement: "600cc",
    image:
      "https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png",
    isMember: true,
  },
  {
    id: 3,
    name: "Carlos Santos",
    motorcycle: "Royal Enfield Jawa",
    category: "Antiga",
    displacement: "350cc",
    image: "https://moto-station.com/wp-content/uploads/2020/02/20/bullet.jpg",
    isMember: true,
  },
  {
    id: 14,
    name: "Luis Costa",
    motorcycle: "Zundapp Famel 111",
    category: "Antiga",
    displacement: "49cc",
    image:
      "https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/90670379_3185825938096250_155263767830069248_n.jpg",
    isMember: true,
  },
  {
    id: 4,
    name: "Ana Pereira",
    motorcycle: "Suzuki GSX-R",
    category: "Estrada",
    displacement: "600cc",
    image:
      "https://example.com/suzuki-gsxr.jpg",
    isMember: true,
  },
  {
    id: 5,
    name: "Pedro Mendes",
    motorcycle: "Ducati Monster",
    category: "Esportiva",
    displacement: "821cc",
    image:
      "https://example.com/ducati-monster.jpg",
    isMember: true,
  },
  {
    id: 6,
    name: "Paula Gomes",
    motorcycle: "Kawasaki Ninja ZX-6R",
    category: "Esportiva",
    displacement: "636cc",
    image: "https://example.com/kawasaki-ninja.jpg",
    isMember: false,
  },
  {
    id: 7,
    name: "Bruno Lima",
    motorcycle: "Harley Davidson Fat Boy",
    category: "Cruiser",
    displacement: "1200cc",
    image: "https://example.com/harley-davidson.jpg",
    isMember: true,
  },
  {
    id: 8,
    name: "Marta Souza",
    motorcycle: "BMW GS Adventure",
    category: "Trail",
    displacement: "1000cc",
    image: "https://example.com/bmw-gs.jpg",
    isMember: false,
  }
];
