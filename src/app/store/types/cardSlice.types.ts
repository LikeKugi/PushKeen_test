import { ICardData } from '@/shared/types';

export interface ICard extends ICardData {
  isActive?: boolean;
}

export interface ICardSlice {
  cards: ICard[];
}
