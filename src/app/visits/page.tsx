  "use client";

  import { useState } from 'react';
  import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
  import { Button } from '@/components/ui/button';
  import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
  import { Input } from '@/components/ui/input';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
  import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
  import { Separator } from '@/components/ui/separator';
  import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
  import { AppSidebar } from '@/components/app-sidebar';
  import { BadgeCheck, CircleAlert, ArrowRightFromLine, ArrowLeftToLine } from 'lucide-react';

  const visitsData = [
    { club: 'Moto Clube Geraz do Lima', visits: 5, reciprocated: 3, logo: 'https://github.com/shadcn.png' },
    { club: 'Moto Clube de Panque', visits: 2, reciprocated: 2, logo: 'https://github.com/shadcn.png' },
    { club: 'Moto Clube de Faro', visits: 7, reciprocated: 5, logo: 'https://github.com/shadcn.png' },
    { club: 'Moto Clube Moto Galos', visits: 5, reciprocated: 0, logo: 'https://github.com/shadcn.png' },
    { club: 'Moto Clube Barca', visits: 0, reciprocated: 1, logo: 'https://github.com/shadcn.png' },
  ];

  const highlightClass = (visits: number, reciprocated: number) => {
    if (visits === 0 || reciprocated === 0) return 'bg-red-100 border-red-400';
    if (visits === reciprocated) return 'bg-green-100 border-green-400';
    if (visits > reciprocated || reciprocated > visits) return 'bg-yellow-100 border-yellow-400';
    return '';
  };

  export default function Visits() {
    const [tab, setTab] = useState('visited');

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
                      <BreadcrumbLink href="#">Visitas</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Visitamos</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="ml-auto absolute right-4 top-4">Adicionar Visita</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Adicionar Visita</DialogTitle>
                    <DialogDescription>
                      Selecione um motoclube existente ou crie um novo e especifique se visitamos ou fomos visitados.
                    </DialogDescription>
                    <form className="space-y-4">
                      <Select>
                        <SelectTrigger>Selecione um motoclube</SelectTrigger>
                        <SelectContent>
                          {visitsData.map((club, index) => (
                            <SelectItem key={index} value={club.club}>{club.club}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input placeholder="Ou crie um novo motoclube" />
                      <Input type="file" accept="image/*" placeholder="Carregar imagem do motoclube" />
                      <Select>
                        <SelectTrigger>Tipo de Visita</SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visited">Visitamos</SelectItem>
                          <SelectItem value="reciprocated">Visitaram</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button type="submit">Adicionar</Button>
                    </form>
                    <DialogClose asChild>
                      <Button className="mt-4">Fechar</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <Tabs value={tab} onValueChange={setTab}>
                <TabsList>
                  <TabsTrigger value="visited">
                    <ArrowRightFromLine className="h-4 w-4 mr-1" />Visitamos
                  </TabsTrigger>
                  <TabsTrigger value="reciprocated">
                    <ArrowLeftToLine className="h-4 w-4 mr-1" />Visitaram
                  </TabsTrigger>
                  <TabsTrigger value="comparison">
                    Comparação
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="visited">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visitsData.filter(data => data.visits > 0).map((data, index) => (
                      <div key={index} className={`border rounded-lg p-4 shadow-sm ${highlightClass(data.visits, data.reciprocated)}`}>
                        <img src={data.logo} alt={`${data.club} logo`} className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-center">{data.club}</h3>
                        <p className="text-center">Visitamos: {data.visits}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reciprocated">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visitsData.filter(data => data.reciprocated > 0).map((data, index) => (
                      <div key={index} className={`border rounded-lg p-4 shadow-sm ${highlightClass(data.visits, data.reciprocated)}`}>
                        <img src={data.logo} alt={`${data.club} logo`} className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-center">{data.club}</h3>
                        <p className="text-center">Visitaram: {data.reciprocated}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="comparison">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visitsData.map((data, index) => (
                      <div key={index} className={`border rounded-lg p-4 shadow-sm ${highlightClass(data.visits, data.reciprocated)}`}>
                        <img src={data.logo} alt={`${data.club} logo`} className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-center">{data.club}</h3>
                        <p className="text-center">Visitamos: {data.visits}</p>
                        <p className="text-center">Visitaram: {data.reciprocated}</p>
                        {data.visits === 0 || data.reciprocated === 0 ? (
                          <CircleAlert className="h-6 w-6 text-red-500 mx-auto" />
                        ) : data.visits === data.reciprocated ? (
                          <BadgeCheck className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <CircleAlert className="h-6 w-6 text-yellow-500 mx-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
  }
