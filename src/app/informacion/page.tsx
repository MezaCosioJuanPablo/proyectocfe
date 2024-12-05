// pages/derechos-obligaciones.js
import Link from "next/link";

export default function DerechosObligaciones() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Encabezado */}
        <div className="flex flex-col lg:flex-row">
          <div className="bg-gray-800 p-6 flex-1 text-white">
            <h2 className="text-2xl font-bold">INFORMACIÓN AL CLIENTE</h2>
          </div>
          <div className="bg-green-600 p-6 flex-1 text-white">
            <h2 className="text-2xl font-bold">
              Derechos y obligaciones del usuario de Suministro Básico
            </h2>
            <Link
              href="/cuentas"
              className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Mi espacio
            </Link>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8 space-y-4">
          <div>
            <p className="font-bold">A.</p>
            <p>
              Recibir un trato oportuno y expedito en la prestación del Servicio
              de Suministro Eléctrico. Recibir del “SUMINISTRADOR” por medios
              electrónicos mediante el siguiente sitio de internet:
              <a
                href="https://lapem.cfe.gob.mx"
                className="text-blue-600 hover:underline"
              >
                https://lapem.cfe.gob.mx
              </a>
              , el que lo sustituya, o en los centros de atención de éste, toda
              la información relacionada con la contratación...
            </p>
          </div>

          <div>
            <p className="font-bold">B.</p>
            <p>
              La protección de sus datos personales, en términos de la Ley
              Federal de Transparencia y Acceso a la Información Pública...
            </p>
          </div>

          <div>
            <p className="font-bold">C.</p>
            <p>
              Recibir el Suministro Eléctrico de manera continua y sin
              interrupciones de la energía eléctrica, salvo Caso Fortuito o
              Fuerza Mayor...
            </p>
          </div>

          <div>
            <p className="font-bold">D.</p>
            <p>
              Que sus Solicitudes, Avisos o Sugerencias sean atendidas en los
              términos de la cláusula Vigésima Cuarta del presente Contrato...
            </p>
          </div>

          <div>
            <p className="font-bold">E.</p>
            <p>
              Ser compensado en la próxima factura aplicable cuando su Queja
              esté debidamente fundamentada, a menos que la determinación sobre
              la compensación...
            </p>
          </div>

          <div>
            <p className="font-bold">F.</p>
            <p>
              Recibir indemnizaciones conforme se establece en la cláusula
              Vigésima Quinta del contrato aplicable, así como recibir una copia
              del dictamen...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
