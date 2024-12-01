"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {Skeleton} from "@/components/ui/skeleton";



const data = {
  event: {
    title: "1º RENAS DO AÇO",
    description: `Junte-se a nós para o 1º renas do aço, organizado pelo Moto Clube Os Mouros e o Grupo Juventude Jubilar.
    Este evento é uma oportunidade única para os amantes de motos se reunirem e celebrarem o espírito natalino.\nTodos os participantes receberão uma lembrança especial.`,
    date: "21 de Dezembro de 2024",
    price: "15€ C/lanche",
    totalRegistrations: 19,
    participants: 17,
    absences: 2,
    posterUrl: "https://fv2-3.files.fm/thumb_show.php?i=ed5dqfngkx&view&v=1&PHPSESSID=945207529b7c3edd9f619e4d9a6e0ab88fe464fd",
  },
  participants: [
    {
      id: 1,
      name: "João Barbosa",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image: "https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg",
    },
    {
      id: 2,
      name: "Maria Silva",
      motorcycle: "Honda CBR600RR",
      category: "Estrada",
      displacement: "600cc",
      image: "https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png",
    },
    {
      id: 3,
      name: "Carlos Santos",
      motorcycle: "Royal Enfield Jawa",
      category: "Antiga",
      displacement: "350cc",
      image: "https://moto-station.com/wp-content/uploads/2020/02/20/bullet.jpg",
    },
    {
      id: 4,
      name: "Ricardo Rodrigues",
      motorcycle: "Honda CBR1000RR",
      category: "Street",
      displacement: "1000cc",
      image: "https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png",
    },
    {
      id: 5,
      name: "Diogo Lima",
      motorcycle: "Royal Enfield Jawa",
      category: "Antiga",
      displacement: "250cc",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0_jSImXXBrGSTryTN9ih53SA-V8EtZAdUdBx-WU5TYEdvDLHQ2uBxLWfrVNYYVrW84q7OsvhMXZYZkOLtPBufnZxJaU8TEDHZDpXz2rPkhUuu9zDceE93l9z95yweL4wr6Z8nTiJb4qFw/s1600/Jawa_353_250_cc_1958.jpg",
    },
    {
      id: 6,
      name: "Diogo Lima",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image: "https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg",
    },
    {
      id: 7,
      name: "Ricardo Gonçalves",
      motorcycle: "Honda CB500X",
      category: "Off-Road",
      displacement: "500cc",
      image: "https://www.rentriders.pt/wp-content/uploads/2020/07/Honda-CB500X-@-RentRiders.Pt_.webp",
    },
    {
      id: 8,
      name: "Ricardo Gonçalves",
      motorcycle: "Famel Mirage 75",
      category: "Antiga",
      displacement: "49cc",
      image: "https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/241635672_4217896921659149_9167464075856022000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gVBjhRyL4s4Q7kNvgFLiw6i&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AQuZp1ROmsazG-uJexDHg_j&oh=00_AYB03Ofyehl3-cBcBEDdkPFgS4fOU0Ntar-583G0JvHoNg&oe=675261CD",
    },
    {
      id: 9,
      name: "Abel Antunes",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image: "https://cdn2.yamaha-motor.eu/prod/product-assets/2024/XTZ700/2024-Yamaha-XTZ700-EU-Icon_Blue-360-Degrees-001-03.jpg",
    },
    {
      id: 10,
      name: "André Barros",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image: "https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg",
    },
    {
      id: 11,
      name: "Carlos Brito",
      motorcycle: "Kawasaki Z750",
      category: "Street",
      displacement: "748cc",
      image: "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/imported/FC000000B6311FCBBC.jpg",
    },
    {
      id: 12,
      name: "Carlos Brito",
      motorcycle: "Zundapp Z3",
      category: "Antiga",
      displacement: "49cc",
      image: "https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/464108860_27333365279645154_6538200298630381866_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_ohc=e_bpHmALeOQQ7kNvgGOCMgp&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=AH-J0Cha8XQxuLxjgnJRe0D&oh=00_AYALV0DNNlLJn3Mq6J5saE05MlT3xSF4L9GPCbaKTXssHA&oe=67525694",
    },
    {
      id: 13,
      name: "Luis Braga",
      motorcycle: "Honda Nc750x",
      category: "Street",
      displacement: "748cc",
      image: "https://motoboxe.pt/cdn/shop/files/nc750x-9.webp?v=1683230929&width=1946",
    },
    {
      id: 14,
      name: "Luis Costa",
      motorcycle: "Zundapp Famel 111",
      category: "Antiga",
      displacement: "49cc",
      image: "https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/90670379_3185825938096250_155263767830069248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=xtS2XltXUHcQ7kNvgHpUyBW&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AftAh7n1Ab4gQH8ZDok9EAf&oh=00_AYDebLpCMLABrYNkP4T_fWpi_iJumrtzQ6HNVsSp3RCTGA&oe=6774338C",
    },
    {
      id: 15,
      name: "Luis Costa",
      motorcycle: "Titan GT",
      category: "Antiga",
      displacement: "49cc",
      image: "",
    },
    {
      id: 16,
      name: "Luis Costa",
      motorcycle: "Zundapp Famel xf 17",
      category: "Antiga",
      displacement: "49cc",
      image: "https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/64729214_2285280605070280_2551032062098276352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eoUAX0r4eG8Q7kNvgFzRpzs&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=Agy9eMcTJndsXMtvFk2DNYu&oh=00_AYAbOF27wqe3h9XCFLfJW_omH1Iv0FIB5-UxnRBSDNQatg&oe=6774454D",
    },
    {
      id: 17,
      name: "Luis Costa",
      motorcycle: "Yamaha DT",
      category: "Antiga",
      displacement: "49cc",
      image: "https://www.oldtimerstudiolisboa.com/imagens/24c4056b2.jpg",
    },
    {
      id: 18,
      name: "Luis Costa",
      motorcycle: "Suzuki V-strom",
      category: "Trail",
      displacement: "650cc",
      image: "https://images5.1000ps.net/images_bikekat/2015/3-SUZUKI/7950-V-Strom_650XT/2.jpg?format=webp&quality=80&scale=both&width=1984&height=1116&bgcolor=rgba_39_42_44_0&mode=pad",
    },
    {
      id: 19,
      name: "Pedro Lima",
      motorcycle: "Honda Africa Twin",
      category: " Big Trail",
      displacement: "1000cc",
      image: "https://as.sobrenet.pt/s/image/tsr/brandm/product/1920x1280/wwxclfblf4as3mqyblum4w2snq2.jpg",
    },
  ],
};

const CaixaPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
      <div>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Eventos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>1º Renas do aço</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div> 
        </header>

          <div className="container mx-auto py-10 px-2 space-y-12 bg-gray-50">
            {/* Poster Section */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={data.event.posterUrl}
                    alt="Event Poster"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-6">
                    <div>
                      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
                        {data.event.title}
                      </h1>
                      <p className="text-lg text-gray-200 mt-1">{data.event.date}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Cartaz do evento</DialogTitle>
                </DialogHeader>
                <img
                  src={data.event.posterUrl}
                  alt="Event Poster"
                  className="w-full h-auto object-cover"
                />
              </DialogContent>
            </Dialog>

            {/* Register Button */}
            <div className="flex justify-end w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-black text-white shadow-md hover:bg-gray-800">Inscrever</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Nova Inscrição</DialogTitle>
                      <DialogDescription>
                        Preencha os detalhes abaixo para inscrever um participante.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="marca" className="text-right">
                          Marca
                        </Label>
                        <Input id="marca" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="modelo" className="text-right">
                          Modelo
                        </Label>
                        <Input id="modelo" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="displacement" className="text-right">
                          Cilindrada
                        </Label>
                        <Input id="displacement" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tipo" className="text-right">
                          Categoria
                        </Label>
                        <Select>
                          <SelectTrigger className="w-44">
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="offroad">Trail</SelectItem>
                            <SelectItem value="estrada">Estrada</SelectItem>
                            <SelectItem value="antiga">Antiga</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="photo" className="text-right">
                          Fotografia
                        </Label>
                        <Input id="photo" type="file" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Guardar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-2 bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Detalhes do Evento</h2>
                <p className="text-gray-700 text-lg mb-6">{data.event.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <p>
                    <strong>Data do evento:</strong> {data.event.date}
                  </p>
                  <p>
                    <strong>Data Limite de Inscrição:</strong> 14 de Dezembro de 2024
                  </p>
                  <p>
                    <strong>Preço:</strong> {data.event.price}
                  </p>
                  <p>
                    <strong>Inscrições:</strong> {data.event.totalRegistrations}
                  </p>
                  <p>
                    <strong>Participantes:</strong> {data.event.participants}
                  </p>
                  <p>
                    <strong>Faltas:</strong> {data.event.absences}
                  </p>
                </div>
              </div>

              {/* Event Program */}
              <div className="bg-white rounded-lg shadow-md p-8 w-full">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Programa do Evento</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>12:45 - Concentração das motas junto à igreja de vitorino de piães</li>
                  <li>13:00 - Benção do capacetes</li>
                  <li>17:00 - Entrega das lembranças às crianças da catequese</li>
                  <li>17:30 - Lanche na sede do moto clube "Os mouros"</li>
                </ul>
              </div>

              
            </div>
            
            {/* Participant List */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Participantes Inscritos ({data.participants.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow"
                  >
                    {participant.image ? (
                      <img
                        src={participant.image}
                        alt={participant.motorcycle}
                        className="w-full h-40 rounded-md object-cover mb-4"
                      />
                    ) : (
                      <div className="w-full h-40 rounded-md bg-gray-200 flex items-center justify-center mb-4">
                        <Skeleton className="w-full h-full" />
                      </div>
                    )}
                    <div className="text-center">
                      <h4 className="text-xl font-semibold">{participant.name}</h4>
                      <p className="text-sm text-gray-500">{participant.motorcycle}</p>
                      <div className="mt-2">
                        <Badge variant="outline" className="mr-2">
                          {participant.category}
                        </Badge>
                        <Badge variant="default" className="bg-black text-white">{participant.displacement}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default CaixaPage;
