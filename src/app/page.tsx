"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Introduza o seu nome de utilizador e password para aceder à sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Nome de Utilizador</Label>
              <Input
                id="email"
                type="text"
                placeholder="ex: utilizador123"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input 
              id="password" 
              type="password" 
              required /> 
            </div>
            <Button 
              type="submit" 
              className="w-full"
              onClick={() => window.location.href = '/dashboard'}
            >
              Entrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não têm uma conta?{" "}
            <Link href="#" className="underline">
              Registar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}