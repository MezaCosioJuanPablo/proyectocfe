// pages/historial.js
"use client";

import LayoutWeb from "../layout/layoutweb";
import Link from "next/link";
import React from "react";

const HistorialPagos = () => {
  return (
    <LayoutWeb>
      <div className="flex flex-col min-h-screen bg-white">
        <div>
          <div className="container mx-auto mt-8 px-4">
            <h1 className="text-2xl font-bold text-center mb-4">
              Historial de pagos
            </h1>
            <div className="overflow-x-auto mb-4">
              <table className="w-full bg-white border border-gray-300 rounded-lg text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border border-gray-300">Fecha</th>
                    <th className="p-3 border border-gray-300">Monto</th>
                    <th className="p-3 border border-gray-300">
                      Métodos de pago
                    </th>
                    <th className="p-3 border border-gray-300">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-300">03/07/2024</td>
                    <td className="p-3 border border-gray-300">$800.00</td>
                    <td className="p-3 border border-gray-300">Paypal</td>
                    <td className="p-3 border border-gray-300">Completado</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300">03/08/2024</td>
                    <td className="p-3 border border-gray-300">$500.00</td>
                    <td className="p-3 border border-gray-300">PayPal</td>
                    <td className="p-3 border border-gray-300">Completado</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-300">03/09/2024</td>
                    <td className="p-3 border border-gray-300">$450.00</td>
                    <td className="p-3 border border-gray-300">Tarjeta</td>
                    <td className="p-3 border border-gray-300">Completado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <Link
                href="/consumo"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Ver Consumo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutWeb>
  );
};

export default HistorialPagos;
