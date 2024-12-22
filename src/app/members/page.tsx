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
import {ArrowUpDown, ChevronDown, MoreHorizontal} from "lucide-react";

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

export type Member = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  dataInscricao: string;
};

const data: Member[] = [
  {
    id: "1",
    nome: "Adaline McQuillan",
    email: "amcquillan0@devhub.com",
    telefone: "8926122382",
    dataInscricao: "5/16/2023",
  },
  {
    id: "2",
    nome: "Sadie Moore",
    email: "smoore1@state.gov",
    telefone: "7472663921",
    dataInscricao: "4/17/2022",
  },
  {
    id: "3",
    nome: "Brion Soames",
    email: "bsoames2@lulu.com",
    telefone: "3594887756",
    dataInscricao: "11/2/2023",
  },
  {
    id: "4",
    nome: "Lelia Lyngsted",
    email: "llyngsted3@nature.com",
    telefone: "9327284657",
    dataInscricao: "9/26/2022",
  },
  {
    id: "5",
    nome: "Giacomo Sotworth",
    email: "gsotworth4@shutterfly.com",
    telefone: "5239154029",
    dataInscricao: "12/11/2022",
  },
  {
    id: "6",
    nome: "Davida Burtwell",
    email: "dburtwell5@blogtalkradio.com",
    telefone: "9824115316",
    dataInscricao: "11/22/2024",
  },
  {
    id: "7",
    nome: "Hubey Petrichat",
    email: "hpetrichat6@foxnews.com",
    telefone: "2734550475",
    dataInscricao: "6/24/2023",
  },
  {
    id: "8",
    nome: "Nichol Chimes",
    email: "nchimes7@nifty.com",
    telefone: "9868070137",
    dataInscricao: "8/30/2022",
  },
  {
    id: "9",
    nome: "Adriaens Worcs",
    email: "aworcs8@networkadvertising.org",
    telefone: "8632048650",
    dataInscricao: "4/9/2024",
  },
  {
    id: "10",
    nome: "Rhodia Paolotto",
    email: "rpaolotto9@weather.com",
    telefone: "5358994095",
    dataInscricao: "1/18/2024",
  },
  {
    id: "11",
    nome: "Lena Kissack",
    email: "lkissacka@cnbc.com",
    telefone: "1562664750",
    dataInscricao: "8/29/2022",
  },
  {
    id: "12",
    nome: "Yoshi Stranahan",
    email: "ystranahanb@photobucket.com",
    telefone: "5435030923",
    dataInscricao: "5/18/2023",
  },
  {
    id: "13",
    nome: "Merridie Belk",
    email: "mbelkc@utexas.edu",
    telefone: "6005219216",
    dataInscricao: "7/7/2022",
  },
  {
    id: "14",
    nome: "Kain Kullmann",
    email: "kkullmannd@paginegialle.it",
    telefone: "4821654635",
    dataInscricao: "3/8/2024",
  },
  {
    id: "15",
    nome: "Paolina Loadman",
    email: "ploadmane@wisc.edu",
    telefone: "3396836166",
    dataInscricao: "10/27/2022",
  },
  {
    id: "16",
    nome: "Neal Smees",
    email: "nsmeesf@businessinsider.com",
    telefone: "8666081081",
    dataInscricao: "10/28/2024",
  },
  {
    id: "17",
    nome: "Angelique Lambol",
    email: "alambolg@biglobe.ne.jp",
    telefone: "1845911738",
    dataInscricao: "3/5/2024",
  },
  {
    id: "18",
    nome: "Yolanda Stoke",
    email: "ystokeh@hugedomains.com",
    telefone: "5365418661",
    dataInscricao: "10/26/2023",
  },
  {
    id: "19",
    nome: "Ban Clelle",
    email: "bclellei@walmart.com",
    telefone: "3235811466",
    dataInscricao: "7/15/2023",
  },
  {
    id: "20",
    nome: "Neddy Martinello",
    email: "nmartinelloj@miibeian.gov.cn",
    telefone: "4343728336",
    dataInscricao: "4/13/2024",
  },
  {
    id: "21",
    nome: "Dynah Tunnow",
    email: "dtunnowk@sbwire.com",
    telefone: "8919275447",
    dataInscricao: "3/3/2024",
  },
  {
    id: "22",
    nome: "Hedda Gatehouse",
    email: "hgatehousel@lulu.com",
    telefone: "3929674627",
    dataInscricao: "10/20/2023",
  },
  {
    id: "23",
    nome: "Adina Pudan",
    email: "apudanm@epa.gov",
    telefone: "5311758516",
    dataInscricao: "10/1/2023",
  },
  {
    id: "24",
    nome: "Bren Sego",
    email: "bsegon@mayoclinic.com",
    telefone: "5997334728",
    dataInscricao: "11/27/2024",
  },
  {
    id: "25",
    nome: "Morlee Cubbin",
    email: "mcubbino@engadget.com",
    telefone: "9107198774",
    dataInscricao: "7/24/2023",
  },
  {
    id: "26",
    nome: "Winny Marquand",
    email: "wmarquandp@joomla.org",
    telefone: "6979027846",
    dataInscricao: "1/29/2022",
  },
  {
    id: "27",
    nome: "Nessa Pressman",
    email: "npressmanq@phpbb.com",
    telefone: "1357090422",
    dataInscricao: "5/7/2022",
  },
  {
    id: "28",
    nome: "Westley Osgodby",
    email: "wosgodbyr@go.com",
    telefone: "3988405272",
    dataInscricao: "4/11/2023",
  },
  {
    id: "29",
    nome: "Lesli Doorbar",
    email: "ldoorbars@thetimes.co.uk",
    telefone: "3194661728",
    dataInscricao: "10/21/2023",
  },
  {
    id: "30",
    nome: "Winn Crowd",
    email: "wcrowdt@edublogs.org",
    telefone: "4582484890",
    dataInscricao: "3/5/2022",
  },
  {
    id: "31",
    nome: "Meara Botwood",
    email: "mbotwoodu@dmoz.org",
    telefone: "7163405844",
    dataInscricao: "2/8/2023",
  },
  {
    id: "32",
    nome: "Shoshanna Pryer",
    email: "spryerv@constantcontact.com",
    telefone: "2291673581",
    dataInscricao: "12/6/2024",
  },
  {
    id: "33",
    nome: "Cyrillus Mitford",
    email: "cmitfordw@google.co.uk",
    telefone: "9323513082",
    dataInscricao: "1/17/2023",
  },
  {
    id: "34",
    nome: "Fritz Pargiter",
    email: "fpargiterx@tripadvisor.com",
    telefone: "8844347187",
    dataInscricao: "8/22/2024",
  },
  {
    id: "35",
    nome: "Griffy Heinonen",
    email: "gheinoneny@huffingtonpost.com",
    telefone: "7209102275",
    dataInscricao: "11/20/2022",
  },
  {
    id: "36",
    nome: "Kahaleel Wilcox",
    email: "kwilcoxz@pinterest.com",
    telefone: "4322116262",
    dataInscricao: "9/4/2024",
  },
  {
    id: "37",
    nome: "Tedra Scrine",
    email: "tscrine10@sbwire.com",
    telefone: "3515584278",
    dataInscricao: "9/20/2024",
  },
  {
    id: "38",
    nome: "Ninetta Doncom",
    email: "ndoncom11@blinklist.com",
    telefone: "8497284619",
    dataInscricao: "5/25/2023",
  },
  {
    id: "39",
    nome: "Hedwig Whittock",
    email: "hwhittock12@youtu.be",
    telefone: "7749580147",
    dataInscricao: "12/1/2022",
  },
  {
    id: "40",
    nome: "Claudian Burchett",
    email: "cburchett13@wp.com",
    telefone: "8659818406",
    dataInscricao: "1/23/2022",
  },
  {
    id: "41",
    nome: "Christa Austing",
    email: "causting14@pbs.org",
    telefone: "5653156568",
    dataInscricao: "3/3/2022",
  },
  {
    id: "42",
    nome: "Nolana Ferencz",
    email: "nferencz15@youtu.be",
    telefone: "6592638355",
    dataInscricao: "12/27/2022",
  },
  {
    id: "43",
    nome: "Brnaby Storms",
    email: "bstorms16@yahoo.co.jp",
    telefone: "6672742611",
    dataInscricao: "5/24/2022",
  },
  {
    id: "44",
    nome: "Dedra Tuther",
    email: "dtuther17@nasa.gov",
    telefone: "6106785003",
    dataInscricao: "12/4/2023",
  },
  {
    id: "45",
    nome: "Car Castagneri",
    email: "ccastagneri18@purevolume.com",
    telefone: "7097896166",
    dataInscricao: "3/19/2023",
  },
  {
    id: "46",
    nome: "Maressa Grivori",
    email: "mgrivori19@redcross.org",
    telefone: "9031600547",
    dataInscricao: "10/24/2023",
  },
  {
    id: "47",
    nome: "Patience Siggee",
    email: "psiggee1a@163.com",
    telefone: "6352515039",
    dataInscricao: "3/22/2023",
  },
  {
    id: "48",
    nome: "Solomon Antoszczyk",
    email: "santoszczyk1b@who.int",
    telefone: "1921911311",
    dataInscricao: "6/7/2023",
  },
  {
    id: "49",
    nome: "Cyb Caddick",
    email: "ccaddick1c@europa.eu",
    telefone: "3101667300",
    dataInscricao: "10/28/2023",
  },
  {
    id: "50",
    nome: "Mariel Nanninini",
    email: "mnanninini1d@sourceforge.net",
    telefone: "6088106858",
    dataInscricao: "1/4/2023",
  },
  {
    id: "51",
    nome: "Cammi Lillie",
    email: "clillie1e@icio.us",
    telefone: "1952697294",
    dataInscricao: "4/6/2023",
  },
  {
    id: "52",
    nome: "Fernanda Delea",
    email: "fdelea1f@cornell.edu",
    telefone: "9869857261",
    dataInscricao: "4/7/2022",
  },
  {
    id: "53",
    nome: "Cale Coen",
    email: "ccoen1g@hao123.com",
    telefone: "6791706063",
    dataInscricao: "6/21/2022",
  },
  {
    id: "54",
    nome: "Joby Carlin",
    email: "jcarlin1h@un.org",
    telefone: "4735005735",
    dataInscricao: "2/6/2022",
  },
  {
    id: "55",
    nome: "Aloise Carstairs",
    email: "acarstairs1i@arstechnica.com",
    telefone: "1808800514",
    dataInscricao: "6/28/2024",
  },
  {
    id: "56",
    nome: "Keane St. Aubyn",
    email: "kst1j@apache.org",
    telefone: "5346123274",
    dataInscricao: "4/30/2024",
  },
  {
    id: "57",
    nome: "Sarita Gobert",
    email: "sgobert1k@europa.eu",
    telefone: "8557511456",
    dataInscricao: "9/2/2024",
  },
  {
    id: "58",
    nome: "Maribel Stutard",
    email: "mstutard1l@friendfeed.com",
    telefone: "3557851780",
    dataInscricao: "1/3/2023",
  },
  {
    id: "59",
    nome: "Vivie Petteford",
    email: "vpetteford1m@hubpages.com",
    telefone: "4456781312",
    dataInscricao: "3/24/2024",
  },
  {
    id: "60",
    nome: "Avivah Goly",
    email: "agoly1n@simplemachines.org",
    telefone: "7108655585",
    dataInscricao: "4/24/2022",
  },
  {
    id: "61",
    nome: "Moreen Giffon",
    email: "mgiffon1o@ameblo.jp",
    telefone: "8962855371",
    dataInscricao: "6/8/2022",
  },
  {
    id: "62",
    nome: "Gabbi Ladewig",
    email: "gladewig1p@hatena.ne.jp",
    telefone: "1662391802",
    dataInscricao: "1/28/2022",
  },
  {
    id: "63",
    nome: "Meggy Canby",
    email: "mcanby1q@hhs.gov",
    telefone: "6641772961",
    dataInscricao: "12/13/2022",
  },
  {
    id: "64",
    nome: "Nap Burchmore",
    email: "nburchmore1r@weebly.com",
    telefone: "4526232977",
    dataInscricao: "7/17/2022",
  },
  {
    id: "65",
    nome: "Merrielle Fawley",
    email: "mfawley1s@mapquest.com",
    telefone: "7077199914",
    dataInscricao: "6/30/2024",
  },
  {
    id: "66",
    nome: "Emanuel Jencey",
    email: "ejencey1t@arizona.edu",
    telefone: "1725698337",
    dataInscricao: "5/28/2024",
  },
  {
    id: "67",
    nome: "Kurt Barnardo",
    email: "kbarnardo1u@cnn.com",
    telefone: "8778134607",
    dataInscricao: "8/21/2024",
  },
  {
    id: "68",
    nome: "Augie Challiner",
    email: "achalliner1v@newsvine.com",
    telefone: "8711384101",
    dataInscricao: "8/21/2022",
  },
  {
    id: "69",
    nome: "Aimil Bibey",
    email: "abibey1w@yolasite.com",
    telefone: "3139453749",
    dataInscricao: "2/16/2023",
  },
  {
    id: "70",
    nome: "Mirelle Packman",
    email: "mpackman1x@cbslocal.com",
    telefone: "4787611992",
    dataInscricao: "7/31/2022",
  },
  {
    id: "71",
    nome: "Maren Dyster",
    email: "mdyster1y@intel.com",
    telefone: "8044713798",
    dataInscricao: "5/10/2023",
  },
  {
    id: "72",
    nome: "Mildrid Tripony",
    email: "mtripony1z@instagram.com",
    telefone: "5119044761",
    dataInscricao: "6/15/2022",
  },
  {
    id: "73",
    nome: "Avie Dovinson",
    email: "adovinson20@aol.com",
    telefone: "6888605674",
    dataInscricao: "2/12/2024",
  },
  {
    id: "74",
    nome: "Leshia Boram",
    email: "lboram21@zdnet.com",
    telefone: "3469745475",
    dataInscricao: "1/7/2022",
  },
  {
    id: "75",
    nome: "Blinni Happert",
    email: "bhappert22@webs.com",
    telefone: "4869039996",
    dataInscricao: "8/8/2024",
  },
  {
    id: "76",
    nome: "Val Klemensiewicz",
    email: "vklemensiewicz23@hibu.com",
    telefone: "8675196965",
    dataInscricao: "9/24/2022",
  },
  {
    id: "77",
    nome: "Louise Trowell",
    email: "ltrowell24@youtube.com",
    telefone: "8982806522",
    dataInscricao: "6/21/2024",
  },
  {
    id: "78",
    nome: "Melli McLemon",
    email: "mmclemon25@delicious.com",
    telefone: "3568425229",
    dataInscricao: "5/28/2023",
  },
  {
    id: "79",
    nome: "Zebulon Segrave",
    email: "zsegrave26@unc.edu",
    telefone: "5803193782",
    dataInscricao: "11/21/2023",
  },
  {
    id: "80",
    nome: "Lovell Doohey",
    email: "ldoohey27@storify.com",
    telefone: "1348514915",
    dataInscricao: "11/19/2023",
  },
  {
    id: "81",
    nome: "Thomasina Lauxmann",
    email: "tlauxmann28@jalbum.net",
    telefone: "3379025750",
    dataInscricao: "11/5/2022",
  },
  {
    id: "82",
    nome: "Oswell Berrow",
    email: "oberrow29@jigsy.com",
    telefone: "8938062684",
    dataInscricao: "9/28/2024",
  },
  {
    id: "83",
    nome: "Levon Vurley",
    email: "lvurley2a@ustream.tv",
    telefone: "7754348413",
    dataInscricao: "11/6/2022",
  },
  {
    id: "84",
    nome: "Leanor Burke",
    email: "lburke2b@cloudflare.com",
    telefone: "1272934055",
    dataInscricao: "6/7/2022",
  },
  {
    id: "85",
    nome: "Andris Laurentin",
    email: "alaurentin2c@google.de",
    telefone: "1633322171",
    dataInscricao: "10/20/2022",
  },
  {
    id: "86",
    nome: "Lorna Joskowitz",
    email: "ljoskowitz2d@imgur.com",
    telefone: "4356109423",
    dataInscricao: "6/30/2023",
  },
  {
    id: "87",
    nome: "Valentijn Crosscombe",
    email: "vcrosscombe2e@sakura.ne.jp",
    telefone: "2445368385",
    dataInscricao: "7/5/2024",
  },
  {
    id: "88",
    nome: "Alphonse Masterman",
    email: "amasterman2f@cornell.edu",
    telefone: "9716413109",
    dataInscricao: "7/5/2023",
  },
  {
    id: "89",
    nome: "Melosa Shewery",
    email: "mshewery2g@soundcloud.com",
    telefone: "9644897090",
    dataInscricao: "9/25/2023",
  },
  {
    id: "90",
    nome: "Golda Roebuck",
    email: "groebuck2h@google.ca",
    telefone: "6965196583",
    dataInscricao: "1/16/2023",
  },
  {
    id: "91",
    nome: "Margaux Josland",
    email: "mjosland2i@bluehost.com",
    telefone: "9578611747",
    dataInscricao: "11/10/2022",
  },
  {
    id: "92",
    nome: "Jamill Medway",
    email: "jmedway2j@storify.com",
    telefone: "9057719285",
    dataInscricao: "2/18/2024",
  },
  {
    id: "93",
    nome: "Gherardo Ozanne",
    email: "gozanne2k@huffingtonpost.com",
    telefone: "5296169303",
    dataInscricao: "7/31/2024",
  },
  {
    id: "94",
    nome: "Salomi Knyvett",
    email: "sknyvett2l@jimdo.com",
    telefone: "3966222394",
    dataInscricao: "3/24/2024",
  },
  {
    id: "95",
    nome: "Kizzie Cuttell",
    email: "kcuttell2m@yellowpages.com",
    telefone: "6644423089",
    dataInscricao: "4/15/2024",
  },
  {
    id: "96",
    nome: "Sharline Lightman",
    email: "slightman2n@ebay.co.uk",
    telefone: "6809429222",
    dataInscricao: "11/6/2022",
  },
  {
    id: "97",
    nome: "Amelina Wysome",
    email: "awysome2o@forbes.com",
    telefone: "2717146727",
    dataInscricao: "4/10/2023",
  },
  {
    id: "98",
    nome: "Gene Begin",
    email: "gbegin2p@privacy.gov.au",
    telefone: "1236031106",
    dataInscricao: "6/27/2022",
  },
  {
    id: "99",
    nome: "Jori Reddecliffe",
    email: "jreddecliffe2q@guardian.co.uk",
    telefone: "2326734679",
    dataInscricao: "3/5/2024",
  },
  {
    id: "100",
    nome: "Elonore Ivashkin",
    email: "eivashkin2r@rambler.ru",
    telefone: "8415983464",
    dataInscricao: "1/13/2023",
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
    accessorKey: "email",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hidden xl:flex md:flex lg:flex sm:flex"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({row}) => (
      <div className="lowercase hidden sm:flex">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
    cell: ({row}) => <div>{row.getValue("telefone")}</div>,
  },
  {
    accessorKey: "dataInscricao",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hidden xl:flex md:flex"
        >
          Data de Inscrição
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({row}) => (
      <div className="hidden xl:flex md:flex">
        {row.getValue("dataInscricao")}
      </div>
    ),
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
              onClick={() => navigator.clipboard.writeText(member.id)}
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
                  <Button type="submit">Salvar</Button>
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
                    <Label htmlFor="dataInscricao" className="text-right">
                      Data de Inscrição
                    </Label>
                    <div className="col-span-3">{member.dataInscricao}</div>
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
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Membros</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Gerais</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

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
              className="max-w-sm"
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
                      className="h-24 text-center"
                    >
                      Sem resultados.
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
