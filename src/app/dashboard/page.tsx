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
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { QuotaChart } from "@/app/dashboard/quotaChart"




export default function Page() {
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
                    <BreadcrumbLink href="/estatisticas">
                      Estatísticas
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Gerais</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div className="p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:justify-end">
              <Card className="w-full md:w-auto">
                <CardHeader>
                  <CardTitle>Número de Membros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">140</p>
                </CardContent>  
              </Card>
              <Card className="w-full md:w-auto">
                <CardHeader>
                  <CardTitle>Número de Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">250</p>
                </CardContent>
              </Card>
              <Card className="w-full md:w-auto">
                <CardHeader>
                  <CardTitle>Lucro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">€12,500</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <QuotaChart />
            </div>
          </div>
        </div>
        </SidebarInset>
    </SidebarProvider>
  )
}
