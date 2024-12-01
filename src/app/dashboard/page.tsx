import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { QuotaChart } from "@/app/dashboard/quotaChart"

const data = [
  { name: 'Jan', visits: 30, reciprocated: 20 },
  { name: 'Feb', visits: 20, reciprocated: 25 },
  { name: 'Mar', visits: 27, reciprocated: 22 },
  { name: 'Apr', visits: 23, reciprocated: 30 },
  { name: 'May', visits: 34, reciprocated: 28 },
  { name: 'Jun', visits: 40, reciprocated: 35 },
  { name: 'Jul', visits: 45, reciprocated: 40 },
  { name: 'Aug', visits: 50, reciprocated: 45 },
  { name: 'Sep', visits: 55, reciprocated: 50 },
  { name: 'Oct', visits: 60, reciprocated: 55 },
  { name: 'Nov', visits: 65, reciprocated: 60 },
  { name: 'Dec', visits: 70, reciprocated: 65 },
];

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <header className="flex items-center gap-4 mb-6">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="h-6" />
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
            </header>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Número de Membros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">140</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Número de Vendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">250</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lucro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">€12,500</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <QuotaChart />
            <Card>
              <CardHeader>
              <CardTitle>Visitas de mes passado</CardTitle>
              </CardHeader>
              <CardContent>  
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {data.map((item, index) => (
                <Card key={index} className="max-w-xs">
                  <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <img src="https://github.com/shadcn.png" alt="Logo X" className="h-8 w-8" />
                    <span className="mx-1">→</span>
                    <img src="https://github.com/shadcn.png" alt="Logo Y" className="h-8 w-8" />
                  </CardTitle>
                  </CardHeader>
                    <CardContent className="flex justify-center">
                    <p className="text-m font-bold">{item.visits} Visitas</p>
                    </CardContent>
                </Card>
                ))}
              </div>
              </CardContent>
            </Card>
            </div>
            

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Eventos Realizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">15</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Produtos Vendidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">500</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Novos Membros</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">30</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Feedbacks Recebidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">120</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Saldo Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">€25,000</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Despesas Recentes</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>Reunião mensal - 10/10/2023</li>
                    <li>Evento de caridade - 15/10/2023</li>
                    <li>Passeio de Natal - 25/12/2023</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Estoque Atual</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>Cervejas: 68</li>
                    <li>Coca Cola Lata: 90</li>
                    <li>Colheres: 48</li>
                    <li>Martini Mini: 32</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
