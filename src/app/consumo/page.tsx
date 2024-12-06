// pages/consumo.js
"use client";

import LayoutWeb from "../layout/LayoutWeb";
import Link from "next/link";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ConsumoHistorico = () => {
  // Datos para el gráfico
  const data = {
    labels: ["Mayo-Jun", "Jun-Ago", "Ago-Sep", "Sep-Oct", "Oct-Nov"],
    datasets: [
      {
        label: "Consumo (kWh)",
        data: [2527, 2410, 2104, 2971, 2062],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Color de las barras
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Consumo de Energía en kWh",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "kWh",
        },
      },
      x: {
        title: {
          display: true,
          text: "Periodo",
        },
      },
    },
  };

  return (
    <LayoutWeb>
      <div className="flex flex-col items-center min-h-screen bg-white">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">
          Consumo histórico
        </h1>
        <div className="flex w-full max-w-5xl justify-between">
          <div className="w-2/3">
            <table className="w-full bg-white border border-gray-300 rounded-lg text-left">
              <thead>
                <tr className="bg-green-500 text-white">
                  <th className="p-3 border border-gray-300">Periodo</th>
                  <th className="p-3 border border-gray-300">kWh</th>
                  <th className="p-3 border border-gray-300">Importe</th>
                  <th className="p-3 border border-gray-300">
                    Pendientes de pago
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-300">
                    Del 27 de mayo 2024 al 25 de junio 2024
                  </td>
                  <td className="p-3 border border-gray-300">2527</td>
                  <td className="p-3 border border-gray-300">$1,260.00</td>
                  <td className="p-3 border border-gray-300">-</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">
                    Del 25 de junio 2024 al 24 de agosto 2024
                  </td>
                  <td className="p-3 border border-gray-300">2410</td>
                  <td className="p-3 border border-gray-300">$1,207.00</td>
                  <td className="p-3 border border-gray-300">-</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">
                    Del 25 de agosto 2024 a 3 de septiembre 2024
                  </td>
                  <td className="p-3 border border-gray-300">2104</td>
                  <td className="p-3 border border-gray-300">$1,020.00</td>
                  <td className="p-3 border border-gray-300">-</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">
                    Del 3 de septiembre 2024 a 3 de octubre 2024
                  </td>
                  <td className="p-3 border border-gray-300">2971</td>
                  <td className="p-3 border border-gray-300">$1,530.00</td>
                  <td className="p-3 border border-gray-300">-</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300">
                    Del 3 de octubre 2024 al 3 de noviembre 2024
                  </td>
                  <td className="p-3 border border-gray-300">2062</td>
                  <td className="p-3 border border-gray-300">$908.00</td>
                  <td className="p-3 border border-gray-300">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            href="/historial"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Ver Historial de Pagos
          </Link>
        </div>
      </div>
    </LayoutWeb>
  );
};

export default ConsumoHistorico;
