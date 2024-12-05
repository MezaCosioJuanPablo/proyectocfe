// /app/medios-de-pago/page.tsx
import Link from "next/link";

export default function MediosDePago() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-900 text-white py-4 text-center">
        <h1 className="text-3xl">HOGAR</h1>
        <p>Medios de pago</p>
      </header>

      <main className="px-4 md:px-16 py-8">
        <div className="text-center mb-4">
          <label className="text-lg font-semibold">
            SELECCIONA EL ESTADO DONDE TE LOCALIZAS
          </label>
          <select className="border mt-2 text-center p-2">
            <option>Seleccione uno</option>
            {/* Opciones de estados aquí */}
          </select>
        </div>

        <section className="bg-gray-100 p-4 rounded-md shadow-md">
          <div className="grid gap-4">
            <div className="bg-white p-4 border">
              <h2 className="font-bold">Información al Cliente</h2>
              <ul className="list-disc pl-6">
                <li>
                  Derechos y obligaciones del usuario de Suministro Básico
                </li>
                <li>Medios de pago</li>
                <li>¿Cómo leer tu medidor?</li>
                <li>Costo de reconexión</li>
                <li>Catálogo de trámites y servicios</li>
              </ul>
            </div>
            {/* Agrega otras secciones si es necesario */}
          </div>
        </section>

        <section className="flex justify-center mt-8">
          {/* Logos de descarga de aplicaciones */}
          <div className="text-center space-y-2">
            <img src="/path-to-appstore-logo.png" alt="App Store" />
            <img src="/path-to-googleplay-logo.png" alt="Google Play" />
            <img src="/path-to-appgallery-logo.png" alt="App Gallery" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-300 p-4 text-center">
        <p>
          Oficinas Nacionales: Av. Paseo de la Reforma 164, Ciudad de México.
          Contacto: 55 5229 4400
        </p>
      </footer>

      <div className="text-center my-4">
        <Link
          href="/cuentas"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
