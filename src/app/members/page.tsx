"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {Badge} from "@/components/ui/badge";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  UsersIcon,
  UserRoundX,
  User,
  PersonStanding,
  Baby,
} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Input} from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {useToast} from "@/components/ui/use-toast";

export type Member = {
  id: number;
  numeroSocio: number;
  socioResponsavel?: string; // nome do sócio do motoclube responsável pela criança
  dataNascimento: string; // data de nascimento -- no caso das crianças para verificar quando faz 14 Anos
  dataAdesao: string; // data de adesão ao motoclube
  membroResponsavel?: string; // nome do membro do motoclube responsável pelo sócio
  nome: string;
  email: string;
  telefone: string;
  tipoSangue: string;
  rua: string;
  numero: string;
  concelho: string;
  distrito: string;
  codPostal?: string;
  status: string; // Ativo, Inativo, Pendente
  tipo: string; // Sócio, Visitante, Júnior -- Crianca só paga apartir dos 14 Anos
  joia: boolean; //paga, não paga
  kit: boolean; //entregue, não entregue
  grupoWA: boolean; //adiconado, não adicionado
  dataPagamentoProximo: string;
  dataPagamentoUltimo: string;
};

const data: Member[] = [
  {
    id: 1,
    numeroSocio: 36,
    socioResponsavel: "Louie Geerits",
    dataNascimento: "04/12/2024",
    dataAdesao: "2011/03/27",
    membroResponsavel: "Diena Lazell",
    nome: "Jacky Kimbury",
    email: "jkimbury0@nih.gov",
    telefone: "6613294113",
    tipoSangue: "O+",
    rua: "Upham",
    numero: "6",
    concelho: "Apt 1441",
    distrito: "Room 585",
    status: "pendente",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "04/11/2024",
    dataPagamentoUltimo: "20/11/2024",
  },
  {
    id: 2,
    numeroSocio: 72,
    socioResponsavel: "Rawley Gaitley",
    dataNascimento: "04/02/2024",
    dataAdesao: "2008/06/22",
    membroResponsavel: "Derrick Rammell",
    nome: "Mattias Kerfut",
    email: "mkerfut1@tripadvisor.com",
    telefone: "1771072345",
    tipoSangue: "O+",
    rua: "Crest Line",
    numero: "6",
    concelho: "Suite 33",
    distrito: "PO Box 58091",
    codPostal: "08-307",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "01/04/2024",
    dataPagamentoUltimo: "24/04/2024",
  },
  {
    id: 3,
    numeroSocio: 130,
    socioResponsavel: "Mace Sheen",
    dataNascimento: "18/10/2024",
    dataAdesao: "2014/11/14",
    membroResponsavel: "Lilian Tompkin",
    nome: "Moshe Cattermull",
    email: "mcattermull2@go.com",
    telefone: "9634475671",
    tipoSangue: "A-",
    rua: "Talmadge",
    numero: "201",
    concelho: "11th Floor",
    distrito: "Suite 63",
    status: "Inativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "11/10/2024",
    dataPagamentoUltimo: "12/09/2024",
  },
  {
    id: 4,
    numeroSocio: 39,
    socioResponsavel: "Felecia Arrigo",
    dataNascimento: "14/05/2024",
    dataAdesao: "2022/12/02",
    membroResponsavel: "Damien Benardeau",
    nome: "Ardella Gierth",
    email: "agierth3@whitehouse.gov",
    telefone: "4437004968",
    tipoSangue: "O+",
    rua: "Kingsford",
    numero: "57683",
    concelho: "PO Box 89358",
    distrito: "Suite 53",
    status: "Ativo",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "04/03/2024",
    dataPagamentoUltimo: "22/07/2024",
  },
  {
    id: 5,
    numeroSocio: 13,
    socioResponsavel: "Jacky Meric",
    dataNascimento: "17/03/2024",
    dataAdesao: "2006/07/28",
    membroResponsavel: "Kippar Gianolini",
    nome: "Janenna Grzesiak",
    email: "jgrzesiak4@youtu.be",
    telefone: "4991433372",
    tipoSangue: "O-",
    rua: "Pearson",
    numero: "44936",
    concelho: "Apt 687",
    distrito: "Apt 1680",
    codPostal: "87490-000",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "03/11/2024",
    dataPagamentoUltimo: "03/08/2024",
  },
  {
    id: 6,
    numeroSocio: 74,
    socioResponsavel: "Kerry Spain",
    dataNascimento: "26/06/2024",
    dataAdesao: "2003/06/16",
    membroResponsavel: "Hana Whiff",
    nome: "Ricca Hambling",
    email: "rhambling5@so-net.ne.jp",
    telefone: "1212368060",
    tipoSangue: "A-",
    rua: "Mandrake",
    numero: "9",
    concelho: "7th Floor",
    distrito: "Room 502",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "26/04/2024",
    dataPagamentoUltimo: "16/09/2024",
  },
  {
    id: 7,
    numeroSocio: 28,
    socioResponsavel: "Shepard Renzo",
    dataNascimento: "01/10/2024",
    dataAdesao: "2020/09/04",
    membroResponsavel: "Joellyn Tyzack",
    nome: "Nita Huddle",
    email: "nhuddle6@redcross.org",
    telefone: "7913352701",
    tipoSangue: "O+",
    rua: "Fairfield",
    numero: "0",
    concelho: "Room 103",
    distrito: "14th Floor",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "07/03/2024",
    dataPagamentoUltimo: "13/11/2024",
  },
  {
    id: 8,
    numeroSocio: 95,
    socioResponsavel: "Sonnie Moreland",
    dataNascimento: "25/03/2024",
    dataAdesao: "2017/10/09",
    membroResponsavel: "Huntley Ewens",
    nome: "Weston Votier",
    email: "wvotier7@jiathis.com",
    telefone: "3446525872",
    tipoSangue: "A+",
    rua: "Saint Paul",
    numero: "9",
    concelho: "Apt 1487",
    distrito: "Room 656",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "08/03/2024",
    dataPagamentoUltimo: "01/09/2024",
  },
  {
    id: 9,
    numeroSocio: 89,
    socioResponsavel: "Kathrine Moxham",
    dataNascimento: "12/10/2024",
    dataAdesao: "2018/07/28",
    membroResponsavel: "Laryssa Ligoe",
    nome: "Humfried Cuzen",
    email: "hcuzen8@imgur.com",
    telefone: "4984895014",
    tipoSangue: "A+",
    rua: "Birchwood",
    numero: "3910",
    concelho: "9th Floor",
    distrito: "Suite 25",
    codPostal: "06013",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "18/07/2024",
    dataPagamentoUltimo: "26/09/2024",
  },
  {
    id: 10,
    numeroSocio: 40,
    socioResponsavel: "Zach State",
    dataNascimento: "19/03/2024",
    dataAdesao: "2001/01/22",
    membroResponsavel: "Vannie Denness",
    nome: "Alexine Dilks",
    email: "adilks9@sfgate.com",
    telefone: "8339138574",
    tipoSangue: "O-",
    rua: "Washington",
    numero: "10",
    concelho: "PO Box 37152",
    distrito: "Apt 1347",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "16/11/2024",
    dataPagamentoUltimo: "10/12/2024",
  },
  {
    id: 11,
    numeroSocio: 170,
    socioResponsavel: "Englebert Bracknell",
    dataNascimento: "02/06/2024",
    dataAdesao: "2012/11/15",
    membroResponsavel: "Vernice Paton",
    nome: "Nevil Spykings",
    email: "nspykingsa@amazon.de",
    telefone: "9949839387",
    tipoSangue: "A-",
    rua: "Luster",
    numero: "6",
    concelho: "Apt 1136",
    distrito: "Suite 49",
    codPostal: "732 96",
    status: "Ativo",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "18/01/2025",
    dataPagamentoUltimo: "12/04/2024",
  },
  {
    id: 12,
    numeroSocio: 166,
    socioResponsavel: "Ada Padgham",
    dataNascimento: "06/01/2025",
    dataAdesao: "2001/01/03",
    membroResponsavel: "Kristofor De Andreis",
    nome: "Coletta Pellington",
    email: "cpellingtonb@newyorker.com",
    telefone: "3364269067",
    tipoSangue: "O-",
    rua: "Dwight",
    numero: "04461",
    concelho: "PO Box 32585",
    distrito: "Suite 36",
    codPostal: "4323",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "07/03/2024",
    dataPagamentoUltimo: "15/07/2024",
  },
  {
    id: 13,
    numeroSocio: 116,
    socioResponsavel: "Ambrosio Vanderplas",
    dataNascimento: "08/08/2024",
    dataAdesao: "2023/10/08",
    membroResponsavel: "Elvyn Markovich",
    nome: "Buiron Venneur",
    email: "bvenneurc@patch.com",
    telefone: "2841836741",
    tipoSangue: "A+",
    rua: "Nelson",
    numero: "6591",
    concelho: "Suite 49",
    distrito: "PO Box 92228",
    codPostal: "756 05",
    status: "Ativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "14/07/2024",
    dataPagamentoUltimo: "14/11/2024",
  },
  {
    id: 14,
    numeroSocio: 159,
    socioResponsavel: "Godwin Renish",
    dataNascimento: "04/02/2024",
    dataAdesao: "2003/11/22",
    membroResponsavel: "Darryl Lowes",
    nome: "Wilton Kille",
    email: "wkilled@deliciousdays.com",
    telefone: "7615067956",
    tipoSangue: "O-",
    rua: "Iowa",
    numero: "16979",
    concelho: "Suite 79",
    distrito: "PO Box 53764",
    codPostal: "4755-393",
    status: "pendente",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "08/11/2024",
    dataPagamentoUltimo: "20/01/2025",
  },
  {
    id: 15,
    numeroSocio: 168,
    socioResponsavel: "Pernell Bidnall",
    dataNascimento: "16/03/2024",
    dataAdesao: "2005/02/13",
    membroResponsavel: "Darin Flieg",
    nome: "Shermie Plaschke",
    email: "splaschkee@columbia.edu",
    telefone: "5902044101",
    tipoSangue: "O-",
    rua: "Meadow Valley",
    numero: "801",
    concelho: "Room 1929",
    distrito: "Room 849",
    codPostal: "MD-5114",
    status: "Ativo",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "03/02/2024",
    dataPagamentoUltimo: "03/04/2024",
  },
  {
    id: 16,
    numeroSocio: 136,
    socioResponsavel: "Lauraine Ticehurst",
    dataNascimento: "03/08/2024",
    dataAdesao: "2021/05/14",
    membroResponsavel: "Elyssa Bartunek",
    nome: "Audie Arnaudet",
    email: "aarnaudetf@nasa.gov",
    telefone: "1932318492",
    tipoSangue: "A+",
    rua: "Westerfield",
    numero: "211",
    concelho: "Apt 849",
    distrito: "Apt 496",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "08/02/2024",
    dataPagamentoUltimo: "14/01/2025",
  },
  {
    id: 17,
    numeroSocio: 135,
    socioResponsavel: "Ario Simnel",
    dataNascimento: "05/08/2024",
    dataAdesao: "2003/12/15",
    membroResponsavel: "Aloisia Dominguez",
    nome: "Avrom O'Logan",
    email: "aologang@privacy.gov.au",
    telefone: "9113784788",
    tipoSangue: "O+",
    rua: "Shoshone",
    numero: "71398",
    concelho: "Suite 24",
    distrito: "PO Box 77524",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "25/07/2024",
    dataPagamentoUltimo: "19/08/2024",
  },
  {
    id: 18,
    numeroSocio: 167,
    socioResponsavel: "Tallie Hariot",
    dataNascimento: "21/09/2024",
    dataAdesao: "2020/10/28",
    membroResponsavel: "Kristien Boadby",
    nome: "Brocky Poad",
    email: "bpoadh@google.co.uk",
    telefone: "5846389048",
    tipoSangue: "A+",
    rua: "Brown",
    numero: "76362",
    concelho: "20th Floor",
    distrito: "Room 594",
    codPostal: "561 64",
    status: "Ativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "14/01/2025",
    dataPagamentoUltimo: "02/11/2024",
  },
  {
    id: 19,
    numeroSocio: 17,
    socioResponsavel: "Broddy Taylorson",
    dataNascimento: "27/08/2024",
    dataAdesao: "2002/12/08",
    membroResponsavel: "Isiahi Gregine",
    nome: "Josie Tape",
    email: "jtapei@over-blog.com",
    telefone: "2226309186",
    tipoSangue: "O+",
    rua: "Village Green",
    numero: "207",
    concelho: "Apt 1435",
    distrito: "PO Box 68066",
    codPostal: "30160",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "11/02/2024",
    dataPagamentoUltimo: "09/06/2024",
  },
  {
    id: 20,
    numeroSocio: 154,
    socioResponsavel: "Addi Van Arsdall",
    dataNascimento: "27/07/2024",
    dataAdesao: "2021/10/19",
    membroResponsavel: "Danna Fairclough",
    nome: "Rhea Yegoshin",
    email: "ryegoshinj@ebay.com",
    telefone: "2839848261",
    tipoSangue: "A-",
    rua: "Burning Wood",
    numero: "71",
    concelho: "PO Box 82589",
    distrito: "Room 719",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "23/10/2024",
    dataPagamentoUltimo: "19/11/2024",
  },
  {
    id: 21,
    numeroSocio: 16,
    socioResponsavel: "Kai Fogg",
    dataNascimento: "24/02/2024",
    dataAdesao: "2019/06/16",
    membroResponsavel: "Philippa Cudby",
    nome: "Novelia Bidewell",
    email: "nbidewellk@freewebs.com",
    telefone: "5045234413",
    tipoSangue: "O+",
    rua: "Novick",
    numero: "0",
    concelho: "Suite 76",
    distrito: "Suite 21",
    codPostal: "741-0062",
    status: "pendente",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "06/03/2024",
    dataPagamentoUltimo: "29/04/2024",
  },
  {
    id: 22,
    numeroSocio: 21,
    socioResponsavel: "Dinnie Orsay",
    dataNascimento: "18/01/2025",
    dataAdesao: "2015/11/19",
    membroResponsavel: "Edouard Bierman",
    nome: "Homerus Cescoti",
    email: "hcescotil@123-reg.co.uk",
    telefone: "7548848226",
    tipoSangue: "O-",
    rua: "Pierstorff",
    numero: "0549",
    concelho: "Apt 67",
    distrito: "Room 1174",
    codPostal: "33355",
    status: "Inativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "22/11/2024",
    dataPagamentoUltimo: "26/10/2024",
  },
  {
    id: 23,
    numeroSocio: 164,
    socioResponsavel: "Cherrita Ellett",
    dataNascimento: "03/08/2024",
    dataAdesao: "2015/10/12",
    membroResponsavel: "Jacquette Martensen",
    nome: "Ferdy Keneleyside",
    email: "fkeneleysidem@pcworld.com",
    telefone: "2232394699",
    tipoSangue: "A-",
    rua: "Sheridan",
    numero: "5889",
    concelho: "15th Floor",
    distrito: "Suite 55",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "23/05/2024",
    dataPagamentoUltimo: "14/06/2024",
  },
  {
    id: 24,
    numeroSocio: 70,
    socioResponsavel: "Silvan Collis",
    dataNascimento: "02/08/2024",
    dataAdesao: "2022/01/29",
    membroResponsavel: "Lind Stooders",
    nome: "Ulises Wychard",
    email: "uwychardn@ucoz.com",
    telefone: "4163104719",
    tipoSangue: "O+",
    rua: "International",
    numero: "4238",
    concelho: "5th Floor",
    distrito: "13th Floor",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "03/05/2024",
    dataPagamentoUltimo: "04/09/2024",
  },
  {
    id: 25,
    numeroSocio: 39,
    socioResponsavel: "Neal Rosenblatt",
    dataNascimento: "26/05/2024",
    dataAdesao: "2018/01/25",
    membroResponsavel: "Duffy Faivre",
    nome: "Florrie Bowmer",
    email: "fbowmero@google.ru",
    telefone: "1786995129",
    tipoSangue: "A+",
    rua: "Kings",
    numero: "963",
    concelho: "Suite 40",
    distrito: "PO Box 26341",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "07/11/2024",
    dataPagamentoUltimo: "10/11/2024",
  },
  {
    id: 26,
    numeroSocio: 23,
    socioResponsavel: "Eleonore Jeffress",
    dataNascimento: "20/12/2024",
    dataAdesao: "2024/05/15",
    membroResponsavel: "Susann Callicott",
    nome: "Allyn Founds",
    email: "afoundsp@ca.gov",
    telefone: "4617266921",
    tipoSangue: "A-",
    rua: "Walton",
    numero: "26",
    concelho: "Room 1067",
    distrito: "15th Floor",
    codPostal: "790 65",
    status: "Ativo",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "15/07/2024",
    dataPagamentoUltimo: "01/05/2024",
  },
  {
    id: 27,
    numeroSocio: 81,
    socioResponsavel: "Richmond Rowat",
    dataNascimento: "02/05/2024",
    dataAdesao: "2011/12/14",
    membroResponsavel: "Eadmund Spaven",
    nome: "Joel Chapelhow",
    email: "jchapelhowq@aboutads.info",
    telefone: "6475122447",
    tipoSangue: "A-",
    rua: "Waxwing",
    numero: "07518",
    concelho: "Apt 1793",
    distrito: "Room 787",
    codPostal: "188919",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "09/11/2024",
    dataPagamentoUltimo: "27/07/2024",
  },
  {
    id: 28,
    numeroSocio: 105,
    socioResponsavel: "Alisha Trengrouse",
    dataNascimento: "22/10/2024",
    dataAdesao: "2011/02/10",
    membroResponsavel: "Rog Franck",
    nome: "Mariejeanne Fluin",
    email: "mfluinr@skype.com",
    telefone: "8911849112",
    tipoSangue: "A-",
    rua: "Trailsway",
    numero: "9",
    concelho: "Apt 1373",
    distrito: "PO Box 17102",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "22/02/2024",
    dataPagamentoUltimo: "24/04/2024",
  },
  {
    id: 29,
    numeroSocio: 8,
    socioResponsavel: "Penrod Mayhew",
    dataNascimento: "14/12/2024",
    dataAdesao: "2023/08/17",
    membroResponsavel: "Yance Testro",
    nome: "Nicky Clemenceau",
    email: "nclemenceaus@ebay.co.uk",
    telefone: "9794592303",
    tipoSangue: "A+",
    rua: "Golf View",
    numero: "5",
    concelho: "Apt 705",
    distrito: "6th Floor",
    codPostal: "56209 CEDEX",
    status: "Inativo",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "08/08/2024",
    dataPagamentoUltimo: "13/09/2024",
  },
  {
    id: 30,
    numeroSocio: 96,
    socioResponsavel: "Stefa Bridden",
    dataNascimento: "16/12/2024",
    dataAdesao: "2007/06/09",
    membroResponsavel: "Shandeigh Durbin",
    nome: "Everard Saltsberg",
    email: "esaltsbergt@ycombinator.com",
    telefone: "2913202822",
    tipoSangue: "O-",
    rua: "Vernon",
    numero: "9",
    concelho: "19th Floor",
    distrito: "Apt 1640",
    status: "pendente",
    tipo: "visitante",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "03/12/2024",
    dataPagamentoUltimo: "20/01/2025",
  },
  {
    id: 31,
    numeroSocio: 75,
    socioResponsavel: "Parsifal Ferronet",
    dataNascimento: "09/04/2024",
    dataAdesao: "2004/06/17",
    membroResponsavel: "Fania Lindro",
    nome: "Siffre Malpas",
    email: "smalpasu@feedburner.com",
    telefone: "6084574938",
    tipoSangue: "O+",
    rua: "Golf",
    numero: "84",
    concelho: "Room 1188",
    distrito: "PO Box 5308",
    codPostal: "70110",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "18/04/2024",
    dataPagamentoUltimo: "06/12/2024",
  },
  {
    id: 32,
    numeroSocio: 156,
    socioResponsavel: "Alva Liddard",
    dataNascimento: "28/11/2024",
    dataAdesao: "2013/02/02",
    membroResponsavel: "Frazer Congram",
    nome: "Olwen O'Giany",
    email: "oogianyv@umn.edu",
    telefone: "8932308942",
    tipoSangue: "O-",
    rua: "Barnett",
    numero: "322",
    concelho: "Apt 1146",
    distrito: "Suite 52",
    codPostal: "43-178",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "01/06/2024",
    dataPagamentoUltimo: "04/09/2024",
  },
  {
    id: 33,
    numeroSocio: 11,
    socioResponsavel: "Hertha Allberry",
    dataNascimento: "26/01/2024",
    dataAdesao: "2009/01/01",
    membroResponsavel: "Zebedee Treadger",
    nome: "Evelin Laverock",
    email: "elaverockw@cnn.com",
    telefone: "8701713079",
    tipoSangue: "A-",
    rua: "Sundown",
    numero: "9",
    concelho: "Room 661",
    distrito: "Apt 765",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "12/08/2024",
    dataPagamentoUltimo: "09/06/2024",
  },
  {
    id: 34,
    numeroSocio: 40,
    socioResponsavel: "Stavros Wrinch",
    dataNascimento: "02/01/2025",
    dataAdesao: "2012/12/01",
    membroResponsavel: "Torey Andrzejewski",
    nome: "Benedicto Dunnan",
    email: "bdunnanx@nymag.com",
    telefone: "3572266545",
    tipoSangue: "O+",
    rua: "Garrison",
    numero: "131",
    concelho: "Apt 1805",
    distrito: "18th Floor",
    codPostal: "67710",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "10/09/2024",
    dataPagamentoUltimo: "01/12/2024",
  },
  {
    id: 35,
    numeroSocio: 132,
    socioResponsavel: "Banky Chartman",
    dataNascimento: "28/03/2024",
    dataAdesao: "2020/09/03",
    membroResponsavel: "Libbie Vyel",
    nome: "Cinda Busson",
    email: "cbussony@tamu.edu",
    telefone: "9524564303",
    tipoSangue: "O-",
    rua: "Leroy",
    numero: "71517",
    concelho: "Room 1180",
    distrito: "Apt 856",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "24/06/2024",
    dataPagamentoUltimo: "17/03/2024",
  },
  {
    id: 36,
    numeroSocio: 70,
    socioResponsavel: "Giustina Ogg",
    dataNascimento: "30/09/2024",
    dataAdesao: "2012/07/09",
    membroResponsavel: "Curtis Redgate",
    nome: "Babette Witcherley",
    email: "bwitcherleyz@tinypic.com",
    telefone: "3385842483",
    tipoSangue: "A-",
    rua: "Birchwood",
    numero: "444",
    concelho: "Apt 189",
    distrito: "Suite 73",
    status: "Inativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "09/06/2024",
    dataPagamentoUltimo: "04/07/2024",
  },
  {
    id: 37,
    numeroSocio: 57,
    socioResponsavel: "Alexi Ferrier",
    dataNascimento: "31/05/2024",
    dataAdesao: "2000/08/01",
    membroResponsavel: "Charmane Gilcriest",
    nome: "Bobbie Rohlfs",
    email: "brohlfs10@theglobeandmail.com",
    telefone: "2349321789",
    tipoSangue: "A-",
    rua: "Chinook",
    numero: "44952",
    concelho: "PO Box 71735",
    distrito: "Room 85",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "21/02/2024",
    dataPagamentoUltimo: "19/02/2024",
  },
  {
    id: 38,
    numeroSocio: 102,
    socioResponsavel: "Stafford Blesdill",
    dataNascimento: "24/06/2024",
    dataAdesao: "2015/12/09",
    membroResponsavel: "Barnett Lazarus",
    nome: "Pattie Langabeer",
    email: "plangabeer11@themeforest.net",
    telefone: "5098732237",
    tipoSangue: "O-",
    rua: "Cherokee",
    numero: "85889",
    concelho: "PO Box 39861",
    distrito: "Suite 53",
    status: "Inativo",
    tipo: "visitante",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "02/06/2024",
    dataPagamentoUltimo: "11/10/2024",
  },
  {
    id: 39,
    numeroSocio: 120,
    socioResponsavel: "Wylie Sirmond",
    dataNascimento: "07/08/2024",
    dataAdesao: "2015/02/18",
    membroResponsavel: "Noe Kwietak",
    nome: "Arman Albrooke",
    email: "aalbrooke12@wsj.com",
    telefone: "7232620420",
    tipoSangue: "O-",
    rua: "Orin",
    numero: "09743",
    concelho: "17th Floor",
    distrito: "8th Floor",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "21/05/2024",
    dataPagamentoUltimo: "23/03/2024",
  },
  {
    id: 40,
    numeroSocio: 42,
    socioResponsavel: "Branden Renfree",
    dataNascimento: "04/02/2024",
    dataAdesao: "2009/11/12",
    membroResponsavel: "Merrill Carmont",
    nome: "Ingar Loughlan",
    email: "iloughlan13@kickstarter.com",
    telefone: "3921539652",
    tipoSangue: "A+",
    rua: "Fair Oaks",
    numero: "36259",
    concelho: "PO Box 16750",
    distrito: "Apt 1695",
    codPostal: "3776",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "13/01/2025",
    dataPagamentoUltimo: "23/07/2024",
  },
  {
    id: 41,
    numeroSocio: 140,
    socioResponsavel: "Iona Bednall",
    dataNascimento: "10/02/2024",
    dataAdesao: "2010/04/06",
    membroResponsavel: "Athene Lee",
    nome: "Hamel Siney",
    email: "hsiney14@desdev.cn",
    telefone: "4858146810",
    tipoSangue: "A-",
    rua: "Kim",
    numero: "39",
    concelho: "PO Box 84594",
    distrito: "Apt 271",
    status: "Inativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "25/03/2024",
    dataPagamentoUltimo: "03/05/2024",
  },
  {
    id: 42,
    numeroSocio: 88,
    socioResponsavel: "Lamar Parsisson",
    dataNascimento: "29/04/2024",
    dataAdesao: "2006/04/29",
    membroResponsavel: "Magdalena Garvagh",
    nome: "Gal Howel",
    email: "ghowel15@mtv.com",
    telefone: "2138588283",
    tipoSangue: "O+",
    rua: "Mccormick",
    numero: "877",
    concelho: "13th Floor",
    distrito: "Apt 905",
    codPostal: "10410",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "16/09/2024",
    dataPagamentoUltimo: "03/05/2024",
  },
  {
    id: 43,
    numeroSocio: 62,
    socioResponsavel: "Cody Gunney",
    dataNascimento: "19/06/2024",
    dataAdesao: "2007/02/01",
    membroResponsavel: "Ritchie Enrigo",
    nome: "Adler Sprowle",
    email: "asprowle16@github.com",
    telefone: "8079772883",
    tipoSangue: "O-",
    rua: "Pearson",
    numero: "419",
    concelho: "Apt 399",
    distrito: "Room 1618",
    codPostal: "44265 CEDEX 2",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "07/11/2024",
    dataPagamentoUltimo: "24/01/2025",
  },
  {
    id: 44,
    numeroSocio: 50,
    socioResponsavel: "Fitz Daens",
    dataNascimento: "21/07/2024",
    dataAdesao: "2008/03/06",
    membroResponsavel: "Cathyleen Ogles",
    nome: "Mariquilla Duding",
    email: "mduding17@blogspot.com",
    telefone: "4075693668",
    tipoSangue: "A+",
    rua: "Kensington",
    numero: "93934",
    concelho: "Apt 1938",
    distrito: "Apt 1357",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "17/12/2024",
    dataPagamentoUltimo: "18/10/2024",
  },
  {
    id: 45,
    numeroSocio: 155,
    socioResponsavel: "Nathanil Horrod",
    dataNascimento: "08/07/2024",
    dataAdesao: "2015/12/29",
    membroResponsavel: "Hamid Jerrams",
    nome: "Isabel Phibb",
    email: "iphibb18@weather.com",
    telefone: "2534117476",
    tipoSangue: "O-",
    rua: "Pennsylvania",
    numero: "1",
    concelho: "Room 175",
    distrito: "Apt 1138",
    status: "Inativo",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "03/06/2024",
    dataPagamentoUltimo: "31/10/2024",
  },
  {
    id: 46,
    numeroSocio: 161,
    socioResponsavel: "Cynthea Oulett",
    dataNascimento: "02/06/2024",
    dataAdesao: "2006/03/22",
    membroResponsavel: "Simonette Radki",
    nome: "Isidora Arden",
    email: "iarden19@google.co.jp",
    telefone: "1561204675",
    tipoSangue: "O+",
    rua: "Clove",
    numero: "5",
    concelho: "PO Box 41856",
    distrito: "Suite 3",
    codPostal: "93321 CEDEX",
    status: "Inativo",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "05/10/2024",
    dataPagamentoUltimo: "23/05/2024",
  },
  {
    id: 47,
    numeroSocio: 42,
    socioResponsavel: "Odilia Jaquemar",
    dataNascimento: "11/09/2024",
    dataAdesao: "2007/04/29",
    membroResponsavel: "Karyl Footer",
    nome: "Cornall Dalyiel",
    email: "cdalyiel1a@hud.gov",
    telefone: "5443609723",
    tipoSangue: "A+",
    rua: "Novick",
    numero: "41273",
    concelho: "9th Floor",
    distrito: "13th Floor",
    codPostal: "39330-000",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "01/06/2024",
    dataPagamentoUltimo: "05/06/2024",
  },
  {
    id: 48,
    numeroSocio: 12,
    socioResponsavel: "Leigh Heatlie",
    dataNascimento: "21/05/2024",
    dataAdesao: "2014/05/04",
    membroResponsavel: "Pablo Service",
    nome: "Charlean Niezen",
    email: "cniezen1b@fda.gov",
    telefone: "2123492880",
    tipoSangue: "A-",
    rua: "Garrison",
    numero: "18241",
    concelho: "Apt 1334",
    distrito: "PO Box 62598",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "08/09/2024",
    dataPagamentoUltimo: "14/05/2024",
  },
  {
    id: 49,
    numeroSocio: 163,
    socioResponsavel: "Milly Siebart",
    dataNascimento: "07/07/2024",
    dataAdesao: "2022/02/11",
    membroResponsavel: "Elly Sanford",
    nome: "Augy Tewes",
    email: "atewes1c@twitter.com",
    telefone: "4264356409",
    tipoSangue: "O+",
    rua: "Village",
    numero: "4356",
    concelho: "Room 1227",
    distrito: "Suite 94",
    status: "Inativo",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "10/11/2024",
    dataPagamentoUltimo: "06/09/2024",
  },
  {
    id: 50,
    numeroSocio: 3,
    socioResponsavel: "Jessamine Ewart",
    dataNascimento: "27/02/2024",
    dataAdesao: "2024/02/27",
    membroResponsavel: "Orrin Benion",
    nome: "Lamont Weeke",
    email: "lweeke1d@blogspot.com",
    telefone: "6298047952",
    tipoSangue: "A-",
    rua: "Goodland",
    numero: "161",
    concelho: "Room 71",
    distrito: "15th Floor",
    codPostal: "08-322",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "01/09/2024",
    dataPagamentoUltimo: "11/07/2024",
  },
  {
    id: 51,
    numeroSocio: 64,
    socioResponsavel: "Terrijo Webster",
    dataNascimento: "09/02/2024",
    dataAdesao: "2011/01/05",
    membroResponsavel: "Marcus Goney",
    nome: "Yvon Furzer",
    email: "yfurzer1e@drupal.org",
    telefone: "2638184056",
    tipoSangue: "A-",
    rua: "Clove",
    numero: "7",
    concelho: "Apt 868",
    distrito: "16th Floor",
    codPostal: "285 22",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "22/07/2024",
    dataPagamentoUltimo: "21/01/2025",
  },
  {
    id: 52,
    numeroSocio: 31,
    socioResponsavel: "Berta Taile",
    dataNascimento: "12/02/2024",
    dataAdesao: "2002/01/31",
    membroResponsavel: "Jere Pudney",
    nome: "Anastasia Hailes",
    email: "ahailes1f@state.gov",
    telefone: "1532897978",
    tipoSangue: "A-",
    rua: "Bashford",
    numero: "18",
    concelho: "Apt 297",
    distrito: "PO Box 981",
    status: "Inativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "16/08/2024",
    dataPagamentoUltimo: "11/01/2025",
  },
  {
    id: 53,
    numeroSocio: 8,
    socioResponsavel: "Liesa Tupp",
    dataNascimento: "08/09/2024",
    dataAdesao: "2017/10/30",
    membroResponsavel: "Izak Blackstone",
    nome: "Hedda Afonso",
    email: "hafonso1g@cdbaby.com",
    telefone: "8251266991",
    tipoSangue: "A-",
    rua: "Gateway",
    numero: "4666",
    concelho: "Apt 1144",
    distrito: "Suite 56",
    codPostal: "291 41",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "22/08/2024",
    dataPagamentoUltimo: "09/08/2024",
  },
  {
    id: 54,
    numeroSocio: 158,
    socioResponsavel: "Owen Pettyfar",
    dataNascimento: "07/10/2024",
    dataAdesao: "2000/09/14",
    membroResponsavel: "Elvyn Francis",
    nome: "Chrystal Stillert",
    email: "cstillert1h@prlog.org",
    telefone: "7228232483",
    tipoSangue: "O+",
    rua: "Hayes",
    numero: "25",
    concelho: "Apt 559",
    distrito: "Apt 1663",
    codPostal: "606083",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "27/05/2024",
    dataPagamentoUltimo: "17/06/2024",
  },
  {
    id: 55,
    numeroSocio: 6,
    socioResponsavel: "Garrard Klimentov",
    dataNascimento: "12/01/2025",
    dataAdesao: "2025/01/10",
    membroResponsavel: "Seward Guess",
    nome: "Robin Tapscott",
    email: "rtapscott1i@github.com",
    telefone: "6831625081",
    tipoSangue: "A+",
    rua: "Helena",
    numero: "338",
    concelho: "PO Box 68584",
    distrito: "Suite 16",
    codPostal: "30270",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "01/02/2024",
    dataPagamentoUltimo: "28/01/2024",
  },
  {
    id: 56,
    numeroSocio: 85,
    socioResponsavel: "Kitti Guillard",
    dataNascimento: "09/01/2025",
    dataAdesao: "2018/10/16",
    membroResponsavel: "Deirdre Folbig",
    nome: "Elianora Terbruggen",
    email: "eterbruggen1j@telegraph.co.uk",
    telefone: "5134029961",
    tipoSangue: "A-",
    rua: "American",
    numero: "9",
    concelho: "PO Box 92104",
    distrito: "Apt 74",
    codPostal: "2860-205",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "25/08/2024",
    dataPagamentoUltimo: "06/12/2024",
  },
  {
    id: 57,
    numeroSocio: 19,
    socioResponsavel: "Marcellus Hardison",
    dataNascimento: "31/03/2024",
    dataAdesao: "2010/07/26",
    membroResponsavel: "Meade Baggiani",
    nome: "Willetta Pavlenko",
    email: "wpavlenko1k@europa.eu",
    telefone: "7642671509",
    tipoSangue: "O-",
    rua: "Thierer",
    numero: "17486",
    concelho: "Room 1724",
    distrito: "Apt 847",
    codPostal: "KCM",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "11/05/2024",
    dataPagamentoUltimo: "29/09/2024",
  },
  {
    id: 58,
    numeroSocio: 102,
    socioResponsavel: "Danny Mears",
    dataNascimento: "11/04/2024",
    dataAdesao: "2019/11/02",
    membroResponsavel: "Lily Rounds",
    nome: "Guinevere Bolgar",
    email: "gbolgar1l@livejournal.com",
    telefone: "6701141402",
    tipoSangue: "O-",
    rua: "Hansons",
    numero: "30733",
    concelho: "PO Box 69065",
    distrito: "Room 1196",
    codPostal: "58300",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "17/07/2024",
    dataPagamentoUltimo: "09/07/2024",
  },
  {
    id: 59,
    numeroSocio: 28,
    socioResponsavel: "Randolph Guidotti",
    dataNascimento: "16/11/2024",
    dataAdesao: "2005/11/08",
    membroResponsavel: "Gifford McKernan",
    nome: "Simmonds Corbridge",
    email: "scorbridge1m@geocities.jp",
    telefone: "7181121359",
    tipoSangue: "O+",
    rua: "Nevada",
    numero: "5",
    concelho: "PO Box 4085",
    distrito: "PO Box 63619",
    status: "Inativo",
    tipo: "visitante",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "24/12/2024",
    dataPagamentoUltimo: "29/09/2024",
  },
  {
    id: 60,
    numeroSocio: 8,
    socioResponsavel: "Carole Seccombe",
    dataNascimento: "27/05/2024",
    dataAdesao: "2023/01/03",
    membroResponsavel: "Koenraad Furmenger",
    nome: "Ennis Widdison",
    email: "ewiddison1n@cafepress.com",
    telefone: "1175184327",
    tipoSangue: "A-",
    rua: "Morrow",
    numero: "6603",
    concelho: "Room 914",
    distrito: "PO Box 19110",
    codPostal: "152835",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "05/08/2024",
    dataPagamentoUltimo: "30/12/2024",
  },
  {
    id: 61,
    numeroSocio: 86,
    socioResponsavel: "Darn Bromage",
    dataNascimento: "09/12/2024",
    dataAdesao: "2002/05/17",
    membroResponsavel: "Bernette Niland",
    nome: "Gaylord Cordeau",
    email: "gcordeau1o@redcross.org",
    telefone: "2186925057",
    tipoSangue: "A+",
    rua: "Mandrake",
    numero: "3082",
    concelho: "Apt 1583",
    distrito: "Suite 10",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "06/12/2024",
    dataPagamentoUltimo: "22/02/2024",
  },
  {
    id: 62,
    numeroSocio: 112,
    socioResponsavel: "Christan Macveigh",
    dataNascimento: "11/10/2024",
    dataAdesao: "2001/07/14",
    membroResponsavel: "Ty Baber",
    nome: "Julita Mountjoy",
    email: "jmountjoy1p@themeforest.net",
    telefone: "6671186586",
    tipoSangue: "A+",
    rua: "Larry",
    numero: "3761",
    concelho: "Suite 73",
    distrito: "Suite 98",
    codPostal: "66130",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "01/06/2024",
    dataPagamentoUltimo: "09/12/2024",
  },
  {
    id: 63,
    numeroSocio: 92,
    socioResponsavel: "Elisha Tatam",
    dataNascimento: "30/08/2024",
    dataAdesao: "2007/05/27",
    membroResponsavel: "Nevile Grosvener",
    nome: "Bald Frowde",
    email: "bfrowde1q@time.com",
    telefone: "1773752066",
    tipoSangue: "A+",
    rua: "Crest Line",
    numero: "8",
    concelho: "Apt 1754",
    distrito: "Suite 53",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "20/08/2024",
    dataPagamentoUltimo: "02/04/2024",
  },
  {
    id: 64,
    numeroSocio: 115,
    socioResponsavel: "Ollie Newvill",
    dataNascimento: "03/09/2024",
    dataAdesao: "2015/09/21",
    membroResponsavel: "Olenka Zanolli",
    nome: "Say Harron",
    email: "sharron1r@lycos.com",
    telefone: "8857351285",
    tipoSangue: "A+",
    rua: "Lakewood Gardens",
    numero: "12",
    concelho: "Suite 16",
    distrito: "Apt 3",
    codPostal: "103 83",
    status: "Inativo",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "11/05/2024",
    dataPagamentoUltimo: "31/07/2024",
  },
  {
    id: 65,
    numeroSocio: 151,
    socioResponsavel: "Ruttger Willcock",
    dataNascimento: "06/04/2024",
    dataAdesao: "2002/06/23",
    membroResponsavel: "Levon Bythell",
    nome: "Fallon Kneeshaw",
    email: "fkneeshaw1s@ameblo.jp",
    telefone: "8816206972",
    tipoSangue: "O-",
    rua: "Tony",
    numero: "076",
    concelho: "Suite 94",
    distrito: "10th Floor",
    codPostal: "52109 CEDEX",
    status: "pendente",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "22/06/2024",
    dataPagamentoUltimo: "13/05/2024",
  },
  {
    id: 66,
    numeroSocio: 172,
    socioResponsavel: "Bernadina Brotherhead",
    dataNascimento: "10/06/2024",
    dataAdesao: "2022/01/26",
    membroResponsavel: "Sollie Brabben",
    nome: "Kerry Lighten",
    email: "klighten1t@people.com.cn",
    telefone: "8408721744",
    tipoSangue: "A-",
    rua: "Westridge",
    numero: "277",
    concelho: "11th Floor",
    distrito: "Apt 1698",
    status: "Inativo",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "20/03/2024",
    dataPagamentoUltimo: "21/06/2024",
  },
  {
    id: 67,
    numeroSocio: 100,
    socioResponsavel: "Donnajean De Malchar",
    dataNascimento: "04/03/2024",
    dataAdesao: "2024/05/26",
    membroResponsavel: "Celestine Copyn",
    nome: "Kori Selvester",
    email: "kselvester1u@addthis.com",
    telefone: "7473010053",
    tipoSangue: "A+",
    rua: "Bartillon",
    numero: "42520",
    concelho: "Room 1319",
    distrito: "16th Floor",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "28/07/2024",
    dataPagamentoUltimo: "20/02/2024",
  },
  {
    id: 68,
    numeroSocio: 129,
    socioResponsavel: "Urbanus Gronow",
    dataNascimento: "15/07/2024",
    dataAdesao: "2000/09/04",
    membroResponsavel: "Lancelot McAuslan",
    nome: "Blinnie Preuvost",
    email: "bpreuvost1v@mayoclinic.com",
    telefone: "2171459409",
    tipoSangue: "O+",
    rua: "Russell",
    numero: "8911",
    concelho: "Room 1632",
    distrito: "Room 1026",
    codPostal: "5383",
    status: "Inativo",
    tipo: "visitante",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "28/09/2024",
    dataPagamentoUltimo: "21/03/2024",
  },
  {
    id: 69,
    numeroSocio: 152,
    socioResponsavel: "Cornelle De la Yglesia",
    dataNascimento: "03/01/2025",
    dataAdesao: "2005/09/03",
    membroResponsavel: "Dahlia Rodenburg",
    nome: "Salim Demonge",
    email: "sdemonge1w@ebay.com",
    telefone: "7626954690",
    tipoSangue: "A-",
    rua: "Del Mar",
    numero: "84907",
    concelho: "Room 1342",
    distrito: "8th Floor",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "05/06/2024",
    dataPagamentoUltimo: "17/10/2024",
  },
  {
    id: 70,
    numeroSocio: 101,
    socioResponsavel: "Tracie Hurling",
    dataNascimento: "05/08/2024",
    dataAdesao: "2023/07/21",
    membroResponsavel: "Curcio Shewry",
    nome: "Aylmar Lawler",
    email: "alawler1x@nifty.com",
    telefone: "8645926566",
    tipoSangue: "A-",
    rua: "Beilfuss",
    numero: "22",
    concelho: "1st Floor",
    distrito: "Apt 1106",
    codPostal: "3570-014",
    status: "Ativo",
    tipo: "visitante",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "12/06/2024",
    dataPagamentoUltimo: "28/04/2024",
  },
  {
    id: 71,
    numeroSocio: 146,
    socioResponsavel: "Aurlie Adamowitz",
    dataNascimento: "11/06/2024",
    dataAdesao: "2025/01/02",
    membroResponsavel: "Ardyth Woollett",
    nome: "Damian De Paepe",
    email: "dde1y@state.gov",
    telefone: "4849488700",
    tipoSangue: "O+",
    rua: "Monterey",
    numero: "3070",
    concelho: "PO Box 39269",
    distrito: "Room 1647",
    status: "Inativo",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "09/09/2024",
    dataPagamentoUltimo: "21/03/2024",
  },
  {
    id: 72,
    numeroSocio: 160,
    socioResponsavel: "Dylan Viney",
    dataNascimento: "01/06/2024",
    dataAdesao: "2005/07/09",
    membroResponsavel: "Bjorn Vickers",
    nome: "Henrietta Barrowcliff",
    email: "hbarrowcliff1z@bravesites.com",
    telefone: "3502453965",
    tipoSangue: "O+",
    rua: "Little Fleur",
    numero: "99",
    concelho: "PO Box 49899",
    distrito: "Room 721",
    status: "Inativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "18/05/2024",
    dataPagamentoUltimo: "04/12/2024",
  },
  {
    id: 73,
    numeroSocio: 51,
    socioResponsavel: "Trip Lindsley",
    dataNascimento: "02/12/2024",
    dataAdesao: "2006/01/14",
    membroResponsavel: "Maisie Juanes",
    nome: "Zerk MacColm",
    email: "zmaccolm20@alexa.com",
    telefone: "9184179537",
    tipoSangue: "O+",
    rua: "Sunfield",
    numero: "90835",
    concelho: "Room 233",
    distrito: "Room 276",
    codPostal: "32-112",
    status: "pendente",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "01/12/2024",
    dataPagamentoUltimo: "09/06/2024",
  },
  {
    id: 74,
    numeroSocio: 148,
    socioResponsavel: "Meggy Campelli",
    dataNascimento: "22/11/2024",
    dataAdesao: "2006/08/27",
    membroResponsavel: "Galven Gotcher",
    nome: "Kayley Pankhurst.",
    email: "kpankhurst21@bing.com",
    telefone: "7377326847",
    tipoSangue: "A+",
    rua: "Hansons",
    numero: "6",
    concelho: "Room 1259",
    distrito: "Room 101",
    status: "Inativo",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "20/09/2024",
    dataPagamentoUltimo: "31/05/2024",
  },
  {
    id: 75,
    numeroSocio: 85,
    socioResponsavel: "Estevan Gowman",
    dataNascimento: "23/03/2024",
    dataAdesao: "2017/04/02",
    membroResponsavel: "Clarita Drage",
    nome: "Phip Aylett",
    email: "paylett22@walmart.com",
    telefone: "2906784900",
    tipoSangue: "O+",
    rua: "Dakota",
    numero: "52",
    concelho: "13th Floor",
    distrito: "PO Box 75842",
    status: "Inativo",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "05/05/2024",
    dataPagamentoUltimo: "16/08/2024",
  },
  {
    id: 76,
    numeroSocio: 65,
    socioResponsavel: "Marcie Lamps",
    dataNascimento: "30/03/2024",
    dataAdesao: "2012/04/18",
    membroResponsavel: "Madge Ibbett",
    nome: "Mischa Fri",
    email: "mfri23@ning.com",
    telefone: "3539014991",
    tipoSangue: "O+",
    rua: "Utah",
    numero: "95051",
    concelho: "Apt 1806",
    distrito: "PO Box 36247",
    codPostal: "2434",
    status: "Inativo",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "07/06/2024",
    dataPagamentoUltimo: "29/04/2024",
  },
  {
    id: 77,
    numeroSocio: 142,
    socioResponsavel: "Felike Mullin",
    dataNascimento: "23/04/2024",
    dataAdesao: "2000/08/09",
    membroResponsavel: "Carilyn Dibble",
    nome: "Rosemarie Ruffles",
    email: "rruffles24@wiley.com",
    telefone: "2554814412",
    tipoSangue: "A+",
    rua: "Everett",
    numero: "8162",
    concelho: "Apt 1834",
    distrito: "12th Floor",
    codPostal: "J5X",
    status: "Ativo",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "23/03/2024",
    dataPagamentoUltimo: "02/08/2024",
  },
  {
    id: 78,
    numeroSocio: 157,
    socioResponsavel: "Catlin Jasiak",
    dataNascimento: "03/09/2024",
    dataAdesao: "2002/08/24",
    membroResponsavel: "Carl Kelleher",
    nome: "Rice Reay",
    email: "rreay25@sourceforge.net",
    telefone: "3032673570",
    tipoSangue: "O+",
    rua: "Twin Pines",
    numero: "72422",
    concelho: "Apt 503",
    distrito: "PO Box 9119",
    codPostal: "9307",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "16/05/2024",
    dataPagamentoUltimo: "27/09/2024",
  },
  {
    id: 79,
    numeroSocio: 130,
    socioResponsavel: "Abby Joicey",
    dataNascimento: "12/06/2024",
    dataAdesao: "2019/04/18",
    membroResponsavel: "Lucias Kaesmans",
    nome: "Anne Pullinger",
    email: "apullinger26@globo.com",
    telefone: "3187564196",
    tipoSangue: "A+",
    rua: "Southridge",
    numero: "75",
    concelho: "PO Box 88818",
    distrito: "PO Box 19142",
    codPostal: "SG4",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "08/11/2024",
    dataPagamentoUltimo: "03/04/2024",
  },
  {
    id: 80,
    numeroSocio: 152,
    socioResponsavel: "Mitchel Goosey",
    dataNascimento: "08/09/2024",
    dataAdesao: "2024/06/06",
    membroResponsavel: "Minerva Dessaur",
    nome: "Lorenza Kayes",
    email: "lkayes27@ucsd.edu",
    telefone: "5219290413",
    tipoSangue: "A-",
    rua: "2nd",
    numero: "3",
    concelho: "2nd Floor",
    distrito: "Apt 520",
    codPostal: "N5C",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "31/10/2024",
    dataPagamentoUltimo: "16/07/2024",
  },
  {
    id: 81,
    numeroSocio: 33,
    socioResponsavel: "Rick Browning",
    dataNascimento: "04/04/2024",
    dataAdesao: "2012/03/06",
    membroResponsavel: "Linnea Perrottet",
    nome: "Vivien Verne",
    email: "vverne28@squarespace.com",
    telefone: "9802821091",
    tipoSangue: "O-",
    rua: "Bartelt",
    numero: "3615",
    concelho: "Room 843",
    distrito: "PO Box 71176",
    codPostal: "446870",
    status: "Inativo",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "25/12/2024",
    dataPagamentoUltimo: "12/09/2024",
  },
  {
    id: 82,
    numeroSocio: 70,
    socioResponsavel: "Lisha Greydon",
    dataNascimento: "18/12/2024",
    dataAdesao: "2013/06/04",
    membroResponsavel: "Mose Clubb",
    nome: "Neel Redmond",
    email: "nredmond29@wordpress.com",
    telefone: "8939052129",
    tipoSangue: "A+",
    rua: "Erie",
    numero: "720",
    concelho: "11th Floor",
    distrito: "Room 1035",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "30/09/2024",
    dataPagamentoUltimo: "19/06/2024",
  },
  {
    id: 83,
    numeroSocio: 123,
    socioResponsavel: "Issiah Kharchinski",
    dataNascimento: "05/04/2024",
    dataAdesao: "2009/04/19",
    membroResponsavel: "Ronni Kordova",
    nome: "Tymothy Giacoboni",
    email: "tgiacoboni2a@fc2.com",
    telefone: "1192782641",
    tipoSangue: "A+",
    rua: "Eliot",
    numero: "1391",
    concelho: "PO Box 44626",
    distrito: "Room 344",
    status: "Ativo",
    tipo: "junior",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "05/06/2024",
    dataPagamentoUltimo: "27/01/2024",
  },
  {
    id: 84,
    numeroSocio: 45,
    socioResponsavel: "Bertie Habishaw",
    dataNascimento: "10/08/2024",
    dataAdesao: "2014/05/13",
    membroResponsavel: "Garek Wickwarth",
    nome: "Katerine Spurrior",
    email: "kspurrior2b@mysql.com",
    telefone: "2534507182",
    tipoSangue: "O-",
    rua: "Di Loreto",
    numero: "37484",
    concelho: "PO Box 41279",
    distrito: "14th Floor",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "26/02/2024",
    dataPagamentoUltimo: "28/07/2024",
  },
  {
    id: 85,
    numeroSocio: 52,
    socioResponsavel: "Granthem Trewhitt",
    dataNascimento: "25/04/2024",
    dataAdesao: "2024/08/17",
    membroResponsavel: "Marsh Marking",
    nome: "Pru Dudney",
    email: "pdudney2c@ed.gov",
    telefone: "3096656667",
    tipoSangue: "A-",
    rua: "Hermina",
    numero: "870",
    concelho: "2nd Floor",
    distrito: "Suite 7",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "30/11/2024",
    dataPagamentoUltimo: "29/07/2024",
  },
  {
    id: 86,
    numeroSocio: 164,
    socioResponsavel: "Rosette Dummer",
    dataNascimento: "05/12/2024",
    dataAdesao: "2018/05/06",
    membroResponsavel: "Ruthe Heiden",
    nome: "Fraze MacCafferty",
    email: "fmaccafferty2d@msu.edu",
    telefone: "3307722272",
    tipoSangue: "A-",
    rua: "Sutherland",
    numero: "6789",
    concelho: "Apt 835",
    distrito: "Apt 20",
    status: "Inativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "23/07/2024",
    dataPagamentoUltimo: "23/09/2024",
  },
  {
    id: 87,
    numeroSocio: 5,
    socioResponsavel: "Anabel Happs",
    dataNascimento: "25/01/2025",
    dataAdesao: "2023/10/31",
    membroResponsavel: "Lauren Kinig",
    nome: "Anderea Greneham",
    email: "agreneham2e@psu.edu",
    telefone: "1641931728",
    tipoSangue: "A+",
    rua: "Redwing",
    numero: "1",
    concelho: "PO Box 44164",
    distrito: "Apt 1361",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "29/12/2024",
    dataPagamentoUltimo: "13/12/2024",
  },
  {
    id: 88,
    numeroSocio: 53,
    socioResponsavel: "Christopher Manilo",
    dataNascimento: "01/06/2024",
    dataAdesao: "2014/12/10",
    membroResponsavel: "Ashlan Nyssen",
    nome: "Ezmeralda Lethcoe",
    email: "elethcoe2f@slate.com",
    telefone: "8139482360",
    tipoSangue: "A+",
    rua: "Schurz",
    numero: "763",
    concelho: "PO Box 2288",
    distrito: "Room 1159",
    status: "pendente",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "28/04/2024",
    dataPagamentoUltimo: "12/09/2024",
  },
  {
    id: 89,
    numeroSocio: 93,
    socioResponsavel: "Ludovico Macauley",
    dataNascimento: "11/11/2024",
    dataAdesao: "2019/05/14",
    membroResponsavel: "Nathalia Dunmore",
    nome: "Laurette Stote",
    email: "lstote2g@macromedia.com",
    telefone: "7778073762",
    tipoSangue: "O+",
    rua: "Elmside",
    numero: "3150",
    concelho: "Room 232",
    distrito: "Room 1837",
    codPostal: "H65",
    status: "pendente",
    tipo: "junior",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "12/05/2024",
    dataPagamentoUltimo: "06/05/2024",
  },
  {
    id: 90,
    numeroSocio: 4,
    socioResponsavel: "Flem Whight",
    dataNascimento: "31/03/2024",
    dataAdesao: "2019/04/05",
    membroResponsavel: "Cele McGauhy",
    nome: "Alford Kubczak",
    email: "akubczak2h@latimes.com",
    telefone: "8344702343",
    tipoSangue: "A-",
    rua: "Dahle",
    numero: "7",
    concelho: "Suite 96",
    distrito: "Room 1432",
    status: "Ativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "10/09/2024",
    dataPagamentoUltimo: "22/10/2024",
  },
  {
    id: 91,
    numeroSocio: 53,
    socioResponsavel: "Catina Lipmann",
    dataNascimento: "26/03/2024",
    dataAdesao: "2003/10/25",
    membroResponsavel: "Joice Ferrotti",
    nome: "Jay Garling",
    email: "jgarling2i@wikipedia.org",
    telefone: "2314681228",
    tipoSangue: "A+",
    rua: "Pond",
    numero: "62838",
    concelho: "Suite 84",
    distrito: "Apt 594",
    codPostal: "548 32",
    status: "Ativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "17/01/2025",
    dataPagamentoUltimo: "13/03/2024",
  },
  {
    id: 92,
    numeroSocio: 153,
    socioResponsavel: "Leila Shergill",
    dataNascimento: "20/01/2025",
    dataAdesao: "2016/03/20",
    membroResponsavel: "Salomone Jennings",
    nome: "Audrie Murrell",
    email: "amurrell2j@wikimedia.org",
    telefone: "8992189063",
    tipoSangue: "A-",
    rua: "Pawling",
    numero: "75",
    concelho: "Suite 17",
    distrito: "PO Box 72649",
    codPostal: "374 81",
    status: "Inativo",
    tipo: "socio",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "20/11/2024",
    dataPagamentoUltimo: "14/09/2024",
  },
  {
    id: 93,
    numeroSocio: 42,
    socioResponsavel: "Ruddie Hayers",
    dataNascimento: "23/11/2024",
    dataAdesao: "2019/02/01",
    membroResponsavel: "Chilton Danovich",
    nome: "Vaclav Abramovici",
    email: "vabramovici2k@networkadvertising.org",
    telefone: "5482857904",
    tipoSangue: "O-",
    rua: "Dorton",
    numero: "22",
    concelho: "PO Box 89333",
    distrito: "Room 60",
    codPostal: "606735",
    status: "Inativo",
    tipo: "socio",
    joia: false,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "13/11/2024",
    dataPagamentoUltimo: "27/04/2024",
  },
  {
    id: 94,
    numeroSocio: 16,
    socioResponsavel: "Tawsha McGonagle",
    dataNascimento: "04/01/2025",
    dataAdesao: "2021/04/07",
    membroResponsavel: "Ivonne Rugiero",
    nome: "Sonya McMains",
    email: "smcmains2l@whitehouse.gov",
    telefone: "9091489610",
    tipoSangue: "A-",
    rua: "Quincy",
    numero: "9",
    concelho: "3rd Floor",
    distrito: "Apt 475",
    codPostal: "46-233",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "08/09/2024",
    dataPagamentoUltimo: "05/03/2024",
  },
  {
    id: 95,
    numeroSocio: 16,
    socioResponsavel: "Stefanie Thornewill",
    dataNascimento: "04/10/2024",
    dataAdesao: "2021/12/01",
    membroResponsavel: "Jaquith Causton",
    nome: "Emmet Arnholz",
    email: "earnholz2m@imageshack.us",
    telefone: "9505768359",
    tipoSangue: "A+",
    rua: "High Crossing",
    numero: "5",
    concelho: "PO Box 29849",
    distrito: "Room 1754",
    codPostal: "658640",
    status: "pendente",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "14/06/2024",
    dataPagamentoUltimo: "08/12/2024",
  },
  {
    id: 96,
    numeroSocio: 36,
    socioResponsavel: "Carmelita Oldland",
    dataNascimento: "06/08/2024",
    dataAdesao: "2003/12/25",
    membroResponsavel: "Bea Benyon",
    nome: "Illa Curee",
    email: "icuree2n@fotki.com",
    telefone: "6108025096",
    tipoSangue: "A-",
    rua: "Rutledge",
    numero: "38",
    concelho: "Apt 923",
    distrito: "Room 1739",
    status: "Inativo",
    tipo: "visitante",
    joia: true,
    kit: true,
    grupoWA: false,
    dataPagamentoProximo: "04/03/2024",
    dataPagamentoUltimo: "25/12/2024",
  },
  {
    id: 97,
    numeroSocio: 11,
    socioResponsavel: "Gwendolyn Yalden",
    dataNascimento: "28/07/2024",
    dataAdesao: "2020/11/27",
    membroResponsavel: "Kristi Clilverd",
    nome: "Dre Peasnone",
    email: "dpeasnone2o@uiuc.edu",
    telefone: "1137835043",
    tipoSangue: "A-",
    rua: "Melvin",
    numero: "8892",
    concelho: "14th Floor",
    distrito: "Suite 40",
    codPostal: "117452",
    status: "pendente",
    tipo: "junior",
    joia: false,
    kit: false,
    grupoWA: false,
    dataPagamentoProximo: "29/02/2024",
    dataPagamentoUltimo: "12/01/2025",
  },
  {
    id: 98,
    numeroSocio: 18,
    socioResponsavel: "Wesley Blundin",
    dataNascimento: "06/02/2024",
    dataAdesao: "2016/11/27",
    membroResponsavel: "Evonne Duckham",
    nome: "Sharia Sidon",
    email: "ssidon2p@icio.us",
    telefone: "4457491195",
    tipoSangue: "O+",
    rua: "Judy",
    numero: "566",
    concelho: "Suite 66",
    distrito: "PO Box 57471",
    status: "Ativo",
    tipo: "socio",
    joia: true,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "24/06/2024",
    dataPagamentoUltimo: "08/01/2025",
  },
  {
    id: 99,
    numeroSocio: 117,
    socioResponsavel: "Foss Elijahu",
    dataNascimento: "10/10/2024",
    dataAdesao: "2001/06/27",
    membroResponsavel: "Neall Holttom",
    nome: "Audra Pashen",
    email: "apashen2q@networkadvertising.org",
    telefone: "5784990018",
    tipoSangue: "O+",
    rua: "Mandrake",
    numero: "301",
    concelho: "PO Box 86716",
    distrito: "PO Box 62855",
    codPostal: "N1S",
    status: "Ativo",
    tipo: "junior",
    joia: true,
    kit: false,
    grupoWA: true,
    dataPagamentoProximo: "28/10/2024",
    dataPagamentoUltimo: "19/04/2024",
  },
  {
    id: 100,
    numeroSocio: 168,
    socioResponsavel: "Dorthea Casarili",
    dataNascimento: "26/07/2024",
    dataAdesao: "2005/11/18",
    membroResponsavel: "Sinclair Mosdall",
    nome: "Clair Toft",
    email: "ctoft2r@ucla.edu",
    telefone: "8117350075",
    tipoSangue: "O+",
    rua: "Loomis",
    numero: "261",
    concelho: "8th Floor",
    distrito: "14th Floor",
    status: "Ativo",
    tipo: "visitante",
    joia: false,
    kit: true,
    grupoWA: true,
    dataPagamentoProximo: "28/11/2024",
    dataPagamentoUltimo: "22/05/2024",
  },
];

