// src/app/pago/page.tsx

import Link from "next/link";

const PagoPage = () => {
  return (
    <div className="min-h-screen bg-[#006747] p-8">
      {" "}
      {/* Fondo verde de la CFE */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Medios de Pago de la CFE
        </h1>

        <p className="text-gray-600 mb-4">
          Aquí puedes consultar los diferentes medios de pago disponibles para
          tu servicio de electricidad:
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li>Pago en línea a través de la página web de la CFE</li>
          <li>Pago en tiendas de conveniencia</li>
          <li>Pago en bancos autorizados</li>
          <li>Pago por teléfono móvil utilizando la app CFE Contigo</li>
        </ul>

        <p className="text-gray-600 mb-4">
          Para más detalles sobre cada opción, puedes visitar el sitio web
          oficial de la CFE o contactar a su servicio al cliente.
        </p>

        {/* Botón de regreso */}
        <Link href="/cuentas">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PagoPage;
