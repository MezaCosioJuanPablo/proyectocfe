"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleReporte = () => {
    setMensajeEnviado(true);
    setTimeout(() => setMensajeEnviado(false), 3000); // El mensaje desaparecerá en 3 segundos
  };

  const handleRegresar = () => {
    router.push("/cuentas");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado con logo */}
      <header className="bg-green-700 p-4 flex items-center justify-between">
        <img
          src="/cfelogo.png" // Asegúrate de que el logo esté en la carpeta "public" o reemplaza con una URL directa
          alt="Logo CFE"
          className="h-24" // Tamaño más grande (ajustado a 24 unidades de altura)
        />
        <h1 className="text-white text-lg font-semibold">
          Avisar fallas de luz
        </h1>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Reporte de fallas
        </h2>

        <p className="text-gray-600 mb-4">
          Es importante que proporciones los datos exactos para poder atender tu
          reporte.
          <br />
          La atención de las fallas en el suministro no tiene costo para ti.
          <br />
          Los datos personales que proporciones están protegidos, consulta el{" "}
          <a href="#" className="text-blue-500 underline">
            Aviso de privacidad
          </a>
          .
        </p>

        {/* Formulario */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Datos del cliente:
            </label>
            <input
              type="text"
              placeholder="Ejemplo: Kari - 322210350451"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Teléfono fijo (10 dígitos):
            </label>
            <input
              type="text"
              placeholder="Ejemplo: 3221234567"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Teléfono móvil (10 dígitos):
            </label>
            <input
              type="text"
              placeholder="Ejemplo: 3221234567"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Tipo de falla:
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="falla" className="form-radio" />
                <span>Se fue la luz en mi domicilio</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="falla" className="form-radio" />
                <span>Va y viene / Parpadea</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Observaciones:
            </label>
            <textarea
              placeholder="Describe el problema"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handleReporte}
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Enviar reporte
            </button>
            <button
              type="button"
              onClick={handleRegresar}
              className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
            >
              Regresar
            </button>
          </div>
        </form>

        {/* Mensaje de éxito */}
        {mensajeEnviado && (
          <div className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg">
            ¡Reporte enviado con éxito!
          </div>
        )}
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>Comisión Federal de Electricidad - Oficinas Nacionales</p>
          <p>Av. Paseo de la Reforma 164, Col. Juárez, Ciudad de México</p>
          <p>Contacto: 55 5229 4400</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
