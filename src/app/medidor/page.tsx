"use client";

import { useRouter } from "next/navigation";
import LayoutWeb from "../layout/LayoutWeb";

const MedidorPage = () => {
  const router = useRouter();

  const handleRegresar = () => {
    router.push("/cuentas");
  };

  return (
    <LayoutWeb>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-gray-900 text-white py-4">
          <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">HOGAR</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto p-6 bg-white shadow-md mt-8 rounded-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Revisión de mi medidor
          </h1>

          {/* Left Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 text-gray-800 space-y-4">
              <p>
                Es importante proporcionar los datos exactos para poder atender
                tu reporte.
              </p>
              <p>
                Los datos personales que proporciones para brindarte la atención
                están protegidos, consulte{" "}
                <a href="#" className="text-green-600 font-semibold underline">
                  Aviso de privacidad
                </a>
              </p>
              <p>
                La revisión comprueba que la registración del medidor se
                encuentre dentro de la NOM-044-SCFI-2017.
              </p>
              <p>
                Podría generarse un costo al cliente si ha habido una revisión
                previa en el último año.
              </p>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2">
              <h2 className="text-lg font-bold mb-4">Datos del cliente</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="cliente"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del cliente:
                  </label>
                  <input
                    type="text"
                    id="cliente"
                    placeholder="Ej. Kari - 322210350451"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono-fijo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono fijo (10 dígitos):
                  </label>
                  <input
                    type="text"
                    id="telefono-fijo"
                    maxLength={10}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono-movil"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono móvil (10 dígitos):
                  </label>
                  <input
                    type="text"
                    id="telefono-movil"
                    maxLength={10}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-8">
          <div className="max-w-5xl mx-auto text-center">
            <p>
              Oficinas Nacionales: Av. Paseo de la Reforma 164, Ciudad de
              México.
            </p>
            <p>Contacto: 55 5229 4400</p>
          </div>
        </footer>

        {/* Back Button */}
        <div className="text-center my-4">
          <button
            onClick={handleRegresar}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
          >
            Regresar
          </button>
        </div>
      </div>
    </LayoutWeb>
  );
};

export default MedidorPage;
