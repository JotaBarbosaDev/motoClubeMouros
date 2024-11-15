import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { QuotaChart } from "@/app/dashboard/quotaChart"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { AvatarImage, Avatar, AvatarFallback } from '@radix-ui/react-avatar';

export default function Visit(){
    return (
      <div>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Visitas
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Visitamos</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted/50">
                <Card>
                  <CardHeader>
                    <CardTitle>Moto Clube {i + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}
