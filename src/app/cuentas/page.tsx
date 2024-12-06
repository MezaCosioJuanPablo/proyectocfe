"use client";

import LayoutWeb from "../layout/LayoutWeb";
import { useRouter } from "next/navigation"; // Importa useRouter

function CuentasPage() {
  const router = useRouter(); // Inicializa el router

  return (
    <LayoutWeb>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Barra superior */}

        {/* Contenido Principal */}
        <main className="flex w-full mt-8 px-8">
          {/* Menú lateral izquierdo */}
          <aside className="w-1/4 space-y-4">
            <div className="text-left bg-green-600 text-white p-4 font-bold">
              Administrar mi cuenta
            </div>
            <button
              className="w-full border border-gray-300 p-2"
              onClick={() => router.push("/datos")} // Redirección al hacer clic
            >
              Ingresar datos
            </button>

            {/* Botón para redirigir al simulador de consumo */}
            <button
              className="w-full border border-gray-300 p-2"
              onClick={() => router.push("/simulador")} // Redirección al hacer clic
            >
              Simulador del consumo
            </button>

            {/* Botón para redirigir a la página de pago */}
            <button
              className="w-full border border-gray-300 p-2"
              onClick={() => router.push("/pago")} // Redirección al hacer clic
            >
              Medios de pagos
            </button>

            {/* Botón para redirigir a la página de reporte */}
            <button
              className="w-full border border-gray-300 p-2"
              onClick={() => router.push("/reporte")} // Redirección al hacer clic
            >
              Avisar falla
            </button>

            {/* Botón para redirigir a la página de carga múltiples */}
            <button
              className="w-full border border-gray-300 p-2"
              onClick={() => router.push("/carga")} // Redirección al hacer clic
            >
              Cargar múltiples
            </button>
          </aside>

          {/* Área principal de contenido */}
          <section className="flex flex-col w-3/4 pl-8">
            <h2 className="text-xl font-bold mb-4">Agregar nuevo recibo</h2>
            <p>Localiza en tu recibo los siguientes datos:</p>
            <ul className="list-disc pl-6 mb-8">
              <li>Número del servicio</li>
              <li>Total a pagar</li>
              <li>Nombre del servicio</li>
            </ul>

            {/* Información de CFE */}
            <div className="border-t border-gray-300 pt-4">
              <img src="/cfelogo.png" alt="CFE Logo" className="w-32 mb-2" />
              <p className="font-bold">
                CFE suministrador de servicios básicos
              </p>
              <address>
                Av. Paseo de la reforma 164, col. Juárez, Del. Cuauhtémoc, C.P.
                06600, Ciudad de México. <br />
                RFC: CSS
              </address>
            </div>
          </section>
        </main>
      </div>
    </LayoutWeb>
  );
}

export default CuentasPage;
