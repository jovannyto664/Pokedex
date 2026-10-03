import type { PokemonResumo, respostaPokeApi } from "../models/Pokemon.js";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

        const resposta = await fetch(url);

        // Se o Pokémon não existe, a API retorna 404
        if (!resposta.ok) {
            console.log("[ERRO] Pokémon não encontrado.");
            console.log("[ERRO] Não foi possível buscar o Pokémon.");
            return null;
        }

        const data: respostaPokeApi = await resposta.json();

        // Mapeia a resposta completa para o resumo
        return {
            id: data.id,
            nome: data.name,
            tipos: data.types.map(t => t.type.name),
            altura: data.height,
            peso: data.weight,
        };

    } catch {
        // Erro de rede, DNS, etc.
        return null;
    }

}


