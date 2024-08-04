import { Pokemon } from "../types/pokemonTypes";
import { POKEMON_PER_PAGE } from "../utils/utils";

export const pokemonService = {
  async getPokemon(name: string = '', offset: number = 0) {
    if (name === '') {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_PER_PAGE}&offset=${offset}`);
      const data = await response.json();
      const pokemonList = await Promise.all(data.results.map(async (pokemon: Pokemon) => {
        const response = await fetch(pokemon.url);
        return response.json();
      }));
      return { data, results: pokemonList };
    }
    // I make the search here because de API doesn't have a search endpoint or query parameter
    // TODO - Dont fetch all pokemon all the time
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
    const data = await response.json();
    const filteredData = data.results.filter((pokemon: Pokemon) => pokemon.name.includes(name.toLowerCase()));
    const slicedData = filteredData.slice(0 + offset, POKEMON_PER_PAGE + offset);
    const pokemonList = await Promise.all(slicedData.map(async (pokemon: Pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    }));
    return { data: { count: filteredData.length }, results: pokemonList };
  },

};