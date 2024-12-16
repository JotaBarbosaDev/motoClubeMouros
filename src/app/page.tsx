'use client';

<<<<<<< HEAD
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
function HandleSubmit(formData: { email: string; password: string }) {
  fetch("/api/login-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      res.json()
      console.log(res);
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error("Erro:", error)
    })

}
=======
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [globalError, setGlobalError] = useState("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) newErrors.email = "O email é obrigatório.";
    if (!formData.password) newErrors.password = "A palavra-passe é obrigatória.";

    setErrors(newErrors);
    setSuccessMessage("");
    setGlobalError("");

    if (Object.keys(newErrors).length === 0) {
      fetch("/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 400) {
            throw new Error("Dados inválidos ou formato de email inválido.");
          } else if (res.status === 401) {
            router.push("/register");
            throw new Error("Credenciais inválidas. Crie uma conta.");
          } else if (res.status === 405) {
            throw new Error("Método não permitido. Use POST.");
          } else {
            throw new Error("Erro desconhecido ao autenticar utilizador.");
          }
        })
        .then((data) => {
          setSuccessMessage("Login efetuado com sucesso! Sessão iniciada.");
          setFormData({ email: "", password: "" });
          router.push("/dashboard");
        })
        .catch((error) => {
          setGlobalError(error.message);
        });
    }
  };
>>>>>>> 4193089198f39787adfee9ec8d5ae374e6625b5d

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Introduza o seu email e password para aceder à sua conta1.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
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
=======
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        {successMessage && (
          <div className="mt-2 rounded bg-green-100 p-3 text-green-700">
            {successMessage}
>>>>>>> 4193089198f39787adfee9ec8d5ae374e6625b5d
          </div>
        )}
        {globalError && (
          <div className="mt-2 rounded bg-red-100 p-3 text-red-700">
            {globalError}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Palavra-passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua palavra-passe"
              value={formData.password}
              onChange={handleChange}
              className="mt-1"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Ainda não tem conta? <span className="text-blue-600 cursor-pointer" onClick={() => router.push("/register")}>Registar</span>
          </p>
        </div>
      </div>
    </div>
  );
}
