// src/app/medidor/page.tsx

"use client";

import { useRouter } from "next/navigation";

const MedidorPage = () => {
  const router = useRouter();

  const handleRegresar = () => {
    router.push("/cuentas");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Revisión del Medidor de CFE
        </h1>

        <div className="mb-6">
          <p className="text-lg text-gray-700">
            Aquí puedes revisar el estado de tu medidor y verificar la lectura
            actual para tu facturación.
          </p>
        </div>

        {/* Aquí puedes agregar más detalles o imágenes del medidor */}
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Lectura Actual
          </h2>
          <p className="text-gray-600">Lectura: 450 kWh</p>
          <p className="text-gray-600">Fecha de medición: 10/11/2024</p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleRegresar}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedidorPage;
