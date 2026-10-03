// src/models/Pokemon.ts

export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[];
  altura: number;
  peso: number;
}

export interface respostaPokeApi {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  // ... demais campos da API
}   
