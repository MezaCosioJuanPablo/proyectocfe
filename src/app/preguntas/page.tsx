// src/app/preguntasfrecuentes/page.tsx
import Link from "next/link";

export default function PreguntasFrecuentesPage() {
  return (
    <div className="flex flex-col items-center p-8">
      {/* Encabezado */}
      <div className="bg-gray-800 w-full text-center text-white py-4">
        <h2 className="text-2xl font-semibold">PREGUNTAS FRECUENTES</h2>
      </div>

      {/* Sección de Nueva Normalidad */}
      <div className="bg-green-600 w-full text-center py-4 text-white">
        <h3 className="text-xl font-semibold">Nueva Normalidad</h3>
        <p>Portal CFE / Nueva Normalidad / Preguntas Frecuentes</p>
      </div>

      {/* Lista de preguntas */}
      <div className="mt-6 w-3/4 text-lg">
        <ol className="space-y-4">
          <li>
            1. ¿QUÉ ES EL PROTOCOLO DE SEGURIDAD SANITARIA PARA LA
            REINCORPORACIÓN DE ACTIVIDADES A LOS CENTROS DE TRABAJO DE LA CFE?
          </li>
          <li>2. ¿CUÁL ES LA FINALIDAD DEL PROTOCOLO?</li>
          <li>3. ¿CUÁNDO REGRESAMOS A TRABAJAR EN LA CFE?</li>
          <li>
            4. ¿A QUÉ TRABAJADORES APLICAN LAS MEDIDAS CONTENIDAS EN EL
            PROTOCOLO?
          </li>
          <li>5. ¿QUÉ INDICA EL “SEMÁFORO DE ALERTA SANITARIA”?</li>
          <li>
            6. ¿QUÉ MEDIDAS DE SEGURIDAD SANITARIA DEBEMOS APLICAR DE ACUERDO
            CON EL PROTOCOLO?
          </li>
        </ol>
      </div>

      {/* Botón de regresar */}
      <div className="mt-8">
        <Link href="/cuentas">
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
            Regresar
          </button>
        </Link>
      </div>

      {/* Información de contacto */}
      <div className="mt-8 text-center text-sm text-gray-700">
        <p>CFE</p>
        <p>Oficinas Nacionales:</p>
        <p>
          Av. Paseo de la Reforma 164, Col. Juárez, C.P. 06600, Ciudad de
          México, México
        </p>
        <p>Contacto: 55 5229 4400</p>
      </div>
    </div>
  );
}
