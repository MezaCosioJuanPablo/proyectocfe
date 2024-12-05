"use client"; // Asegúrate de agregar esta línea al principio

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter para la navegación

export default function SimuladorConsumo() {
  const router = useRouter(); // Instancia de useRouter para navegar
  const [lecturaAnterior, setLecturaAnterior] = useState(2971);
  const [lecturaActual, setLecturaActual] = useState(2062);
  const [costoEstimado, setCostoEstimado] = useState(0);
  const tarifaActual = 0.5;

  const calcularCosto = () => {
    const consumo = lecturaAnterior - lecturaActual;
    const costo = consumo * tarifaActual;
    setCostoEstimado(costo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">
          SIMULADOR DE CONSUMO
        </h2>

        <p className="text-center text-gray-600 mb-4">
          Costo aproximado de energía del día de hoy:{" "}
          <span className="font-semibold">908.00 MXP</span>
        </p>

        <p className="text-center text-gray-600 mb-6">
          Ingresa las lecturas para conocer tu consumo y el costo estimado hasta
          el momento del cálculo.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Lectura anterior (kWh)
          </label>
          <input
            type="number"
            value={lecturaAnterior}
            onChange={(e) => setLecturaAnterior(parseFloat(e.target.value))}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="kWh"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Lectura actual (kWh)
          </label>
          <input
            type="number"
            value={lecturaActual}
            onChange={(e) => setLecturaActual(parseFloat(e.target.value))}
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="kWh"
          />
        </div>

        <button
          onClick={calcularCosto}
          className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 mb-4"
        >
          Calcular
        </button>

        {costoEstimado > 0 && (
          <div className="mt-6 text-center text-xl font-semibold text-teal-600">
            <p>
              Costo aproximado de la próxima facturación:{" "}
              {costoEstimado.toFixed(2)} MXP
            </p>
          </div>
        )}

        <button
          onClick={() => router.push("/cuentas")} // Navega a la página 'cuentas'
          className="w-full mt-4 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Regresar
        </button>
      </div>
    </div>
  );
}
