import { FC, JSX } from 'react';
import { ICard } from '@/app/store/types';
import { clsx } from 'clsx';
import styles from './Card.module.scss';

export interface ICardProps {
  card: ICard;
  onClick: () => void;
}


const Card: FC<ICardProps> = ({ card, onClick }): JSX.Element => {

  return (
    <div onClick={onClick}
         className={clsx(styles.Card, card.isActive && styles['Card--active'])}>
      <h3 className={styles.Card__title}>{card.title}</h3>
      <p className={styles.Card__content}>{card.content}</p>
    </div>
  );
};
export { Card };
