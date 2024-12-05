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
            <option value="">Seleccione uno</option>
            <option value="aguascalientes">Aguascalientes</option>
            <option value="baja-california">Baja California</option>
            <option value="baja-california-sur">Baja California Sur</option>
            <option value="campeche">Campeche</option>
            <option value="chiapas">Chiapas</option>
            <option value="chihuahua">Chihuahua</option>
            <option value="coahuila">Coahuila</option>
            <option value="colima">Colima</option>
            <option value="cdmx">Ciudad de México</option>
            <option value="durango">Durango</option>
            <option value="guanajuato">Guanajuato</option>
            <option value="guerrero">Guerrero</option>
            <option value="hidalgo">Hidalgo</option>
            <option value="jalisco">Jalisco</option>
            <option value="edo-mex">Estado de México</option>
            <option value="michoacan">Michoacán</option>
            <option value="morelos">Morelos</option>
            <option value="nayarit">Nayarit</option>
            <option value="nuevo-leon">Nuevo León</option>
            <option value="oaxaca">Oaxaca</option>
            <option value="puebla">Puebla</option>
            <option value="queretaro">Querétaro</option>
            <option value="quintana-roo">Quintana Roo</option>
            <option value="san-luis-potosi">San Luis Potosí</option>
            <option value="sinaloa">Sinaloa</option>
            <option value="sonora">Sonora</option>
            <option value="tabasco">Tabasco</option>
            <option value="tamaulipas">Tamaulipas</option>
            <option value="tlaxcala">Tlaxcala</option>
            <option value="veracruz">Veracruz</option>
            <option value="yucatan">Yucatán</option>
            <option value="zacatecas">Zacatecas</option>
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
          </div>
        </section>

        <section className="flex justify-center mt-8">
          <div className="text-center space-y-2">
            <img src="app.png" alt="App Store" />
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
