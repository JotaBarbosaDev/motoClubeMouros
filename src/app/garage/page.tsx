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
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Yamaha Ténéré </CardTitle>
                  <CardDescription>2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <Avatar className="mb-4">
                    <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" />
                    <AvatarFallback>
                      <Skeleton className="w-full h-full" />
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
                <CardFooter>
                  <p>Eduardo Amorim</p>
                </CardFooter>
              </Card>
            </div>

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Yamaha Ténéré </CardTitle>
                  <CardDescription>2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <Avatar className="mb-4">
                    <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" />
                    <AvatarFallback>
                      <Skeleton className="w-full h-full" />
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
                <CardFooter>
                  <p>Eduardo Amorim</p>
                </CardFooter>
              </Card>
            </div>
            
            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Yamaha Ténéré </CardTitle>
                  <CardDescription>2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <Avatar className="mb-4">
                    <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" />
                    <AvatarFallback>
                      <Skeleton className="w-full h-full animate-pulse" />
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
                <CardFooter>
                  <p>Eduardo Amorim</p>
                </CardFooter>
              </Card>
            </div>

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg hover:scale-105 transition-shadow duration-300">
              <Card>
                <CardHeader>
                  <CardTitle>Yamaha Ténéré </CardTitle>
                  <CardDescription>2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <Avatar className="mb-4">
                    <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" />
                    <AvatarFallback>
                      <Skeleton className="w-full h-full" />
                    </AvatarFallback>
                  </Avatar>
                </CardContent>
                <CardFooter>
                  <p>Eduardo Amorim</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>      
      </SidebarInset>
    </SidebarProvider>
  )
}
