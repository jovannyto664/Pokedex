import type { PokemonResumo, respostaPokeApi } from "../models/Pokemon.js";

let catalogo: PokemonResumo[] = [];

export function adicionarAoCatalogo(catalogo: PokemonResumo[], pokemon: PokemonResumo
): PokemonResumo[] {
    if (catalogo.some(a => a.id === pokemon.id)) {
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
        return catalogo;
    }
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    return [...catalogo, pokemon];
}

export function listarCatalogo(catalogo: PokemonResumo[]): void {
    console.log(catalogo)
}

function removerDoCatalogo(
    catalogo: PokemonResumo[],
    id: number
): PokemonResumo[] {
    const indice = catalogo.findIndex(a => a.id === id)
    if (indice !== -1) {
        catalogo.splice(indice, 1)
        console.log("[OK] Pokémon removido do catálogo.");
        return catalogo
    } else {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo
    }
}

