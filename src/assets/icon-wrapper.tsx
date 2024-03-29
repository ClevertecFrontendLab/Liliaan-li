import * as React from 'react';

export type IconProps = {
    size?: number;
    color?: string;
    svgProps?: React.SVGProps<SVGSVGElement>;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>;

export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
    icon,
    size: sizeProp,
    color: colorProp,
    ...restProps
}) => {
    const size = sizeProp ? `${sizeProp}px` : '20px';
    const color = colorProp ? colorProp : 'currentColor';

    return (
        <span
            role='img'
            style={{
                width: size,
                height: size,
                color: color,
                display: 'inline-flex',
                fontSize: 'inherit',
            }}
            {...restProps}
        >
            {icon}
        </span>
    );
};
