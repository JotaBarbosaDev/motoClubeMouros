"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Avatar, AvatarImage } from "@/components/ui/avatar" 
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"


const data: Member[] = [
  {
    id: "001",
    nome: "Gonçalo Marques",
    email: "marcuja@example.com",
    telefone: "926078885",
    dataInscricao: "2021/02/01",
  },
  {
    id: "002",
    nome: "Maria Silva",
    email: "maria@example.com",
    telefone: "964914045",
    dataInscricao: "2021/11/07",
  },
  {
    id: "003",
    nome: "José Santos",
    email: "ededkoe@gmail.com",
    telefone: "915639097",
    dataInscricao: "2021/10/01",
  },
  {
    id: "004",
    nome: "Ana Costa",
    email: "ana.costa@example.com",
    telefone: "912345678",
    dataInscricao: "2021/03/15",
  },
  {
    id: "005",
    nome: "Bruno Silva",
    email: "bruno.silva@example.com",
    telefone: "923456789",
    dataInscricao: "2021/04/20",
  },
  {
    id: "006",
    nome: "Carla Fernandes",
    email: "carla.fernandes@example.com",
    telefone: "934567890",
    dataInscricao: "2021/05/25",
  },
  {
    id: "007",
    nome: "Diogo Gomes",
    email: "diogo.gomes@example.com",
    telefone: "945678901",
    dataInscricao: "2021/06/30",
  },
  {
    id: "008",
    nome: "Eduarda Marques",
    email: "eduarda.marques@example.com",
    telefone: "956789012",
    dataInscricao: "2021/07/05",
  },
  {
    id: "009",
    nome: "Fernando Costa",
    email: "fernando.costa@example.com",
    telefone: "967890123",
    dataInscricao: "2021/08/10",
  },
  {
    id: "010",
    nome: "Gabriela Almeida",
    email: "gabriela.almeida@example.com",
    telefone: "978901234",
    dataInscricao: "2021/09/15",
  },
  {
    id: "011",
    nome: "Hugo Rodrigues",
    email: "hugo.rodrigues@example.com",
    telefone: "989012345",
    dataInscricao: "2021/10/20",
  },
  {
    id: "012",
    nome: "Inês Sousa",
    email: "ines.sousa@example.com",
    telefone: "990123456",
    dataInscricao: "2021/11/25",
  },
  {
    id: "013",
    nome: "Joana Silva",
    email: "joana.silva@example.com",
    telefone: "901234567",
    dataInscricao: "2021/12/30",
  },
  {
    id: "014",
    nome: "João Barbosa",
    email: "joao@example.com",
    telefone: "926078885",
    dataInscricao: "2021/02/02",
  },
  
]


export type Member = {
  id: string
  nome: string
  email: string
  telefone: string
  dataInscricao: string
}

export const columns: ColumnDef<Member>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Selecionar tudo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Nº",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "nome",
    header: "Nome",
    cell: ({ row }) => (
      <div className="flex items-center">
        <Avatar className="flex items-center justify-center border w-7 h-7">
        <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
        </Avatar>
        <span className="ml-2">{row.getValue("nome")}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hidden xl:flex md:flex lg:flex sm:flex"
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase hidden sm:flex">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
    cell: ({ row }) => <div>{row.getValue("telefone")}</div>,
  },
  {
    accessorKey: "dataInscricao",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hidden xl:flex md:flex"
        >
          Data de Inscrição
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="hidden xl:flex md:flex">{row.getValue("dataInscricao")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const member = row.original

      return (<>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(member.id)}
            >
              Copiar ID do membro
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Dialog>
  
            <DialogTrigger asChild>
            <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent w-full justify-start focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0">
              Editar membro
            </button>
            </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar perfil</DialogTitle>
                <DialogDescription>
                Faça alterações ao seu perfil aqui. Clique em salvar quando terminar.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input
                  id="name"
                  value={member.nome}
                  onChange={(e) => {
                    const newName = e.target.value;
                  }}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={member.email}
                  onChange={(e) => {
                    const newUsername = e.target.value;
                  }}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Telefone
                </Label>
                <Input
                  id="email"
                  value={member.telefone}
                  onChange={(e) => {
                    const newUsername = e.target.value;
                  }}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
            {/* Ver detalhe do membro */}

          <Dialog>
            <DialogTrigger asChild>
            <button className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent w-full justify-start focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0">
              Ver perfil
            </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Perfil do Membro</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 justify-center bg-slate-100 items-center">
              <AvatarImage src="https://github.com/shadcn.png" className='rounded-full'/>
                {(member.nome as string)[0]}
              </Avatar>
              <div>
                <div className="text-lg font-medium">{member.nome}</div>
                <div className="text-sm text-muted-foreground">{member.email}</div>
              </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="telefone" className="text-right">
                Telefone
              </Label>
              <div className="col-span-3">{member.telefone}</div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dataInscricao" className="text-right">
                Data de Inscrição
              </Label>
              <div className="col-span-3">{member.dataInscricao}</div>
              </div>
            </div>
            <DialogFooter>
            <DialogClose asChild>
              <Button>Fechar</Button>
            </DialogClose>
            </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Fim Ver detalhe do membro */}
          </DropdownMenuContent>
        </DropdownMenu>

        

</>
      )
    },
  },
]

export default function Members() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), 
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>
    <div className="p-4">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Membros
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
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar nomes..."
          value={((table.getColumn("nome")?.getFilterValue() as string) ?? "")}
          onChange={(event) =>
            table.getColumn("nome")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sem resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
            
      </div>
    </div>
    </SidebarInset>
    </SidebarProvider>
  )
}