export const columns: ColumnDef<Member>[] = [
  {
    id: "select",
    header: ({table}) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar tudo"
      />
    ),
    cell: ({row}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Nº",
    cell: ({row}) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "nome",
    header: "Nome",
    cell: ({row}) => (
      <div className="flex items-center">
        <Avatar className="flex items-center justify-center border w-7 h-7">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="rounded-full"
          />
        </Avatar>
        <span className="ml-2">{row.getValue("nome")}</span>
      </div>
    ),
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
    cell: ({row}) => {
      if (row.getValue("tipo") == "Sócio") {
        return <Badge className="bg-black">{row.getValue("tipo")}</Badge>;
      } else {
        return <Badge>{row.getValue("tipo")}</Badge>;
      }
    },
    header: ({column}) => {
      // Lista de tipos de associação para alternar
      const memberships = ["visitante", "socio", "junior"];
      // Obtém o valor atual do filtro
      const currentFilter = column.getFilterValue();

      // Determina o índice atual ou define como -1 se não houver filtro
      const currentFilterIndex = memberships.indexOf(currentFilter);

      return (
        <Button
          variant="ghost"
          onClick={() => {
            // Incrementa o índice ou volta ao início
            const nextFilterIndex =
              (currentFilterIndex + 1) % (memberships.length + 1); // +1 para incluir "limpar filtro"
            const nextFilter =
              nextFilterIndex < memberships.length
                ? memberships[nextFilterIndex]
                : null;

            // Aplica o filtro ou limpa-o
            column.setFilterValue(nextFilter);
          }}
        >
          Associação
          <ArrowUpDown />
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      // Aplica o filtro apenas se o valor for definido
      if (!filterValue) return true; // Exibe todos os itens se o filtro for nulo
      // Obtém o valor da célula correspondente
      const cellValue = row.getValue(columnId);
      return cellValue.toLowerCase() === filterValue.toLowerCase(); // Verifica correspondência exata (ignorando maiúsculas/minúsculas)
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
      const status = row.getValue("status");
      return status === "Ativo" ? (
        <Badge
          className="bg-green-500 hover:bg-green-600 transition-colors cursor-help"
          title="Membro ativo e em dia com pagamentos"
        >
          {status}
        </Badge>
      ) : status === "Inativo" ? (
        <Badge className="bg-red-500 hover:bg-red-600 transition-colors">
          {status}
        </Badge>
      ) : (
        <Badge className="bg-yellow-500 hover:bg-yellow-600 transition-colors">
          {status}
        </Badge>
      );
    },
    header: ({column}) => {
      // Lista de status para alternar
      const statuses = ["ativo", "pendente", "inativo"];
      // Obtém o valor atual do filtro
      const currentFilter = column.getFilterValue();

      // Determina o índice atual ou define como -1 se não houver filtro
      const currentFilterIndex = statuses.indexOf(currentFilter);

      return (
        <Button
          variant="ghost"
          onClick={() => {
            // Incrementa o índice ou volta ao início
            const nextFilterIndex =
              (currentFilterIndex + 1) % (statuses.length + 1); // +1 para incluir "limpar filtro"
            const nextFilter =
              nextFilterIndex < statuses.length
                ? statuses[nextFilterIndex]
                : null;

            // Aplica o filtro ou limpa-o
            column.setFilterValue(nextFilter);
          }}
        >
          Status
          <ArrowUpDown />
        </Button>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      // Aplica o filtro apenas se o valor for definido
      if (!filterValue) return true; // Exibe todos os itens se o filtro for nulo
      // Obtém o valor da célula correspondente
      const cellValue = row.getValue(columnId);
      return cellValue.toLowerCase() === filterValue.toLowerCase(); // Verifica correspondência exata (ignorando maiúsculas/minúsculas)
    },
  },
  {
    accessorKey: "dataAdesao",
    header: "Data de Adesão",
    cell: ({row}) => <div>{row.getValue("dataAdesao")}</div>,
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data de Adesão
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({row}) => {
      const member = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(member.id.toString())
              }
            >
              Copiar ID do membro
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* Editar membro */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent w-full justify-start focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0">
                  Editar membro
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Editar perfil</DialogTitle>
                  <DialogDescription>
                    Faça alterações ao seu perfil aqui. Clique em salvar quando
                    terminar.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      value={member.nome}
                      onChange={(e) => {
                        const newName = e.target.value;
                        // Lógica para atualizar nome
                      }}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={member.email}
                      onChange={(e) => {
                        const newEmail = e.target.value;
                        // Lógica para atualizar email
                      }}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="telefone" className="text-right">
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      value={member.telefone}
                      onChange={(e) => {
                        const newTelefone = e.target.value;
                        // Lógica para atualizar telefone
                      }}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    onClick={() => {
                      // Lógica de salvamento
                      toast({
                        title: "Perfil atualizado",
                        description: "As alterações foram salvas com sucesso.",
                        status: "success",
                        duration: 3000,
                      });
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Salvar alterações
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* Fim editar membro */}

            {/* Ver perfil */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent w-full justify-start focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0">
                  Ver perfil
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Perfil do Membro</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 justify-center bg-slate-100 items-center">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        className="rounded-full"
                      />
                      {member.nome[0]}
                    </Avatar>
                    <div>
                      <div className="text-lg font-medium">{member.nome}</div>
                      <div className="text-sm text-muted-foreground">
                        {member.email}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="telefone" className="text-right">
                      Telefone
                    </Label>
                    <div className="col-span-3">{member.telefone}</div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                      Status
                    </Label>
                    <div className="col-span-3">{member.status}</div>
                    <Label htmlFor="numeroSocio" className="text-right">
                      Nº Sócio
                    </Label>
                    <div className="col-span-3">{member.numeroSocio}</div>
                    <Label htmlFor="tipo" className="text-right">
                      Tipo
                    </Label>
                    <div className="col-span-3">{member.tipo}</div>
                    <Label htmlFor="dataNascimento" className="text-right">
                      Data de Nascimento
                    </Label>
                    <div className="col-span-3">{member.dataNascimento}</div>

                    <Label htmlFor="dataAdesao" className="text-right">
                      Data de Adesão
                    </Label>
                    <div className="col-span-3">{member.dataAdesao}</div>

                    <Label
                      htmlFor="dataPagamentoProximo"
                      className="text-right"
                    >
                      Data de Pagamento Próximo
                    </Label>
                    <div className="col-span-3">
                      {member.dataPagamentoProximo}
                    </div>

                    <Label htmlFor="dataPagamentoUltimo" className="text-right">
                      Data de Pagamento Último
                    </Label>
                    <div className="col-span-3">
                      {member.dataPagamentoUltimo}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Fechar</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {/* Fim ver perfil */}

            {/* Desativar membro */}
            <DropdownMenuItem
              onClick={() => {
                if (
                  window.confirm(
                    "Tem certeza que deseja desativar este membro?"
                  )
                ) {
                  // Lógica de desativação
                  toast({
                    title: "Membro desativado",
                    description: "O membro foi desativado com sucesso.",
                    status: "info",
                    duration: 3000,
                  });
                }
              }}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              Desativar membro
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// ===========================================
// Componente principal
// ===========================================
export default function Members() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Inicialização da tabela com TanStack
  const table = useReactTable({
    data,
    columns,
    // Lida com ordenação/filtragem/visibilidade
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,

    // Modelos de rows
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    // Estado inicial
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="p-4">
          {/* Cabeçalho */}
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          <div className="grid gap-5 md:grid-cols-5 lg:grid-cols-5">
            <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold">Sócios</CardTitle>
                <UsersIcon className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {data.length}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +180.1% que no ano passado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold">
                  Sócios Ativos
                </CardTitle>
                <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +18.9% que no ano passado
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold">
                  Sócios Inativos
                </CardTitle>
                <UserRoundX className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +2.1% que no ano passado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold">Crianças</CardTitle>
                <Baby className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +53.7% que no ano passado
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-bold">Visitantes</CardTitle>
                <PersonStanding className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">328</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +53.7% que no ano passado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Filtro por nome + Menu de colunas */}
          <div className="flex items-center py-4">
            <Input
              placeholder="Filtrar nomes..."
              value={
                (table.getColumn("nome")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("nome")?.setFilterValue(event.target.value)
              }
              className="max-w-sm border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Colunas <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Tabela */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center animate-pulse"
                    >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
                        <span className="text-gray-500">
                          Buscando resultados...
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Área de paginação e linhas por página */}
          <div className="flex items-center justify-end space-x-2 py-4">
            {/* Info de quantas estão selecionadas vs total */}
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} de{" "}
              {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
            </div>

            {/* Linhas por página */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Linhas por página:
              </span>
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="border rounded-md py-1 px-2 text-sm"
              >
                {[5, 10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão Anterior */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>

            {/* Botões de páginas (1, 2, 3, …) */}
            {Array.from({length: table.getPageCount()}, (_, i) => i).map(
              (pageIndex) => (
                <Button
                  key={pageIndex}
                  variant={
                    pageIndex === table.getState().pagination.pageIndex
                      ? "default"
                      : "outline"
                  }
                  onClick={() => table.setPageIndex(pageIndex)}
                  className="px-3 py-1 text-sm"
                >
                  {pageIndex + 1}
                </Button>
              )
            )}

            {/* Botão Próximo */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Próximo
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
