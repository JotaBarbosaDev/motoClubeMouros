"use client"

import * as React from "react"
import {
  PieChart,
  CandyCane,
  Cake,
  Bike,
  Users,
  Archive,
  BeerIcon,
  StoreIcon,
  MapPinHouse
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "João Barbosa",
    cargo: "Sócio",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Moto Club Mouros",
      logo: Bike,
      plan: "Aberto",
    }
  ],
  navMain: [
    {
      title: "Estatísticas",
      url: "/",
      icon: PieChart,
      isActive: false,
      items: [
        {
          title: "Gerais",
          url: '/dashboard',
        },
        {
          title: "Eventos",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Membros",
      url: "/members",
      icon: Users,
      items: [
        {
          title: "Direção",
          url: "/members",
        },
        {
          title: "Sócios",
          url: "/members",
        },
        {
          title: "Gema / Quotas",
          url: "/members",
        },
      ],
    },
    {
      title: "Inventário",
      url: "/inventario",
      icon: Archive,
      items: [
        {
          title: "Ver tudo",
          url: "/inventory",
        },
        {
          title: "Material de cozinha",
          url: "/inventario/cozinha",
        },
        {
          title: "Material de bar",
          url: "/inventario/bar",
        },
        {
          title: "Material de escritório",
          url: "/inventario/escritorio",
        },
        {
          title: "Material de limpeza",
          url: "/inventario/limpeza",
        },
        {
          title: "Material de decoração",
          url: "/inventario/decoracao",
        },
        {
          title: "Equipamento de som",
          url: "/inventario/som",
        },
        {
          title: "Lembranças",
          url: "/inventario/lembrancas",
        },
        {
          title: "Outros",
          url: "/inventario/outros",
        },
      ],
    },
    {
      title: "Garagem",
      url: "/garage",
      icon: Bike,
      items: [
        {
          title: "Todas",
          url: "/garage",
        },
        {
          title: "Naked",
          url: "/garage/naked",
        },
        {
          title: "Touring",
          url: "/garage/touring",
        },
        {
          title: "Sport",
          url: "/garage/sport",
        },
        {
          title: "Custom",
          url: "/garage/custom",
        },
        {
          title: "Offroad",
          url: "/garage/offroad",
        },
        {
          title: "Scooter",
          url: "/garage/scooter",
        },
        {
          title: "Clássicas",
          url: "/garage/classicas",
        },
      ],
    },
    {
      title: "Visitas",
      url: "/visitas",
      icon: MapPinHouse,
      items: [
        {
          title: "Visitamos",
          url: "/visitas/visitamos",
        },
        {
          title: "Recebemos",
          url: "/visitas/recebemos",
        },
      ],
    },
    {
      title: "Loja",
      url: "/loja",
      icon: StoreIcon,
      items: [
        {
          title: "Produtos",
          url: "/loja/produtos",
        },
        {
          title: "Vendas",
          url: "/loja/vendas",
        },
        {
          title: "Stock",
          url: "/loja/stock",
        },
      ],
    },
    {
      title: "Bar",
      url: "/bar",
      icon: BeerIcon,
      items: [
        {
          title: "Bebidas",
          url: "/bar/bebidas",
        },
        {
          title: "Comidas",
          url: "/bar/comidas",
        },
        {
          title: "Stock",
          url: "/bar/stock",
        },
      ],
    }
  ],
  events: [
    {
      name: "1º Passeio Pais Natais",
      url: "/eventos/passeio-pais-natais",
      icon: CandyCane,
    },
    {
      name: "Aniversario 2024",
      url: "/eventos/aniversario-2024",
      icon: Cake,
    },
    {
      name: "1ª Concentração",
      url: "/eventos/1a-concentracao",
      icon: Bike,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects events={data.events} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
