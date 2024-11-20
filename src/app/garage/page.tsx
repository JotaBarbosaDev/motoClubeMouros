import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { AvatarImage, Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/app-sidebar';
import { Badge } from '@/components/ui/badge';
import { Mountain, CircleGauge } from 'lucide-react';

// mountain circle-gauge zap
export default function Garage(){
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
                  <BreadcrumbLink href="#">
                    Garagem
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Tudo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div> 
        </header>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
              <CardHeader>
                <Avatar className="mb-4 w-full h-48">
                <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg"  className="object-cover w-full h-full md:object-contain"/>
                <AvatarFallback>
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
                </Avatar>
                <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  
                  <Badge><Mountain className='w-3 h-3 mx-1'/>Off-road</Badge>
                </div>
                <Badge>700cc</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://example.com/avatar-eduardo-amorim.png" />
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
                <p>Eduardo Amorim</p>
                </div>
                <CardTitle>Yamaha Ténéré</CardTitle>
                <CardDescription>2023</CardDescription>
                <p className="mt-2">Uma moto robusta e versátil, perfeita para aventuras off-road.</p>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><CircleGauge className='w-3 h-3 mx-1'/>Street</Badge>
              </div>
              <Badge>600cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://example.com/avatar-eduardo-amorim.png" />
                <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <p>Ricardo Rodrigues</p>
              </div>
              <CardTitle>Honda CBR600RR</CardTitle>
              <CardDescription>2018</CardDescription>
              <p className="mt-2">Uma moto esportiva ágil e potente, ideal para quem busca desempenho nas ruas e pistas.</p>
              </CardContent>
              </Card>
            </div>
            
          </div>
        </div>      
      </SidebarInset>
    </SidebarProvider>
  )
}
