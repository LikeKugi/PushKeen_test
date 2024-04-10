import { FC, JSX } from 'react';
import { clsx } from 'clsx';
import styles from './Container.module.scss';

export type IContainerProps = FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

const Container: IContainerProps = ({
                                      className,
                                      children,
                                      ...other
                                    }): JSX.Element => {
  return (
    <div className={clsx(styles.Container, className)} {...other}>
      {children}
    </div>
  );
};
export { Container };
