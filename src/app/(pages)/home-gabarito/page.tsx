"use client";
import Card from "@/components/gabaritos/card";
import { useState } from "react";

export default function Home() {
  const [activitiesDone, setActivitiesDone] = useState<number>(0);

  return (
    <main className="py-2 min-h-screen min-w-fit flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">
        Atividades Completas: {activitiesDone}
      </h1>
      <h2 className="text-xl font-semibold text-conpec-gray hover:text-conpec-white transition-colors">
        Marque as atividades que você finalizar
      </h2>

      <div className="flex flex-col items-center gap-2 w-1/2">
        <Card
          activityName="Contador Limite"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/contador-limite"
          activityTemplateLink="/contador-limite-gabarito"
          activityDescription="Mostre na tela quando o contador passar de 10"
        />
        <Card
          activityName="Usuários"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/users"
          activityTemplateLink="/users-gabarito"
          activityDescription="Liste todos os usuários e adicione um botão para mostrar apenas os ativos"
        />
        <Card
          activityName="Home"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/"
          activityTemplateLink="/home-gabarito"
          activityDescription="Usando componentes, mostre na tela quantas atividades você completou"
        />
        <Card
          activityName="API"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/api"
          activityTemplateLink="/api-gabarito"
          activityDescription="Puxe os dados de uma API com useEffect e customize a cor da página"
        />
        <Card
          activityName="To-do List"
          dificulty="HARD"
          setCounter={setActivitiesDone}
          activityLink="todo-list"
          activityTemplateLink="/todo-list-gabarito"
          activityDescription="Faça uma To-do list usando conceitos de useState"
        />
        <Card
          activityName="Tempo Restante"
          dificulty="HARD"
          setCounter={setActivitiesDone}
          activityLink="/tempo-restante"
          activityTemplateLink="/tempo-restante-gabarito"
          activityDescription="Faça o temporizador maluco do Valadares usando conceitos de useEffect"
        />
      </div>
    </main>
  );
}
