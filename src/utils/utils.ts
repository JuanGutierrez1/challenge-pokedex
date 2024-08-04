import { Pokemon, TypeColors } from "../types/pokemonTypes";

export const POKEMON_PER_PAGE = 12;

export const capitalize = (word: string | undefined) => {
  if (!word) return
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getBackgroundColor = (pokemon: Pokemon) => {
  if (pokemon.types.length === 1) {
    return darkerTypeColors[pokemon.types[0].type.name];
  }
  return `linear-gradient(98.3deg, ${darkerTypeColors[pokemon.types[0].type.name]} 10.6%, ${darkerTypeColors[pokemon.types[1].type.name]} 97.7%)`
}

export const typeColors: TypeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
}

export const darkerTypeColors: TypeColors = {
  normal: '#6D6D4E',
  fire: '#C06B25',
  water: '#4178C0',
  electric: '#C7A520',
  grass: '#568A36',
  ice: '#6AA7A7',
  fighting: '#8B251F',
  poison: '#752C75',
  ground: '#B69842',
  flying: '#7B6CBE',
  psychic: '#C04364',
  bug: '#787C16',
  rock: '#8D7429',
  ghost: '#4E3E72',
  dragon: '#4E28C0',
  dark: '#4E3E34',
  steel: '#8888A0',
  fairy: '#BB6F7E',
};

export const lighterTypeColors: TypeColors = {
  normal: '#C6C6A7',
  fire: '#F5AC78',
  water: '#9DB7F5',
  electric: '#FAE078',
  grass: '#A7DB8D',
  ice: '#BCE6E6',
  fighting: '#D67873',
  poison: '#C183C1',
  ground: '#EBD69D',
  flying: '#C6B7F5',
  psychic: '#FA92B2',
  bug: '#C6D16E',
  rock: '#D1C17D',
  ghost: '#A292BC',
  dragon: '#A27DFA',
  dark: '#A29288',
  steel: '#BAB7D2',
  fairy: '#F4BDC9',
};