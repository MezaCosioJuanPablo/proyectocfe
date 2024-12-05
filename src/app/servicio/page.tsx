import React from "react";
import LayoutWeb from "../layout/layoutweb";

const Page = () => {
  return (
    <>
      <LayoutWeb>
        <h1 className="text-center text-2xl font-bold mt-4">
          Servicios de la Comisión Federal de Electricidad
        </h1>
        <p className="text-center mt-4">
          La Comisión Federal de Electricidad (CFE) está comprometida en ofrecer
          un servicio eléctrico confiable y accesible en todo México. A
          continuación, se presenta información sobre nuestros principales
          servicios y cómo acceder a ellos.
        </p>

        <div className="service-sections text-center mt-6">
          <h2 className="text-xl font-semibold">Suministro de Energía</h2>
          <p className="mt-2">
            Proveemos electricidad a millones de hogares y empresas en el país.
            Para consultas sobre tarifas y planes de consumo, contáctanos en{" "}
            <a href="mailto:suministro@cfe.mx" className="text-blue-500">
              suministro@cfe.mx
            </a>{" "}
            o llama al 01-800-123-4567.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Soporte y Atención al Cliente
          </h2>
          <p className="mt-2">
            Nuestro equipo de atención al cliente está disponible para ayudarte
            con consultas sobre facturación, asistencia técnica y resolución de
            problemas. Escríbenos a{" "}
            <a href="mailto:soporte@cfe.mx" className="text-blue-500">
              soporte@cfe.mx
            </a>{" "}
            o llámanos al 01-800-765-4321.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Proyectos de Energía Renovable
          </h2>
          <p className="mt-2">
            La CFE impulsa el uso de energías renovables para contribuir al
            cuidado del medio ambiente. Si deseas más información sobre
            proyectos de energía limpia, comunícate con nosotros en{" "}
            <a href="mailto:energia_renovable@cfe.mx" className="text-blue-500">
              energia_renovable@cfe.mx
            </a>{" "}
            o al 01-800-321-6543.
          </p>

          <h2 className="text-xl font-semibold mt-6">Facturación y Pagos</h2>
          <p className="mt-2">
            Consulta tu facturación, realiza pagos en línea y recibe alertas de
            consumo de forma conveniente. Para soporte en facturación,
            contáctanos en{" "}
            <a href="mailto:facturacion@cfe.mx" className="text-blue-500">
              facturacion@cfe.mx
            </a>{" "}
            o al 01-800-234-5678.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Contacto para Emergencias
          </h2>
          <p className="mt-2">
            Para emergencias eléctricas o interrupciones de servicio, estamos
            disponibles 24/7. Llama al 01-800-000-911 o envía un correo a{" "}
            <a href="mailto:emergencias@cfe.mx" className="text-blue-500">
              emergencias@cfe.mx
            </a>
            .
          </p>
        </div>
      </LayoutWeb>
    </>
  );
};

export default Page;
