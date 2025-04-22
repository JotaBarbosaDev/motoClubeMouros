"use client";

import React from "react";
import {Button} from "@/components/ui/button";
import {Badge, BadgeProps} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {AppSidebar} from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Skeleton} from "@/components/ui/skeleton";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  CalendarDays,
  CalendarCheck,
  PlusCircle,
  X,
  ActivityIcon,
} from "lucide-react";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {ScrollShadow} from "@heroui/scroll-shadow";
import {EventTimeline} from "@/components/event-timeline";
import {Pie, PieChart} from "recharts";
import {MotorcycleStats} from "@/components/motorcycle-stats";
import {Member, membersData} from "@/app/membros/page";

// Atualize o tipo Participant para estender Member
type Participant = Member;

// Adicione um tipo para evento
type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  memberPrice: number; // preço para sócios
  nonMemberPrice: number; // preço para visitantes
  totalRegistrations: number;
  participants: Participant[];
  posterUrl: string;
};

// Função auxiliar para selecionar membros aleatoriamente
function getRandomMembers(members: Member[], minCount: number) {
  // Se não houver membros suficientes, retorna todos os membros disponíveis
  if (members.length <= minCount) {
    return members;
  }
  // Garante pelo menos minCount membros
  const count = Math.max(minCount, Math.floor(Math.random() * members.length));
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


function getEventStatus(eventDate: string): {
  label: string;
  variant: BadgeProps["variant"];
} {
  const now = new Date();
  const event = new Date(eventDate);

  if (event < now) {
    return { label: "Terminado", variant: "destructive" };
  }

  const diffTime = event.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 1) {
    if (diffDays === 0) {
      return { label: "Hoje", variant: "default" };
    }
    return { label: "Amanhã", variant: "default" };
  }

  if (diffDays < 7) {
    return {
      label: `${diffDays} ${diffDays === 1 ? "dia" : "dias"}`,
      variant: "default",
    };
  }

  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;
    if (remainingDays > 0) {
      return {
        label: `${weeks} ${weeks === 1 ? "semana" : "semanas"} e ${remainingDays} ${remainingDays === 1 ? "dia" : "dias"}`,
        variant: "default",
      };
    }
    return {
      label: `${weeks} ${weeks === 1 ? "semana" : "semanas"}`,
      variant: "default",
    };
  }

  const totalMonths = Math.floor(diffDays / 30);
  if (totalMonths < 12) {
    return {
      label: `${totalMonths} ${totalMonths === 1 ? "mês" : "meses"}`,
      variant: "default",
    };
  } else {
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    if (remainingMonths === 0) {
      return {
        label: `${years} ${years === 1 ? "ano" : "anos"}`,
        variant: "default",
      };
    } else {
      return {
        label: `${years} ${years === 1 ? "ano" : "anos"} e ${remainingMonths} ${remainingMonths === 1 ? "mês" : "meses"}`,
        variant: "default",
      };
    }
  }
}
                          


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
    posterUrl:
      "https://fv2-3.files.fm/thumb_show.php?i=ed5dqfngkx&view&v=1&PHPSESSID=945207529b7c3edd9f619e4d9a6e0ab88fe464fd",
  },
  participants: [
    {
      id: 1,
      name: "João Barbosa",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image:
        "https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg",
    },
    {
      id: 2,
      name: "Maria Silva",
      motorcycle: "Honda CBR600RR",
      category: "Estrada",
      displacement: "600cc",
      image:
        "https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png",
    },
    {
      id: 3,
      name: "Carlos Santos",
      motorcycle: "Royal Enfield Jawa",
      category: "Antiga",
      displacement: "350cc",
      image:
        "https://moto-station.com/wp-content/uploads/2020/02/20/bullet.jpg",
    },
    {
      id: 4,
      name: "Ricardo Rodrigues",
      motorcycle: "Honda CBR1000RR",
      category: "Street",
      displacement: "1000cc",
      image:
        "https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png",
    },
    {
      id: 5,
      name: "Diogo Lima",
      motorcycle: "Royal Enfield Jawa",
      category: "Antiga",
      displacement: "250cc",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0_jSImXXBrGSTryTN9ih53SA-V8EtZAdUdBx-WU5TYEdvDLHQ2uBxLWfrVNYYVrW84q7OsvhMXZYZkOLtPBufnZxJaU8TEDHZDpXz2rPkhUuu9zDceE93l9z95yweL4wr6Z8nTiJb4qFw/s1600/Jawa_353_250_cc_1958.jpg",
    },
    {
      id: 6,
      name: "Diogo Lima",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image:
        "https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg",
    },
    {
      id: 7,
      name: "Ricardo Gonçalves",
      motorcycle: "Honda CB500X",
      category: "Off-Road",
      displacement: "500cc",
      image:
        "https://www.rentriders.pt/wp-content/uploads/2020/07/Honda-CB500X-@-RentRiders.Pt_.webp",
    },
    {
      id: 8,
      name: "Ricardo Gonçalves",
      motorcycle: "Famel Mirage 75",
      category: "Antiga",
      displacement: "49cc",
      image:
        "https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/241635672_4217896921659149_9167464075856022000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gVBjhRyL4s4Q7kNvgFLiw6i&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AQuZp1ROmsazG-uJexDHg_j&oh=00_AYB03Ofyehl3-cBcBEDdkPFgS4fOU0Ntar-583G0JvHoNg&oe=675261CD",
    },
    {
      id: 9,
      name: "Abel Antunes",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image:
        "https://cdn2.yamaha-motor.eu/prod/product-assets/2024/XTZ700/2024-Yamaha-XTZ700-EU-Icon_Blue-360-Degrees-001-03.jpg",
    },
    {
      id: 10,
      name: "André Barros",
      motorcycle: "Yamaha Ténéré",
      category: "Trail",
      displacement: "700cc",
      image:
        "https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg",
    },
    {
      id: 11,
      name: "Carlos Brito",
      motorcycle: "Kawasaki Z750",
      category: "Street",
      displacement: "748cc",
      image:
        "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/imported/FC000000B6311FCBBC.jpg",
    },
    {
      id: 12,
      name: "Carlos Brito",
      motorcycle: "Zundapp Z3",
      category: "Antiga",
      displacement: "49cc",
      image:
        "https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/464108860_27333365279645154_6538200298630381866_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_ohc=e_bpHmALeOQQ7kNvgGOCMgp&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=AH-J0Cha8XQxuLxjgnJRe0D&oh=00_AYALV0DNNlLJn3Mq6J5saE05MlT3xSF4L9GPCbaKTXssHA&oe=67525694",
    },
    {
      id: 13,
      name: "Luis Braga",
      motorcycle: "Honda Nc750x",
      category: "Street",
      displacement: "748cc",
      image:
        "https://motoboxe.pt/cdn/shop/files/nc750x-9.webp?v=1683230929&width=1946",
    },
    {
      id: 14,
      name: "Luis Costa",
      motorcycle: "Zundapp Famel 111",
      category: "Antiga",
      displacement: "49cc",
      image:
        "https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/90670379_3185825938096250_155263767830069248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=xtS2XltXUHcQ7kNvgHpUyBW&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AftAh7n1Ab4gQH8ZDok9EAf&oh=00_AYDebLpCMLABrYNkP4T_fWpi_iJumrtzQ6HNVsSp3RCTGA&oe=6774338C",
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
      image:
        "https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/64729214_2285280605070280_2551032062098276352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eoUAX0r4eG8Q7kNvgFzRpzs&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=Agy9eMcTJndsXMtvFk2DNYu&oh=00_AYAbOF27wqe3h9XCFLfJW_omH1Iv0FIB5-UxnRBSDNQatg&oe=6774454D",
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
      image:
        "https://images5.1000ps.net/images_bikekat/2015/3-SUZUKI/7950-V-Strom_650XT/2.jpg?format=webp&quality=80&scale=both&width=1984&height=1116&bgcolor=rgba_39_42_44_0&mode=pad",
    },
    {
      id: 19,
      name: "Pedro Lima",
      motorcycle: "Honda Africa Twin",
      category: " Big Trail",
      displacement: "1000cc",
      image:
        "https://as.sobrenet.pt/s/image/tsr/brandm/product/1920x1280/wwxclfblf4as3mqyblum4w2snq2.jpg",
    },
  ],
};

