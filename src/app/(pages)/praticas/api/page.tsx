"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface PokemonData {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export default function PokemonApi() {
  const [data, setData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  

  return (
    <>
        <div className={`flex flex-col items-center justify-center w-full h-screen`}>
          <h1 className="text-2xl font-bold">Pokemon API</h1>
            &quot;Colocar aqui o PokemonCard&quot;
          <button
            className={`px-4 py-2 mt-4 text-black border-conpec-orange border-1 rounded cursor-pointer `}
          >
            Mudar para ???
          </button>
        </div>
    </>
  );
}

const PokemonCard = ({ name, height, weight, sprites }: PokemonData) => {
  return (
    <div className="mt-4 p-4 border rounded transition-transform hover:scale-105">
      <h2 className="text-xl font-semibold">Dados do Pokemon</h2>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Altura:</strong> {height}
      </p>
      <p>
        <strong>Peso:</strong> {weight}
      </p>
      <Image src={sprites.front_default} alt={name} width={96} height={96} className="transition-transform hover:scale-150" />
    </div>
  );
};
