"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Home, User, Briefcase } from "lucide-react";

export default function TalentTokenDemo() {
  const [portfolio, setPortfolio] = useState([
    { name: "Ana Martínez", tokens: 12, value: 48.73, invested: 120 },
    { name: "Carlos Gómez", tokens: 5, value: 15.22, invested: 50 },
  ]);

  const chartData = [
    { month: "Jun", price: 10 },
    { month: "Jul", price: 18 },
    { month: "Aug", price: 32 },
    { month: "Sep", price: 45 },
    { month: "Oct", price: 49 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto pb-20">
        
        {/* Dashboard */}
        <Card className="lg:col-span-2 shadow-xl rounded-2xl">
          <CardContent className="p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-bold mb-4">Talent Tokens Marketplace</h1>
            <input
              type="text"
              placeholder="🔍 Buscar talentos o proyectos"
              className="w-full p-2 rounded-lg border mb-6 text-sm md:text-base"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-4">
                <h2 className="text-base md:text-lg font-semibold">🔥 Top Talentos</h2>
                <p>Ana Martínez</p>
                <p>Carlos Gómez</p>
              </Card>
              <Card className="p-4">
                <h2 className="text-base md:text-lg font-semibold">🚀 Mayor crecimiento</h2>
                <p>Laura Pérez</p>
                <p>Andrés Torres</p>
              </Card>
              <Card className="p-4">
                <h2 className="text-base md:text-lg font-semibold">🆕 Nuevos listados</h2>
                <p>Valentina Ruiz</p>
                <p>Diego Herrera</p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Perfil de talento */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold">Perfil de talento</h2>
            <div className="mt-4">
              <p className="font-semibold">📸 Ana Martínez – Modelo/Influencer</p>
              <p className="text-sm md:text-base">Seguidores: 152,340 (+2,300 esta semana)</p>
              <p className="text-sm md:text-base">Engagement: 6.2%</p>
              <p className="text-sm md:text-base">Ingresos reportados: $1,200</p>
              <p className="mt-2 font-bold text-sm md:text-base">Valor actual del token: $48.73</p>
              <div className="h-40 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <Button className="mt-4 w-full text-sm md:text-base">Comprar Tokens</Button>
            </div>
          </CardContent>
        </Card>

        {/* Portafolio */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-bold">Mi portafolio</h2>
            {portfolio.map((item, idx) => (
              <div key={idx} className="mt-4 border-b pb-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm md:text-base">Tokens: {item.tokens}</p>
                <p className="text-sm md:text-base">Valor actual: ${item.value.toFixed(2)}</p>
                <p className="text-sm md:text-base">Invertido: ${item.invested}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-inner flex justify-around py-2 lg:hidden">
        <button className="flex flex-col items-center text-xs">
          <Home size={20} />
          Home
        </button>
        <button className="flex flex-col items-center text-xs">
          <User size={20} />
          Perfil
        </button>
        <button className="flex flex-col items-center text-xs">
          <Briefcase size={20} />
          Portafolio
        </button>
      </div>
    </div>
  );
}
