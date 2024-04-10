import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardSlice } from '@/app/store/types';
import { RootState } from '@/app/store';

const initialState: ICardSlice = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    wipeCards: () => initialState,
    toggleCardActive: (state, action: PayloadAction<string>) => {
      return {
        cards: state.cards.map(card => card.id === action.payload ? {
          ...card,
          isActive: !card.isActive
        } : card),
      }
    }
  },
});

export const selectCards = (state: RootState) => state.CardReducer.cards;

export const {toggleCardActive} = cardSlice.actions;

export const CardReducer = cardSlice.reducer;
