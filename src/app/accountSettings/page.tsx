"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback
} from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/app-sidebar';
import dynamic from 'next/dynamic';

const DummyImage = dynamic(() => import('react-simple-placeholder-image').then(mod => mod.DummyImage), { ssr: false });


// Componente Principal
export default function Component() {
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'password':
        return <PasswordSection />;
      case 'notifications':
        return <NotificationSection />;
      case 'subscription':
        return <SubscriptionSection />;
      case 'motorcycles':
        return <MotorcycleSection />;
      case 'dues':
        return <DuesSection />;
      default:
        return <ProfileSection />; // Retorna ProfileSection por padrão
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col w-full min-h-screen dark:bg-gray-900 transition-colors duration-300">
          {/* Cabeçalho */}
          <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800">
            <SidebarTrigger className="" />
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Configurações da Conta
            </h1>
            {/* Espaço reservado para futuros elementos no cabeçalho */}
            <div></div>
          </header>

          {/* Conteúdo Principal */}
          <main className="flex flex-1 p-6">
            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-[250px_1fr] gap-6">
              {/* Navegação Lateral */}
              <nav className="p-6 rounded-lg bg-white dark:bg-gray-800">
                <ul className="space-y-4">
                  {[
                    { id: "profile", label: "Perfil", icon: "👤" },
                    { id: "password", label: "Senha", icon: "🔒" },
                    { id: "notifications", label: "Notificações", icon: "🔔" },
                    { id: "subscription", label: "Assinatura", icon: "💳" },
                    { id: "motorcycles", label: "Motocicletas", icon: "🏍️" },
                    { id: "dues", label: "Taxas", icon: "💰" },
                  ].map(({ id, label, icon }) => (
                    <li key={id}>
                      <button
                        onClick={() => setActiveSection(id)}
                        className={`flex items-center w-full px-4 py-2 rounded-md text-sm font-medium transition 
                          ${
                            activeSection === id
                              ? "bg-black text-white"
                              : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        aria-current={activeSection === id ? "page" : undefined}
                      >
                        <span className="mr-3">{icon}</span>
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Conteúdo das Seções */}
              <div className="flex-1">
                {renderSection()}
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

// Seção de Perfil
function ProfileSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="border-gray-200 dark:border-gray-700">
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Informações de Perfil</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Atualize as informações do seu perfil.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <DummyImage width={250} height={250} shape="avatar" bgColor="#e5e5e5" fgColor="#fff" placeholder="JD" />
            </Avatar>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="self-start">
                Alterar Foto
              </Button>
              <Button variant="secondary">Remover Foto</Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Biografia</Label>
            <textarea
              id="bio"
              rows={4}
              className="p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
              defaultValue="Escreva uma breve biografia sobre você..."
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end border-gray-200 dark:border-gray-700">
        <Button className="bg-black -600 hover:bg-black">Salvar Alterações</Button>
      </CardFooter>
    </Card>
  );
}

// Seção de Senha
function PasswordSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="border-gray-200 dark:border-gray-700">
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Alterar Senha</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Atualize a senha da sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="current-password">Senha Atual</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">Nova Senha</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-200 dark:border-gray-700">
        <Button className="bg-black hover:bg-black">Alterar Senha</Button>
      </CardFooter>
    </Card>
  );
}

// Seção de Notificações
function NotificationSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="border-gray-200 dark:border-gray-700">
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Preferências de Notificação</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Gerencie as preferências de notificações da sua conta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Notificações por Email</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receba notificações importantes via email.</p>
            </div>
            <Checkbox id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Notificações Push</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receba notificações em tempo real no seu dispositivo.</p>
            </div>
            <Checkbox id="push-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Notificações SMS</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receba alertas críticos via SMS.</p>
            </div>
            <Checkbox id="sms-notifications" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end border-gray-200 dark:border-gray-700">
        <Button className="bg-black hover:bg-black">Salvar Preferências</Button>
      </CardFooter>
    </Card>
  );
}

// Seção de Assinatura
function SubscriptionSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader className="border-gray-200 dark:border-gray-700">
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Configurações de Assinatura</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Gerencie os detalhes da sua assinatura.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Plano Atual</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Subscrição - Renovação em 1 ano</p>
            </div>
            <Button variant="outline">
              Atualizar Plano
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Histórico de Pagamentos</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Verifique os seus pagamentos anteriores.</p>
            </div>
            <Button variant="outline">
              Ver Histórico
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Cancelar Assinatura</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Cancelamento irreversível.</p>
            </div>
            <Button variant="destructive" className="hover:bg-red-700">
              Cancelar Assinatura
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Seção de Motocicletas
function MotorcycleSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Detalhes da Motocicleta</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Atualize as informações da sua motocicleta.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="brand">Marca</Label>
            <Input id="brand" defaultValue="Yamaha" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="model">Modelo</Label>
            <Input id="model" defaultValue="MT-07" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="displacement">Cilindrada</Label>
            <Input id="displacement" defaultValue="689cc" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="type">Tipo</Label>
            <Input id="type" defaultValue="Naked" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="photo">Foto</Label>
            <Input id="photo" type="file" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end border-gray-200 dark:border-gray-700">
        <Button className="bg-black hover:bg-black">Salvar Alterações</Button>
      </CardFooter>
    </Card>
  );
}

// Seção de Taxas
function DuesSection() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-gray-100">Pagamentos</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">Gerencie os seus pagamentos e histórico.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Joia</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pago</p>
            </div>
            <Button variant="outline">
              Detalhes
            </Button>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Quota <b>2025</b></p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pendente</p>
            </div>
            <Button variant="outline">
              Pagar Agora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
