"use client";
import Card from "@/components/cards";
import { useState } from "react";

export default function Home() {
  const [activitiesDone, setActivitiesDone] = useState<number>(0);

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">Atividades Completas: { activitiesDone }</h1>
      <h2 className="text-xl font-semibold text-conpec-gray hover:text-conpec-white transition-colors">Marque as atividades que você finalizar</h2>

      <div className="flex flex-col items-center gap-2 w-1/2 h-fit">
        <Card activityName="Tempo Restante" setCounter={setActivitiesDone} activityLink="/tempo-restante" activityTemplateLink="/tempo-restante-gabarito" />
        <Card activityName="To-do List" setCounter={setActivitiesDone} activityLink="todo-list" activityTemplateLink="/todo-list-gabarito" />
      </div>
    </main>
  );
}
