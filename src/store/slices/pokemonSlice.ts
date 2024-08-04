import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../types/pokemonTypes'

export interface PokemonState {
  list: Pokemon[],
  selected: Pokemon | null,
}

const initialState: PokemonState = {
  list: [],
  selected: null,
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<Pokemon | null>) => {
      state.selected = action.payload
    },
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.list = action.payload
    },
  },
})


export const { selectPokemon, setPokemonList } = pokemonSlice.actions

export default pokemonSlice.reducer