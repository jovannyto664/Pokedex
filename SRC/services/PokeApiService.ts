import type { PokemonResumo, respostaPokeApi } from "../models/Pokemon.js";
export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
        const resposta = await fetch(url);
        if (!resposta.ok) {
            console.log("[ERRO] Não foi possível buscar o Pokémon.");
            return null;
        }
        const data: respostaPokeApi = await resposta.json();
        console.log(`[OK] Pokémon encontrado: ${data.name}`);
        return {
            id: data.id,
            nome: data.name,
            tipos: data.types.map(t => t.type.name),
            altura: data.height,
            peso: data.weight,
        };
    } catch {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }

}


