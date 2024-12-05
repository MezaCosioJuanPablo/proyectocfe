import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const CfeHeader = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="flex justify-between items-center p-4">
        {/* Redes Sociales */}
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-red-600">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-pink-600">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Logo y Búsqueda */}
        <div className="flex items-center space-x-4">
          <img
            src={"/cfelogo.png"}
            alt="Logo de la empresa"
            width={150}
            height={100}
          />
          <span className="text-green-700 font-bold text-lg">
            Comisión Federal de Electricidad
          </span>

          {/* Campo de Búsqueda */}
          <div className="flex items-center border border-gray-300 rounded px-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="outline-none px-2 py-1 text-gray-700"
            />
            <AiOutlineSearch className="text-gray-600" />
          </div>

          {/* Botón "Mi espacio" */}
          <Link href="/cuentas" legacyBehavior>
            <a className="flex items-center text-gray-700">
              <AiOutlineUser size={24} />
              <span className="ml-2">Mi espacio</span>
            </a>
          </Link>
        </div>
      </div>

      {/* Menú de Navegación */}
      <nav className="flex justify-center space-x-6 text-green-700 py-4">
        <a href="#" className="hover:underline">
          Finanzas
        </a>
        <a href="#" className="hover:underline">
          Procedimientos de contratación
        </a>
        <a href="#" className="hover:underline">
          Ahorro de energía y ventas de bienes
        </a>
        <a href="#" className="hover:underline">
          Desarrollo social
        </a>
        <a href="#" className="hover:underline">
          Sistema electrónico de contrataciones
        </a>
      </nav>
    </header>
  );
};

export default CfeHeader;
