"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CargaMultiplesPage = () => {
  const router = useRouter();
  const [cantidadPorPagina, setCantidadPorPagina] = useState(10);
  const [seleccionTodosPDFs, setSeleccionTodosPDFs] = useState(false);
  const [seleccionTodosXMLs, setSeleccionTodosXMLs] = useState(false);

  const handleDescargar = () => {
    alert("Descargando los archivos seleccionados...");
  };

  const handleCancelar = () => {
    router.push("/cuentas");
  };

  const datos = [
    { servicio: "322210350451", nombre: "TAPIA HERNANDEZ ERI KARINA" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-green-700 p-4 flex items-center">
        <h1 className="text-white text-lg font-semibold">HOGAR</h1>
        <div className="ml-auto text-white">
          <span className="font-semibold">Mi Espacio</span>
          <span className="ml-4">CFE / Servicios / Mi Espacio</span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          CARGA MÚLTIPLES
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Cantidad por página:
            </label>
            <select
              value={cantidadPorPagina}
              onChange={(e) => setCantidadPorPagina(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md w-full max-w-xs"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={seleccionTodosPDFs}
                onChange={() => setSeleccionTodosPDFs(!seleccionTodosPDFs)}
                className="form-checkbox"
              />
              <span>Todos los PDFs</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={seleccionTodosXMLs}
                onChange={() => setSeleccionTodosXMLs(!seleccionTodosXMLs)}
                className="form-checkbox"
              />
              <span>Todos los XMLs</span>
            </label>
          </div>

          {/* Tabla */}
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">No. de servicio</th>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">PDF</th>
                <th className="border border-gray-300 p-2">XML</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((dato, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-2 text-blue-600 underline">
                    {dato.servicio}
                  </td>
                  <td className="border border-gray-300 p-2">{dato.nombre}</td>
                  <td className="border border-gray-300 p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botones */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleDescargar}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Descargar
          </button>
          <button
            onClick={handleCancelar}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
          >
            Cancelar
          </button>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
        <p>Comisión Federal de Electricidad</p>
        <p>Av. Paseo de la Reforma 164, Col. Juárez, Ciudad de México</p>
        <p>Contacto: 55 5229 4400</p>
      </footer>
    </div>
  );
};

export default CargaMultiplesPage;
