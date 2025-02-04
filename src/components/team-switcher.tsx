"use client"

import * as React from "react"
import { Dialog, DialogTitle, DialogContent } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MapPin } from "lucide-react"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Dialog>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <DialogContent>
              <VisuallyHidden>
                <DialogTitle>{activeTeam.name}</DialogTitle>
              </VisuallyHidden>
            </DialogContent>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <activeTeam.logo className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {activeTeam.name}
              </span>
              <span className="truncate text-xs text-green-700 flex font-semibold animate-pulse"></span>
            </div>
          </SidebarMenuButton>
        </Dialog>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
