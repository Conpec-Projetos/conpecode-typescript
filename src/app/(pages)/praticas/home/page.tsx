"use client";
import Card from "@/components/card";

/*
  --------------------------------------------------------------
    AJUSTE O COMPONENTE Card EM src/components/card.tsx
  --------------------------------------------------------------
*/

export default function Home() {
  return (
    <main className="min-h-screen min-w-fit flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">
        Atividades Completas: ?
      </h1>
      <h2 className="text-xl font-semibold text-conpec-gray hover:text-conpec-white transition-colors">
        Marque as atividades que você finalizar
      </h2>

      <div className="flex flex-col items-center gap-2 w-1/2 h-fit">
        <Card />
        <Card />
      </div>
    </main>
  );
}
