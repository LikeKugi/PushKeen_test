import { JSX } from 'react';
import Container from '@/shared/ui/Container';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { selectCards, toggleCardActive } from '@/app/store/slice/cardSlice';
import Card from '@/entities/Card';
import styles from './Grid.module.scss';

const Grid = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const cards = useAppSelector(selectCards);

  const toggleActiveCard = (cardId: string) => {
    dispatch(toggleCardActive(cardId));
  }

  return (
    <Container className={styles.Grid}>
      {cards.map(card => (<Card key={card.id} card={card}
                                onClick={() => toggleActiveCard(card.id)}/>))}
    </Container>
  );
};
export { Grid };
