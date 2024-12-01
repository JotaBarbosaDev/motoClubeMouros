import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
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
import { GiFallingRocks, GiRoad } from "react-icons/gi";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaMotorcycle } from "react-icons/fa6";



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
                    Eventos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Tudo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto mr-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Adicionar Mota</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Adicionar Mota</DialogTitle>
                  <DialogDescription>
                    Formulário para adicionar uma nova mota.
                  </DialogDescription>
                  {/* formulario */}
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">


            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1' />Trail</Badge>
              </div>
              <Badge>700cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
              <AvatarFallback>EA</AvatarFallback>
              </Avatar>
              <p>Eduardo Amorim</p>
              </div>
              <CardTitle>Yamaha Ténéré</CardTitle>
              <CardDescription>2021</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg">
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
                
                <Badge><GiRoad className='w-3 h-3 mx-1'/>Street</Badge>
              </div>
              <Badge>1000cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
              <AvatarFallback>RR</AvatarFallback>
              </Avatar>
              <p>Ricardo Rodrigues</p>
              </div>
              <CardTitle>Honda CBR1000RR</CardTitle>
              <CardDescription>2008</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0_jSImXXBrGSTryTN9ih53SA-V8EtZAdUdBx-WU5TYEdvDLHQ2uBxLWfrVNYYVrW84q7OsvhMXZYZkOLtPBufnZxJaU8TEDHZDpXz2rPkhUuu9zDceE93l9z95yweL4wr6Z8nTiJb4qFw/s1600/Jawa_353_250_cc_1958.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>250CC</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
              <AvatarFallback>DL</AvatarFallback>
              </Avatar>
              <p>Diogo Lima</p>
              </div>
              <CardTitle>Royal Enfield Jawa</CardTitle>
              <CardDescription>1970</CardDescription>
              </CardContent>
              </Card>
            </div>


            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/>Trail</Badge>
              </div>
              <Badge>700cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>DL</AvatarFallback>
              </Avatar>
              <p>Diogo Lima</p>
              </div>
              <CardTitle>Yamaha Ténéré</CardTitle>
              <CardDescription>2024</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://www.rentriders.pt/wp-content/uploads/2020/07/Honda-CB500X-@-RentRiders.Pt_.webp" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/>Off-Road</Badge>
              </div>
              <Badge>500cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>RG</AvatarFallback>
              </Avatar>
              <p>Ricardo Gonçalves</p>
              </div>
              <CardTitle>Honda CB500X</CardTitle>
              <CardDescription>2019</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/241635672_4217896921659149_9167464075856022000_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gVBjhRyL4s4Q7kNvgFLiw6i&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AQuZp1ROmsazG-uJexDHg_j&oh=00_AYB03Ofyehl3-cBcBEDdkPFgS4fOU0Ntar-583G0JvHoNg&oe=675261CD" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>RG</AvatarFallback>
              </Avatar>
              <p>Ricardo Gonçalves</p>
              </div>
              <CardTitle>Famel Mirage 75</CardTitle>
              <CardDescription>1988</CardDescription>
              </CardContent>
              </Card>
            </div>


            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://cdn2.yamaha-motor.eu/prod/product-assets/2024/XTZ700/2024-Yamaha-XTZ700-EU-Icon_Blue-360-Degrees-001-03.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/>Trail</Badge>
              </div>
              <Badge>700cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <p>Abel Antunes</p>
              </div>
              <CardTitle>Yamaha Ténéré</CardTitle>
              <CardDescription>2023</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://www.yamahamotos.cl/wp-content/uploads/2024/04/tenere_700_2024_gris.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/>Trail</Badge>
              </div>
              <Badge>700cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <p>André Barros</p>
              </div>
              <CardTitle>Yamaha Ténéré</CardTitle>
              <CardDescription>2023</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/imported/FC000000B6311FCBBC.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiRoad className='w-3 h-3 mx-1'/>Street</Badge>
              </div>
              <Badge>748cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <p>Carlos Brito</p>
              </div>
              <CardTitle>Kawasaki Z750</CardTitle>
              <CardDescription>2004</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/464108860_27333365279645154_6538200298630381866_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_ohc=e_bpHmALeOQQ7kNvgGOCMgp&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=AH-J0Cha8XQxuLxjgnJRe0D&oh=00_AYALV0DNNlLJn3Mq6J5saE05MlT3xSF4L9GPCbaKTXssHA&oe=67525694" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <p>Carlos Brito</p>
              </div>
              <CardTitle>Zundapp Z3</CardTitle>
              <CardDescription>1981</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://motoboxe.pt/cdn/shop/files/nc750x-9.webp?v=1683230929&width=1946" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiRoad className='w-3 h-3 mx-1'/>Street</Badge>
              </div>
              <Badge>748cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LB</AvatarFallback>
              </Avatar>
              <p>Luis Braga</p>
              </div>
              <CardTitle>Honda Nc750x</CardTitle>
              <CardDescription>2021</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://scontent.fopo3-1.fna.fbcdn.net/v/t1.6435-9/90670379_3185825938096250_155263767830069248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2285d6&_nc_ohc=xtS2XltXUHcQ7kNvgHpUyBW&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=AftAh7n1Ab4gQH8ZDok9EAf&oh=00_AYDebLpCMLABrYNkP4T_fWpi_iJumrtzQ6HNVsSp3RCTGA&oe=6774338C" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <p>Luis Costa</p>
              </div>
              <CardTitle>Zundapp Famel 111</CardTitle>
              <CardDescription>1994</CardDescription>
              </CardContent>
              </Card>
            </div>


            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <p>Luis Costa</p>
              </div>
              <CardTitle>Titan GT</CardTitle>
              <CardDescription>1969</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://scontent.fopo3-2.fna.fbcdn.net/v/t1.6435-9/64729214_2285280605070280_2551032062098276352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eoUAX0r4eG8Q7kNvgFzRpzs&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=Agy9eMcTJndsXMtvFk2DNYu&oh=00_AYAbOF27wqe3h9XCFLfJW_omH1Iv0FIB5-UxnRBSDNQatg&oe=6774454D" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <p>Luis Costa</p>
              </div>
              <CardTitle>Zundapp Famel xf 17</CardTitle>
              <CardDescription>1978</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://www.oldtimerstudiolisboa.com/imagens/24c4056b2.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><FaMotorcycle className='w-3 h-3 mx-1'/>Antiga</Badge>
              </div>
              <Badge>49cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <p>Luis Costa</p>
              </div>
              <CardTitle>Yamaha DT</CardTitle>
              <CardDescription>1990</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://images5.1000ps.net/images_bikekat/2015/3-SUZUKI/7950-V-Strom_650XT/2.jpg?format=webp&quality=80&scale=both&width=1984&height=1116&bgcolor=rgba_39_42_44_0&mode=pad" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/>Trail</Badge>
              </div>
              <Badge>650cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>LC</AvatarFallback>
              </Avatar>
              <p>Luis Costa</p>
              </div>
              <CardTitle>Suzuki V-strom</CardTitle>
              <CardDescription>2015</CardDescription>
              </CardContent>
              </Card>
            </div>

            <div className="aspect-square sm:aspect-auto rounded-xl bg-muted/50 hover:shadow-lg">
              <Card>
              <CardHeader>
              <Avatar className="mb-4 w-full h-48">
              <AvatarImage src="https://as.sobrenet.pt/s/image/tsr/brandm/product/1920x1280/wwxclfblf4as3mqyblum4w2snq2.jpg" className="object-cover w-full h-full" />
              <AvatarFallback>
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                
                <Badge><GiFallingRocks className='w-3 h-3 mx-1'/> Big Trail</Badge>
              </div>
              <Badge>1000cc</Badge>
              </div>
              </CardHeader>
              <CardContent>
              <div className="flex items-center gap-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                <AvatarFallback>PL</AvatarFallback>
              </Avatar>
              <p>Pedro Lima</p>
              </div>
              <CardTitle>Honda Africa Twin</CardTitle>
              <CardDescription>2016</CardDescription>
              </CardContent>
              </Card>
            </div>


          </div>
        </div>      
      </SidebarInset>
    </SidebarProvider>
  )
}
