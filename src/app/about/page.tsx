import React from "react";
import LayoutWeb from "../layout/LayoutWeb";

const Page = () => {
  return (
    <>
      <LayoutWeb>
        <h1 className="text-center text-2xl font-bold mt-4">
          Sección Acerca de la CFE
        </h1>
        <p className="text-center mt-4">
          La Comisión Federal de Electricidad (CFE) es una empresa productiva
          del Estado Mexicano responsable de generar, transmitir, distribuir, y
          comercializar energía eléctrica en todo el país. Su misión es
          proporcionar un suministro eléctrico confiable y accesible para los
          ciudadanos, contribuyendo al desarrollo económico y social de México.
        </p>
        <div className="information text-center mt-6">
          <h2 className="text-xl font-semibold">Historia de la CFE</h2>
          <p className="mt-2">
            Fundada en 1937, la CFE ha crecido y evolucionado a lo largo de los
            años, adaptándose a los avances tecnológicos y las necesidades de la
            sociedad mexicana. Desde su creación, ha jugado un papel clave en la
            electrificación del país, llevando electricidad a las zonas urbanas
            y rurales, y promoviendo el acceso a una vida mejor para millones de
            personas.
          </p>
          <h2 className="text-xl font-semibold mt-6">Servicios y Proyectos</h2>
          <p className="mt-2">
            La CFE opera diversas plantas de generación que utilizan fuentes de
            energía tanto convencionales como renovables. Además, gestiona un
            extenso sistema de transmisión y distribución que permite llevar
            electricidad a todos los rincones del país. Entre sus proyectos
            actuales destacan las iniciativas de modernización de la
            infraestructura, así como el impulso a las energías limpias y la
            eficiencia energética.
          </p>
          <h2 className="text-xl font-semibold mt-6">
            Derechos y Obligaciones del Usuario
          </h2>
          <p className="mt-2">
            Los usuarios de suministro básico tienen derechos y obligaciones
            establecidos por la CFE. Estos incluyen el derecho a recibir un
            servicio adecuado y continuo, a ser informados sobre los cambios en
            las tarifas, y a conocer el consumo mensual. También deben cumplir
            con el pago puntual y permitir la inspección de los medidores para
            asegurar la correcta facturación.
          </p>
          <h2 className="text-xl font-semibold mt-6">Contacto y Soporte</h2>
          <p className="mt-2">
            La CFE cuenta con una plataforma de atención al cliente donde los
            usuarios pueden resolver dudas, reportar fallas, y realizar
            trámites. Además, se pueden comunicar a través del sitio web, el
            número de atención al cliente, o en las oficinas regionales
            distribuidas por todo el país.
          </p>
        </div>
      </LayoutWeb>
    </>
  );
};

export default Page;
