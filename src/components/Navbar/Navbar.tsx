import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Título "Menu" como botón que redirige a la página de pagina1 */}
          <Link href="/pagina1" legacyBehavior>
            <button className="font-bold text-lg hover:underline focus:outline-none">
              Menu
            </button>
          </Link>

          {/* Navegación a la derecha con botones */}
          <div className="space-x-4">
            <Link href="/preguntas" legacyBehavior>
              <button className="hover:underline focus:outline-none">
                CFE_preguntas
              </button>
            </Link>
            <Link href="/servicio" legacyBehavior>
              <button className="hover:underline focus:outline-none">
                Servicio
              </button>
            </Link>
            <Link href="/historial" legacyBehavior>
              <button className="hover:underline focus:outline-none">
                Historial
              </button>
            </Link>
            <Link href="/informacion" legacyBehavior>
              <button className="hover:underline focus:outline-none">
                Información al cliente
              </button>
            </Link>
            {/* Botón Medidor añadido */}
            <Link href="/medidor" legacyBehavior>
              <button className="hover:underline focus:outline-none">
                Medidor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
