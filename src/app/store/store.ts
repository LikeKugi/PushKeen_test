import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from '@/app/store/rootReducer';
import { getCards } from '@/shared/mocks';

const initialCardsState = getCards();

export const store = configureStore({
  reducer: RootReducer,
  preloadedState: {
    CardReducer: {
      cards: initialCardsState,
    },
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
