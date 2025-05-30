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
import dotenv from 'dotenv';

dotenv.config();

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || '';

function HandleSubmit(formData: { email: string; password: string }) {
  fetch(DOMAIN + "/api/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((data) => {
      if (data.status === 200) {
        //redirect to /dashboard
        window.location.href = '/dashboard';
      }
      console.log(data)
    })
    .catch((error) => {
      console.error("Erro:", error)
    })

}

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Introduza o seu email e password para aceder à sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
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
              onClick={() => {
                const formData = {
                  email: (document.getElementById("email") as HTMLInputElement).value,
                  password: (document.getElementById("password") as HTMLInputElement).value,
                };
                HandleSubmit(formData);
              }}
            >
              Entrar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Não têm uma conta?{" "}
            <Link href="/register" className="underline">
              Registar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
