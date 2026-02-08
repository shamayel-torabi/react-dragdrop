import clsx from "clsx";
import type { ComponentProps } from "react";

import styles from './IconButton.module.css';

type Props = ComponentProps<'button'>

export const IconButton = ({
    className,
    children,
    ...otherProps
}: Props) => {
    return (
        <button className={clsx(styles['icon-button'], className)} {...otherProps}>
            {children}
        </button>
    )
}