// Adicione este tipo
type TimelineEvent = {
  time: string;
  title: string;
  description: string;
  type: "start" | "break" | "end" | "activity";
  location?: string;
};

// Adicione este componente para visualizar um item do cronograma
function TimelineItem({event}: {event: TimelineEvent}) {
  const typeStyles = {
    start: "bg-green-100 text-green-600 border-green-200",
    break: "bg-orange-100 text-orange-600 border-orange-200",
    end: "bg-red-100 text-red-600 border-red-200",
    activity: "bg-blue-100 text-blue-600 border-blue-200",
  };

  return (
    <div className="flex gap-4 relative">
      <div
        className={cn(
          "w-16 text-center py-1 rounded-full text-sm font-medium border",
          typeStyles[event.type]
        )}
      >
        {event.time}
      </div>
      <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border">
        <h4 className="font-medium">{event.title}</h4>
        {event.description && (
          <p className="text-sm text-gray-500 mt-1">{event.description}</p>
        )}
        {event.location && (
          <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Adicione este componente para o modal de detalhes do evento
function EventDetailsDialog({
  event,
  isOpen,
  onClose,
}: {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}) {
  // Exemplo de cronograma (você pode mover isso para seus dados)
  const timelineEvents: TimelineEvent[] = [
    {
      time: "09:00",
      title: "Concentração",
      description: "Encontro inicial",
      location: "Café Central, Porto",
      type: "start" as const,
    },
    {
      time: "09:30",
      title: "Início do Passeio",
      description: "Partida para o percurso",
      location: "Café Central, Porto",
      type: "activity" as const,
    },
    {
      time: "11:00",
      title: "Pausa para Café",
      description: "Parada para reforço",
      location: "Café do Mar, Matosinhos",
      type: "break" as const,
    },
    {
      time: "12:30",
      title: "Almoço",
      description: "Almoço convívio",
      location: "Restaurante O Marinheiro",
      type: "break" as const,
    },
    {
      time: "14:30",
      title: "Retorno",
      description: "Volta ao ponto inicial",
      location: "Porto",
      type: "activity" as const,
    },
    {
      time: "16:00",
      title: "Encerramento",
      description: "Fim do evento",
      location: "Café Central, Porto",
      type: "end" as const,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{event.title}</DialogTitle>
          <DialogDescription>Detalhes completos do evento</DialogDescription>
        </DialogHeader>

        {/* Primeira Linha: Detalhes e Cards */}
        <div className="grid grid-cols-1 gap-6 py-4">
          {/* Linha 1 - Detalhes do Evento */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Porto, Portugal</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>09:00</span>
            </div>

            {/* Preços */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span>
            Sócios: <span className="font-semibold">{event.memberPrice}€</span>
          </span>
              </div>
              <div className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          <span>
            Visitantes: <span className="font-semibold">{event.nonMemberPrice}€</span>
          </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Descrição</h3>
              <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
            </div>
          </div>

          {/* Linha 2 - Cards de Estatísticas com estilo unificado */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <Card>
              <CardHeader>
          <CardTitle>Total Inscritos</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">{event.totalRegistrations}</div>
          <p className="text-sm text-gray-500">Participantes registrados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
          <CardTitle>Sócios</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">
            {event.participants.filter((p) => p.isMember).length}
          </div>
          <p className="text-sm text-gray-500">Membros participantes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
          <CardTitle>Visitantes</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">
            {event.participants.filter((p) => !p.isMember).length}
          </div>
          <p className="text-sm text-gray-500">Visitantes registrados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
          <CardTitle>Total Sócios</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">
            {(event.participants.filter((p) => p.isMember).length * event.memberPrice).toFixed(2)}€
          </div>
          <p className="text-sm text-gray-500">Valor total de sócios</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
          <CardTitle>Total Visitantes</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">
            {(event.participants.filter((p) => !p.isMember).length * event.nonMemberPrice).toFixed(2)}€
          </div>
          <p className="text-sm text-gray-500">Valor total de visitantes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
          <CardTitle>Total Angariado</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="text-2xl font-bold">
            {(
              event.participants.filter((p) => p.isMember).length * event.memberPrice +
              event.participants.filter((p) => !p.isMember).length * event.nonMemberPrice
            ).toFixed(2)}€
          </div>
          <p className="text-sm text-gray-500">Valor total do evento</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Segunda Linha: Gráficos */}
        <div className="mt-6">
          <MotorcycleStats data={event.participants} />
        </div>

        {/* Terceira Linha: Lista de Participantes */}
        <div className="mt-6 space-y-4">
          <h3 className="font-semibold text-lg">Participantes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {event.participants.map((participant) => (
              <Card key={participant.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={`https://i.pravatar.cc/40?img=${participant.id}`}
                      />
                      <AvatarFallback>
                        {participant.name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-base">
                      {participant.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {participant.motorcycle} - {participant.displacement}
                    </div>
                    <Badge variant="secondary">{participant.category}</Badge>
                    {participant.image && (
                      <div className="mt-2">
                        <img
                          src={participant.image}
                          alt="Moto"
                          className="rounded-md object-cover w-full h-24"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quarta Linha: Cronograma */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold">Cronograma do Evento</h3>
          <EventTimeline events={timelineEvents} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Modifique o NewEventDialog para incluir validação e ordenação
function NewEventDialog({isOpen, onClose}: any) {
  const [timeline, setTimeline] = React.useState<TimelineEvent[]>([]);
  const [newTimelineEvent, setNewTimelineEvent] = React.useState<TimelineEvent>(
    {
      time: "",
      title: "",
      description: "",
      type: "activity",
      location: "",
    }
  );
  const [error, setError] = React.useState("");
  const [memberPrice, setMemberPrice] = React.useState(0);
  const [nonMemberPrice, setNonMemberPrice] = React.useState(0);

  const addTimelineEvent = () => {
    setError("");

    if (!newTimelineEvent.time || !newTimelineEvent.title) {
      setError("Horário e título são obrigatórios");
      return;
    }

    // Adiciona o evento e ordena por horário
    const updatedTimeline = [...timeline, newTimelineEvent].sort((a, b) =>
      a.time.localeCompare(b.time)
    );

    setTimeline(updatedTimeline);
    setNewTimelineEvent({
      time: "",
      title: "",
      description: "",
      type: "activity",
      location: "",
    });
  };

  const handleDeleteTimelineEvent = (index: number) => {
    setTimeline(timeline.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Criar Novo Evento</DialogTitle>
          <DialogDescription>
            Preencha os detalhes do novo evento
          </DialogDescription>
        </DialogHeader>

        <ScrollShadow className="max-h-[600px] pr-4">
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Evento</Label>
              <Input id="title" placeholder="Ex: Passeio de Verão" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Horário</Label>
              <Input id="time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Preço</Label>
              <Input id="price" placeholder="Ex: 15€" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Local</Label>
              <Input id="location" placeholder="Ex: Porto, Portugal" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <textarea
                id="description"
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Descreva os detalhes do evento..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="poster">Cartaz do Evento</Label>
              <Input id="poster" type="file" accept="image/*" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Preço para Sócios (€)</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={memberPrice}
                  onChange={(e) => setMemberPrice(parseFloat(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label>Preço para Visitantes (€)</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={nonMemberPrice}
                  onChange={(e) =>
                    setNonMemberPrice(parseFloat(e.target.value))
                  }
                />
              </div>
            </div>

            {/* Seção de Cronograma */}
            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Cronograma</h3>
                <Badge variant="secondary">
                  {timeline.length} {timeline.length === 1 ? "item" : "itens"}
                </Badge>
              </div>

              {timeline.length > 0 ? (
                <EventTimeline
                  events={timeline}
                  onDelete={handleDeleteTimelineEvent}
                  isEditable={true}
                />
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Nenhum item no cronograma</p>
                  <p className="text-sm">
                    Adicione horários para organizar seu evento
                  </p>
                </div>
              )}

              {/* Formulário para adicionar novo evento */}
              <Card className="p-4 mt-4">
                <h4 className="font-medium mb-4">Adicionar Novo Horário</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Horário*</Label>
                    <Input
                      type="time"
                      value={newTimelineEvent.time}
                      onChange={(e) =>
                        setNewTimelineEvent({
                          ...newTimelineEvent,
                          time: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo</Label>
                    <Select
                      value={newTimelineEvent.type}
                      onValueChange={(value) =>
                        setNewTimelineEvent({
                          ...newTimelineEvent,
                          type: value as TimelineEvent["type"],
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="start">Início</SelectItem>
                        <SelectItem value="activity">Atividade</SelectItem>
                        <SelectItem value="break">Pausa/Reforço</SelectItem>
                        <SelectItem value="end">Fim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label>Título*</Label>
                    <Input
                      value={newTimelineEvent.title}
                      onChange={(e) =>
                        setNewTimelineEvent({
                          ...newTimelineEvent,
                          title: e.target.value,
                        })
                      }
                      placeholder="Ex: Concentração"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label>Local</Label>
                    <Input
                      value={newTimelineEvent.location}
                      onChange={(e) =>
                        setNewTimelineEvent({
                          ...newTimelineEvent,
                          location: e.target.value,
                        })
                      }
                      placeholder="Ex: Café Central, Porto"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label>Descrição (opcional)</Label>
                    <textarea
                      value={newTimelineEvent.description}
                      onChange={(e) =>
                        setNewTimelineEvent({
                          ...newTimelineEvent,
                          description: e.target.value,
                        })
                      }
                      placeholder="Ex: Ponto de encontro para início do passeio"
                      className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  {error && (
                    <p className="col-span-2 text-sm text-red-500">{error}</p>
                  )}
                  <Button
                    className="col-span-2"
                    variant="secondary"
                    onClick={addTimelineEvent}
                  >
                    Adicionar ao Cronograma
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </ScrollShadow>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={timeline.length === 0}
            onClick={() => {
              // Lógica para salvar o evento
              onClose();
            }}
          >
            Criar Evento
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Modifique o componente principal para incluir os modais
const EventosPage = () => {
  const [isNewEventOpen, setIsNewEventOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState<any>(null);

  const mockEvents: Event[] = [
    {
      id: 1,
      title: "Passeio de Verão",
      description: "Um passeio de verão relaxante pela costa marítima, explorando as belas praias do Porto e Espinho, com paradas estratégicas para apreciar o pôr do sol e desfrutar de momentos de convívio.",
      date: "2025-02-18",
      memberPrice: 15,
      nonMemberPrice: 20,
      ...(() => {
        const ps = getRandomMembers(membersData, 20);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: true,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster1.jpg",
    },
    {
      id: 2,
      title: "Encontro de Motas Antigas",
      description: "Um emocionante encontro de motocicletas clássicas, onde os amantes das motas antigas se reúnem para apreciar designs atemporais, trocar histórias e celebrar a tradição.",
      date: "2025-02-27",
      memberPrice: 10,
      nonMemberPrice: 15,
      ...(() => {
        const filtered = membersData.filter((m) =>
          m.category.toLowerCase().includes("antiga")
        );
        const ps = getRandomMembers(filtered, 10);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: true,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster2.jpg",
    },
    {
      id: 3,
      title: "Trail Adventure",
      description: "Uma aventura off-road empolgante pelas trilhas acidentadas das serras do norte de Portugal, onde o desafio e a sensação de liberdade se unem para criar uma experiência inesquecível.",
      date: "2026-08-10",
      memberPrice: 25,
      nonMemberPrice: 35,
      ...(() => {
        const filtered = membersData.filter((m) =>
          ["trail", "big trail"].includes(m.category.toLowerCase().trim())
        );
        const ps = getRandomMembers(filtered, 16);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: true,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster3.jpg",
    },
    {
      id: 4,
      title: "Noite das Estradas",
      description: "Um passeio noturno encantador pelas estradas históricas da região, com paradas em pontos emblemáticos e uma atmosfera única sob o céu estrelado, perfeito para os apaixonados por viagens noturnas.",
      date: "2024-09-05",
      memberPrice: 20,
      nonMemberPrice: 30,
      ...(() => {
        const filtered = membersData.filter((m) =>
          ["street", "estrada"].includes(m.category.toLowerCase().trim())
        );
        const ps = getRandomMembers(filtered, 14);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: true,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster4.jpg",
    },
    {
      id: 5,
      title: "Rota das Vindimas",
      description: "Um roteiro cultural e gastronômico pelo Douro, combinando a tradição da vindima com visitas a vinícolas renomadas e degustações de vinhos excepcionais, cercado por paisagens deslumbrantes.",
      date: "2024-09-28",
      memberPrice: 30,
      nonMemberPrice: 45,
      ...(() => {
        const ps = getRandomMembers(membersData, 30);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: Math.random() > 0.3,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster5.jpg",
    },
    {
      id: 6,
      title: "Rota das Vindimas 2",
      description: "A segunda edição do Rota das Vindimas traz novas experiências com degustações exclusivas, visitas a vinícolas emergentes e uma imersão profunda na cultura do vinho, garantindo um passeio enriquecedor e memorável.",
      date: "2025-09-28",
      memberPrice: 30,
      nonMemberPrice: 45,
      ...(() => {
        const ps = getRandomMembers(membersData, 30);
        return {
          totalRegistrations: ps.length,
          participants: ps.map((member) => ({
            ...member,
            isMember: Math.random() > 0.3,
          })) as Participant[],
        };
      })(),
      posterUrl: "https://example.com/poster5.jpg",
    },
  ];

  const now = new Date();
  const upcomingEvents = mockEvents
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const finishedEvents = mockEvents
    .filter(event => new Date(event.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sortedEvents = [...upcomingEvents, ...finishedEvents];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <header className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1" />
                <h1 className="text-2xl font-bold">Eventos</h1>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="flex items-center gap-2"
                    onClick={() => setIsNewEventOpen(true)}
                  >
                    <PlusCircle className="w-4 h-4" />
                    Novo Evento
                  </Button>
                </DialogTrigger>
              </Dialog>
            </header>

            {/* Resumo de Eventos */}
            <div className="grid gap-4 md:grid-cols-4 mb-6">
              {/* Total de Eventos */}
              <Card>
                <CardHeader>
                  <CardTitle>Total de Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockEvents.length}</div>
                  <p className="text-sm text-gray-500">Realizados este ano</p>
                </CardContent>
              </Card>

              {/* Média de Inscritos */}
              <Card>
                <CardHeader>
                  <CardTitle>Média de Inscritos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round(
                      mockEvents.reduce(
                        (acc, evt) => acc + evt.participants.length,
                        0
                      ) / mockEvents.length
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Por evento</p>
                </CardContent>
              </Card>

              {/* Total Angariado */}
              <Card>
                <CardHeader>
                  <CardTitle>Total Angariado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockEvents
                      .reduce((acc, evt) => {
                        return (
                          acc +
                          evt.participants.reduce(
                            (sum, p) =>
                              sum +
                              (p.isMember
                                ? evt.memberPrice
                                : evt.nonMemberPrice),
                            0
                          )
                        );
                      }, 0)
                      .toFixed(2)}
                    €
                  </div>
                  <p className="text-sm text-gray-500">Em todos os eventos</p>
                </CardContent>
              </Card>

              {/* Participantes Únicos */}
              <Card>
                <CardHeader>
                  <CardTitle>Participantes Únicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {
                      new Set(
                        mockEvents.flatMap((evt) =>
                          evt.participants.map((p) => p.id)
                        )
                      ).size
                    }
                  </div>
                  <p className="text-sm text-gray-500">
                    {Math.round(
                      (mockEvents.reduce(
                        (acc, evt) =>
                          acc +
                          evt.participants.filter((p) => p.isMember).length,
                        0
                      ) /
                        mockEvents.reduce(
                          (acc, evt) => acc + evt.participants.length,
                          0
                        )) *
                        100
                    )}
                    % são sócios
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Lista de Eventos */}
            <div className="grid gap-4">
              {sortedEvents.map((event) => (
                <Card
                  key={event.id}
                  className="transform hover:scale-102 transition-all duration-200 hover:shadow-md cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        {/* Data do Evento */}
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg min-w-[80px]">
                          <span className="text-sm font-semibold text-gray-600">
                            {new Date(event.date)
                              .toLocaleString("pt-PT", {month: "short"})
                              .toUpperCase()}
                          </span>
                          <span className="text-2xl font-bold">
                            {new Date(event.date).getDate()}
                          </span>
                          <span className="text-sm text-gray-600">
                            {new Date(event.date).getFullYear()}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="space-y-1">
                            <h3 className="text-xl font-semibold">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <MapPin className="w-4 h-4" />
                              <span>Porto, Portugal</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                09:00
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">
                                09:00
                              </span>
                                {(() => {
                                const status = getEventStatus(event.date);
                                if (status.label === "Terminado") {
                                  return <Badge variant={status.variant}>{status.label}</Badge>;
                                }
                                // Check for singular cases: "1 dia", "1 mês" or "1 ano"
                                const singularRegex = /^1\s+(dia|m[êe]s|ano)$/i;
                                const prefix = singularRegex.test(status.label) ? "Falta" : "Faltam";
                                return (
                                  <Badge variant={status.variant}>
                                  {`${prefix} ${status.label}`}
                                  </Badge>
                                );
                                })()}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {event.participants.slice(0, 3).map((p) => (
                                <Avatar
                                  key={p.id}
                                  className="w-6 h-6 border-2 border-white"
                                >
                                  <AvatarImage
                                    src={`https://i.pravatar.cc/32?img=${p.id}`}
                                    alt={`Participante ${p.id}`}
                                  />
                                </Avatar>
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {event.participants.length > 3
                                ? `+${event.participants.length - 3} participantes`
                                : `${event.participants.length} participantes`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Modais */}
            <NewEventDialog
              isOpen={isNewEventOpen}
              onClose={() => setIsNewEventOpen(false)}
            />
            {selectedEvent && (
              <EventDetailsDialog
                event={selectedEvent}
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
              />
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default EventosPage;
