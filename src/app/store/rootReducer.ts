import { combineReducers } from '@reduxjs/toolkit';
import { CardReducer } from '@/app/store/slice/cardSlice';

export const RootReducer = combineReducers({
  CardReducer,
});
