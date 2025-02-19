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
  MapPinHouse,
  FileSpreadsheet,
  ReceiptEuro, 
  Badge
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
import { describe } from "node:test"

const data = {
  user: {
    name: "João Barbosa",
    cargo: "Sócio",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  teams: [
    {
      name: 'Moto Clube "Os Mouros"',
      logo: Bike,
      plan: "Abertos",
    },
  ],
  navMain: [
    {
      title: "Estatísticas",
      url: "/dashboard",
      icon: PieChart,
      isActive: false,
    },
    {
      title: "Tesouraria",
      url: "/dashboard",
      icon: ReceiptEuro,
      isActive: false,
    },
    {
      title: "Membros",
      url: "/heroMembers",
      icon: Users,
      notification: "7",
      notColor: "",
      animate: "animate-pulse",
    },
    {
      title: "Inventário",
      url: "/inventory1",
      icon: Archive,
    },
    {
      title: "Garagem",
      url: "/garage",
      icon: Bike,
    },
    {
      title: "Visitas",
      url: "/visits",
      icon: MapPinHouse,
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
      url: "/heroBar",
      icon: BeerIcon,
      notification: "Fechado",
    },
    {
      title: "Logs",
      url: "/logs",
      icon: FileSpreadsheet,
    },
  ],
  events: [
    {
      name: "Aniversario 2024",
      url: "/eventos/aniversario-2024",
      icon: Cake,
    },
    {
      name: "1º Renas do aço",
      url: "/evento",
      icon: CandyCane,
    },
    {
      name: "1ª Concentração",
      url: "/eventos/1a-concentracao",
      icon: Bike,
    },
  ],
};

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
  );
}
