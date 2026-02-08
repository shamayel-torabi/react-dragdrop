import { type ComponentProps, type ReactNode, type RefObject, type MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.css';
import { IconButton } from '../IconButton';

type Props = ComponentProps<'dialog'> & {
  ref: RefObject<HTMLDialogElement | null>
  heading: string;
}

export const Modal = ({
  ref,
  className,
  onClick,
  heading,
  children,
  ...otherProps }: Props): ReactNode => {


  const handleCloseButton = () => {
    ref.current?.close();
  }

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      ref.current?.close();
    }
    else {
      onClick?.(e);
    }
  }

  return (
    <dialog
      ref={ref}
      className={clsx(styles.modal, className)}
      onClick={handleDialogClick}
      {...otherProps}>
      <header>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.actions}>
          <IconButton onClick={handleCloseButton}>X</IconButton>
        </div>
      </header>
      <main>
        {children}
      </main>
    </dialog>
  )
}