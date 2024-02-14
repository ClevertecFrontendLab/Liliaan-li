import { ComponentProps, ElementType, FC, JSXElementConstructor, ReactNode } from 'react';

import { clsx } from 'clsx';

import s from './typography.module.scss';

export type PropsOf<T extends ReactTag> = T extends ElementType
    ? Omit<ComponentProps<T>, 'ref'>
    : never;
export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

export type TypographyProps<Ttag extends ReactTag> = {
    children: ReactNode;
    component?: Ttag;
    className?: string;
} & PropsOf<Ttag>;

const createTypographyComponent = <T extends ReactTag>(
    basicClassName: Component,
): FC<TypographyProps<T>> => {
    return ({ children, color, component, className, style, ...rest }) => {
        const Component = component || COMPONENTS[basicClassName] || 'span';

        const classNames = clsx(s[basicClassName], className);

        return (
            <Component className={classNames} style={style} {...rest}>
                {children}
            </Component>
        );
    };
};

export const Typography = {
    RegularBody: createTypographyComponent('regularBody'),
    MediumBody: createTypographyComponent('mediumBody'),
    StrongBody: createTypographyComponent('strongBody'),
    StrFootNote: createTypographyComponent('strFootNote'),
    H1: createTypographyComponent('h1'),
    H2: createTypographyComponent('h2'),
    H3: createTypographyComponent('h3'),
    H4: createTypographyComponent('h4'),
    H5Medium: createTypographyComponent('h5Medium'),
    H5Bold: createTypographyComponent('h5Bold'),
    H6: createTypographyComponent('h6'),
};

const COMPONENTS = {
    regularBody: 'p',
    mediumBody: 'p',
    strongBody: 'p',
    strFootNote: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5Medium: 'h5',
    h5Bold: 'h5',
    h6: 'h6',
} as const;

type Component = keyof typeof COMPONENTS;
