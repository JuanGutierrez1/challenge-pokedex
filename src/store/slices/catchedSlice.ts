import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CatchedState {
  catched: number[]
}

const initialState: CatchedState = {
  catched: [],
}

export const catchedSlice = createSlice({
  name: 'catched',
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<number>) => {
      state.catched.push(action.payload)
    },
    releasePokemon: (state, action: PayloadAction<number>) => {
      state.catched = state.catched.filter((id) => id !== action.payload)
    },
  },
})


export const { catchPokemon, releasePokemon } = catchedSlice.actions

export default catchedSlice.reducer