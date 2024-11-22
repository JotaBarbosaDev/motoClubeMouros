"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { GiFallingRocks, GiRoad } from 'react-icons/gi';
import { FaMotorcycle } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectValue } from '@/components/ui/select';


const CaixaPage = () => {
    

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
            <div className="p-4">
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear">
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
                        <BreadcrumbPage>Passeio de Natal </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
                </div>
                </header>
                <div className="flex flex-col items-center py-4 p-5">
                    <div className="w-full max-h-96 overflow-hidden">
                      <img src="https://www.cm-benavente.pt/wp-content/uploads/2024/11/passeio-pais-e-maes-natal-1200.png" alt="Event Poster" className="w-full h-full object-cover rounded-lg shadow-md mb-6" />
                    </div>
                    <div className="w-full p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-600">Passeio de Natal</h2>
                        <p className="text-lg text-gray-700 mb-2">Um passeio de Natal emocionante para todos os membros do motoclube.</p>
                        <div className="flex justify-between items-center text-gray-600">
                            <p className="text-md"><strong>Data:</strong> 25 de Dezembro de 2023</p>
                            <p className="text-md"><strong>Preço:</strong> 10€</p>
                        </div>
                        <div className="flex justify-between items-center text-gray-600 mt-4">
                            <p className="text-md"><strong>Inscrições:</strong> 50</p>
                            <p className="text-md"><strong>Participantes:</strong> 45</p>
                            <p className="text-md"><strong>Faltas:</strong> 5</p>
                        </div>
                    </div>
                        <div className="flex justify-center items-center mt-6">
                        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Inscrever Participante</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscrição</DialogTitle>
          <DialogDescription>
        Por favor, preencha os campos abaixo para inscrever um novo participante no evento.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="marca" className="text-right">
              Marca
            </Label>
            <Input id="marca" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="modelo" className="text-right">
              Modelo
            </Label>
            <Input id="modelo" value="" className="col-span-3" />
          </div>
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tipo" className="text-right">
                Categoria
            </Label>
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione categoria" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categoria</SelectLabel>
          <SelectItem value="offroad">Off-Road</SelectItem>
          <SelectItem value="estrada">Estrada</SelectItem>
          <SelectItem value="antiga">Antiga</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
                        </div>
                        
                        <h3 className="text-xl font-bold mt-6 mb-2 my-20">Lista de Inscritos</h3>
                        <ul className="space-y-4">
                            <li className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
                                <img src="https://github.com/shadcn.png" alt="João Barbosa" className="w-16 h-16 rounded-full border-2 border-gray-300 bg-cover" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-lg">João Barbosa</p>
                                            <p className="text-sm text-gray-500">Yamaha Ténéré</p>
                                        </div>
                                        <Badge className="ml-2"><GiFallingRocks className='w-4 h-4 mr-1' />Trail</Badge>
                                    </div>
                                    <img src="https://www.antero.pt/imgs/produtos/gd_2023_Yamaha_XTZ700SP_EU_Heritage_White_Studio_001_03.jpg" alt="Moto" className="w-full h-32 rounded-md mt-2 object-cover" />
                                </div>
                            </li>
                            <li className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
                                <img src="https://github.com/shadcn.png" alt="João Barbosa" className="w-16 h-16 rounded-full border-2 border-gray-300" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-lg">João Barbosa</p>
                                            <p className="text-sm text-gray-500">Yamaha Ténéré</p>
                                        </div>
                                        <Badge className="ml-2"><GiFallingRocks className='w-4 h-4 mr-1' />Trail</Badge>
                                    </div>
                                    <img src="https://epvalongo.com/wp-content/uploads/2021/02/placeholder.png" alt="Moto" className="w-full h-32 rounded-md mt-2 object-cover" />
                                </div>
                            </li>
                            <li className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
                                <img src="https://github.com/shadcn.png" alt="Maria Silva" className="w-16 h-16 rounded-full border-2 border-gray-300" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-lg">Maria Silva</p>
                                            <p className="text-sm text-gray-500">Honda CBR600RR</p>
                                        </div>
                                        <Badge className="ml-2"><GiRoad className='w-4 h-4 mr-1' />Estrada</Badge>
                                    </div>
                                    <img src="https://motoveiga.pt/wp-content/uploads/2023/11/CBR600R-MOTOVEIGA-.png" alt="Moto" className="w-full h-32 rounded-md mt-2 object-cover" />
                                </div>
                            </li>
                            <li className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4">
                                <img src="https://github.com/shadcn.png" alt="Carlos Santos" className="w-16 h-16 rounded-full border-2 border-gray-300" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold text-lg">Carlos Santos</p>
                                            <p className="text-sm text-gray-500">Royal Enfield Jawa</p>
                                        </div>
                                        <Badge className="ml-2"><FaMotorcycle className='w-4 h-4 mr-1' />Antiga</Badge>
                                    </div>
                                    <img src="https://moto-station.com/wp-content/uploads/2020/02/20/bullet.jpg" alt="Moto" className="w-full h-32 rounded-md mt-2 object-cover" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                </div>
            </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default CaixaPage;
