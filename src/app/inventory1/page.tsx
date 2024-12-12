"use client"

import { useState, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/app-sidebar';

export default function Component() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Tigelas",
      categoria:"Comida",
      description: "Tigelas caldo verde",
      quantity: 72,
      value: 0,
    },
    {
      id: 2,
      name: "Cerveja Mini Super Bock",
      categoria:"Bar",
      description: "Pack 24 x 20 cl",
      quantity: 4,
      value: 9.99,
    },
    {
      id: 3,
      name: "Thingamajig C",
      categoria:"Bar",
      description: "An essential thingamajig",
      quantity: 12,
      value: 5.99,
    },
    {
      id: 4,
      name: "Doodad D",
      categoria:"Bar",
      description: "A fun doodad",
      quantity: 100,
      value: 2.99,
    },
  ])
  const [newItem, setNewItem] = useState({
    name: "",
    categoria: "",
    description: "",
    quantity: 0,
    value: 0,
  })
  const totalValue = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity * item.value, 0)
  }, [items])
  const inStock = useMemo(() => {
    return items.filter((item) => item.quantity > 0).length
  }, [items])
  const lowStock = useMemo(() => {
    return items.filter((item) => item.quantity <= 10).length
  }, [items])
  const handleAddItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }])
    setNewItem({
      name: "",
      categoria: "",
      description: "",
      quantity: 0,
      value: 0,
    })
  }
  return (
    <SidebarProvider>
      <AppSidebar />
    <SidebarInset>
      <div>
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
    </div>
  </header>
  </div>
    <div className="grid min-h-screen w-full  gap-6 bg-muted/40 p-4 ] md:p-6">
      <div className="flex flex-col">
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Valor do Inventario</CardTitle>
                  <CardDescription>Valor total de stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{totalValue.toFixed(2)}€</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Items em Stock</CardTitle>
                  <CardDescription>Numero total de items em stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{inStock}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Pouco Stock</CardTitle>
                  <CardDescription>Numero de items com menos de 10 elementos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{lowStock}</div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Inventário</CardTitle>
                <CardDescription>Ver e gerir todos os items do invetário</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Preço/Un</TableHead>
                      <TableHead>Preço total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.categoria}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.value.toFixed(2)}€</TableCell>
                        <TableCell>{((item.value) * item.quantity).toFixed(2)}€</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Adicionar novo item </CardTitle>
                <CardDescription>Preencha o formulario para adicionar um novo item ao inventário</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newItem.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Descrição</Label>
                      <Input
                        id="description"
                        value={newItem.description}
                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="quantity">Quantidade</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={newItem.quantity}
                        onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="value">Preço total</Label>
                      <Input
                        id="value"
                        type="number"
                        value={newItem.value}
                        onChange={(e) => setNewItem({ ...newItem, value: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <Button onClick={handleAddItem}>Adicionar item</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
    </SidebarInset>
      </SidebarProvider>
  )
}


