'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [globalError, setGlobalError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { username?: string; email?: string; password?: string } = {};

    if (!formData.username) newErrors.username = "O nome de utilizador é obrigatório.";
    if (!formData.email) newErrors.email = "O email é obrigatório.";
    if (!formData.password) newErrors.password = "A palavra-passe é obrigatória.";

    setErrors(newErrors);
    setSuccessMessage("");
    setGlobalError("");

    if (Object.keys(newErrors).length === 0) {
      fetch("/api/create-user", {
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
            throw new Error("Dados inválidos ou email já em uso.");
          } else if (res.status === 401) {
            throw new Error("Utilizador já está autenticado.");
          } else if (res.status === 405) {
            throw new Error("Método não permitido. Use POST.");
          } else {
            throw new Error("Erro desconhecido ao criar utilizador.");
          }
        })
        .then((data) => {
          setSuccessMessage(`Conta criada com sucesso! ID do utilizador: ${data.id}`);
          setFormData({ username: "", email: "", password: "" });
        })
        .catch((error) => {
          setGlobalError(error.message);
        });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">Criar Conta</h1>
        {successMessage && (
          <div className="mt-2 rounded bg-green-100 p-3 text-green-700">
            {successMessage}
          </div>
        )}
        {globalError && (
          <div className="mt-2 rounded bg-red-100 p-3 text-red-700">
            {globalError}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="username">Nome de Utilizador</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Digite seu nome de utilizador"
              value={formData.username}
              onChange={handleChange}
              className="mt-1"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>

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
            Registar
          </Button>
        </form>
      </div>
    </div>
  );
}
