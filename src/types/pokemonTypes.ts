export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[],
  stats: PokemonStat[],
  abilities: PokemonAbility[],
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      }
    }
  }
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  }
}

type PokemonAbility = {
  ability: {
    name: string;
  },
  is_hidden: boolean;
}

export interface TypeColors {
  [key: string]: string;
}