"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importación del hook useRouter

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // Estado para usuario
  const [password, setPassword] = useState(""); // Estado para contraseña
  const [error, setError] = useState(""); // Estado para errores
  const router = useRouter(); // Instancia de useRouter

  // Tipar el parámetro 'e' como React.FormEvent<HTMLFormElement>
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Por favor, ingresa usuario y contraseña.");
      return;
    }
    setError("");
    router.push("/cuentas"); // Ruta de destino al hacer login exitoso
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/cfelogo.png"}
              alt="Logo de la empresa"
              width={150}
              height={100}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 font-sans">
            Usuarios registrados
          </h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Label
              htmlFor="email"
              className="text-base font-medium text-gray-700"
            >
              Usuario:
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 w-full"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="text-base font-medium text-gray-700"
            >
              Contraseña:
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 w-full"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                <img
                  src="/descarga.png"
                  alt={showPassword ? "Ocultar" : "Mostrar"}
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
            type="submit"
          >
            Ingresar
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-green-700 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="flex justify-between mt-4">
          <Button className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600">
            Regresar
          </Button>
          <Button className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
            Regístrate
          </Button>
        </div>
      </div>
    </div>
  );
}
