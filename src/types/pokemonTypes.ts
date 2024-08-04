export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[],
  stats: PokemonStat[],
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

export interface TypeColors {
  [key: string]: string;
}