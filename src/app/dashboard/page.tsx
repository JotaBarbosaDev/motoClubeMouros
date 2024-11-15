import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import Members from "../members/page"
import Statistics from "@/app/estatisticas/page"
import Inventory from "../inventory/page"
import Garage from "../garage/page"
import Visit from "../visit/page"
import Visited from "../visited/page"


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>

        <Statistics />
        <Members />         
        <Inventory />
        <Garage />
        <Visit />
        <Visited />
        
      </SidebarInset>
    </SidebarProvider>
  )
}
