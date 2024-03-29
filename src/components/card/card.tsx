import { ComponentProps, FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import s from './card.module.scss';

type CardProps = {
    children: ReactNode;
} & ComponentProps<'div'>;
export const Card: FC<CardProps> = ({ children, className, ...rest }) => {
    const classNames = {
        card: clsx(s.card, className),
    };

    return (
        <div className={classNames.card} {...rest}>
            {children}
        </div>
    );
};
