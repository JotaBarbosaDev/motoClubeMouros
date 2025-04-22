"use client";

import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {
  DollarSignIcon,
  UsersIcon,
  AlertTriangleIcon,
  ActivityIcon,
  TrendingUpIcon,
  CalendarIcon,
  CarIcon,
  UserCheckIcon,
  UserXIcon,
  UserIcon,
  BabyIcon,
  PersonStandingIcon,
} from "lucide-react";
import {ResponsiveLine} from "@nivo/line";
import {ResponsiveBar} from "@nivo/bar";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className="p-6">
            <header className="flex items-center gap-4 mb-6">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-2xl font-bold">Painel de Controle</h1>
            </header>

            {/* Estatísticas Principais */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Total de Sócios
                  </CardTitle>
                  <UsersIcon className="w-4 h-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">328</div>
                  <p className="text-xs text-gray-500">
                    +10.1% que no mês anterior
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Quotas em Atraso
                  </CardTitle>
                  <AlertTriangleIcon className="w-4 h-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">23</div>
                  <p className="text-xs text-gray-500">7% dos sócios</p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Rendimento Mensal
                  </CardTitle>
                  <DollarSignIcon className="w-4 h-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    2,845.50€
                  </div>
                  <p className="text-xs text-gray-500">
                    +15.3% que no mês anterior
                  </p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Novos Membros
                  </CardTitle>
                  <TrendingUpIcon className="w-4 h-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">12</div>
                  <p className="text-xs text-gray-500">Este mês</p>
                </CardContent>
              </Card>
            </div>

            {/* Distribuição de Membros */}
            <div className="grid gap-4 md:grid-cols-5 mb-6">
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">Ativos</CardTitle>
                  <UserCheckIcon className="w-4 h-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">285</div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">Inativos</CardTitle>
                  <UserXIcon className="w-4 h-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">15</div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Visitantes
                  </CardTitle>
                  <PersonStandingIcon className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">42</div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">Juniores</CardTitle>
                  <BabyIcon className="w-4 h-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">18</div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">Pendentes</CardTitle>
                  <UserIcon className="w-4 h-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">8</div>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    Rendimentos por Mês
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[9/4]" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    Evolução de Membros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[9/4]" />
                </CardContent>
              </Card>
            </div>

            {/* Estatísticas Adicionais */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Próximos Eventos
                  </CardTitle>
                  <CalendarIcon className="w-4 h-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">5</div>
                  <p className="text-xs text-gray-500">Nos próximos 30 dias</p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Veículos Registrados
                  </CardTitle>
                  <CarIcon className="w-4 h-4 text-cyan-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-cyan-600">412</div>
                  <p className="text-xs text-gray-500">+8 este mês</p>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Taxa de Atividade
                  </CardTitle>
                  <ActivityIcon className="w-4 h-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">87%</div>
                  <p className="text-xs text-gray-500">
                    +5.2% que no mês anterior
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
            {/* Dados dos Eventos */}
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Eventos Programados
                  </CardTitle>
                  <CalendarIcon className="w-4 h-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">3</div>
                  <p className="text-xs text-gray-500">Próximos eventos</p>
                </CardContent>
              </Card>
    
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Evento em Destaque
                  </CardTitle>
                  <TrendingUpIcon className="w-4 h-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    Corrida Beneficente
                  </div>
                  <p className="text-xs text-gray-500">Data: 10/12/2023</p>
                </CardContent>
              </Card>
    
              <Card className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold">
                    Inscrições Totais
                  </CardTitle>
                  <UserIcon className="w-4 h-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">50</div>
                  <p className="text-xs text-gray-500">Participantes em eventos</p>
                </CardContent>
              </Card>
            </div>
          </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Membros Ativos",
            data: [
              {x: "Jan", y: 285},
              {x: "Fev", y: 290},
              {x: "Mar", y: 298},
              {x: "Abr", y: 305},
              {x: "Mai", y: 312},
              {x: "Jun", y: 328},
            ],
          },
          {
            id: "Novos Membros",
            data: [
              {x: "Jan", y: 8},
              {x: "Fev", y: 12},
              {x: "Mar", y: 15},
              {x: "Abr", y: 10},
              {x: "Mai", y: 14},
              {x: "Jun", y: 12},
            ],
          },
        ]}
        margin={{top: 10, right: 10, bottom: 40, left: 40}}
        xScale={{type: "point"}}
        yScale={{type: "linear"}}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#10b981"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        curve="monotoneX"
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {name: "Jan", valor: 2250},
          {name: "Fev", valor: 2420},
          {name: "Mar", valor: 2650},
          {name: "Abr", valor: 2820},
          {name: "Mai", valor: 2540},
          {name: "Jun", valor: 2845},
        ]}
        keys={["valor"]}
        indexBy="name"
        margin={{top: 0, right: 0, bottom: 40, left: 40}}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
          format: (value: number) => `${value}€`,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltip={({id, value}: any) => (
          <div style={{padding: 12, background: "#fff", borderRadius: 6}}>
            <strong>{String(id)}</strong>: {value}€
          </div>
        )}
        enableLabel={false}
        role="application"
        ariaLabel="Gráfico de barras mostrando rendimentos mensais"
      />
    </div>
  );
}
