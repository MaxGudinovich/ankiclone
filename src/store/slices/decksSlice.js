import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setAddDeck: (state = [], action) => {
      const existingDeck = state?.find(
        (el) => el.title === action.payload.title
      );

      if (existingDeck) {
        existingDeck.words.push(...action.payload.words);
      } else {
        state.push(action.payload);
      }
    },
    setDeleteDeck: (state, action) => {
      return state.filter((el) => el.title !== action.payload.title);
    },
  },
});

export const { setAddDeck, setAddWords, setDeleteDeck } = decksSlice.actions;

export const selectDeck = (state) => state.decks;

export default decksSlice.reducer;
