import { Pokemon, TypeColors } from "../types/pokemonTypes";

export const POKEMON_PER_PAGE = 12;

export const capitalize = (word: string | undefined) => {
  if (!word) return
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getBackgroundColor = (pokemon: Pokemon) => {
  if (pokemon.types.length === 1) {
    return typeColors[pokemon.types[0].type.name].dark;
  }
  return `linear-gradient(98.3deg, ${typeColors[pokemon.types[0].type.name].dark} 10.6%, ${typeColors[pokemon.types[1].type.name].dark} 97.7%)`
}

export const typeColors: TypeColors = {
  normal: {
    light: '#C6C6A7',
    main: '#A8A878',
    dark: '#6D6D4E',
  },
  fire: {
    light: '#F5AC78',
    main: '#F08030',
    dark: '#C06B25',
  },
  water: {
    light: '#9DB7F5',
    main: '#6890F0',
    dark: '#4178C0',
  },
  electric: {
    light: '#FAE078',
    main: '#F8D030',
    dark: '#C7A520',
  },
  grass: {
    light: '#A7DB8D',
    main: '#78C850',
    dark: '#568A36',
  },
  ice: {
    light: '#BCE6E6',
    main: '#98D8D8',
    dark: '#6AA7A7',
  },
  fighting: {
    light: '#D67873',
    main: '#C03028',
    dark: '#8B251F',
  },
  poison: {
    light: '#C183C1',
    main: '#A040A0',
    dark: '#752C75',
  },
  ground: {
    light: '#EBD69D',
    main: '#E0C068',
    dark: '#B69842',
  },
  flying: {
    light: '#C6B7F5',
    main: '#A890F0',
    dark: '#7B6CBE',
  },
  psychic: {
    light: '#FA92B2',
    main: '#F85888',
    dark: '#C04364',
  },
  bug: {
    light: '#C6D16E',
    main: '#A8B820',
    dark: '#787C16',
  },
  rock: {
    light: '#D1C17D',
    main: '#B8A038',
    dark: '#8D7429',
  },
  ghost: {
    light: '#A292BC',
    main: '#705898',
    dark: '#4E3E72',
  },
  dragon: {
    light: '#A27DFA',
    main: '#7038F8',
    dark: '#4E28C0',
  },
  dark: {
    light: '#A29288',
    main: '#705848',
    dark: '#4E3E34',
  },
  steel: {
    light: '#BAB7D2',
    main: '#B8B8D0',
    dark: '#8888A0',
  },
  fairy: {
    light: '#F4BDC9',
    main: '#EE99AC',
    dark: '#BB6F7E',
  },
}