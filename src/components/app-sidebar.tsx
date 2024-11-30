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
      url: "/dashboard",
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
        }
      ],
    },
    {
      title: "Garagem",
      url: "/garage",
      icon: Bike,
      items: [
        {
          title: "Motas",
          url: "/garage",
        }
      ],
    },
    {
      title: "Visitas",
      url: "/visitas",
      icon: MapPinHouse,
      items: [
        {
          title: "Visitamos",
          url: "/visits",
        },
        {
          title: "Recebemos",
          url: "/",
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
          title: "Caixa",
          url: "/caixa",
        },
        {
          title: "Preçario",
          url: "/loja/vendas",
        },
        {
          title: "Produtos",
          url: "/loja/stock",
        },
        {
          title: "Stock",
          url: "/",
        }
      ],
    }
  ],
  events: [
    {
      name: "1º Passeio Pais Natais",
      url: "/evento",
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
