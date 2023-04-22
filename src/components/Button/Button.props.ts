import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
    appearance: 'header-btn' | 'card-btn' | 'slider-btn' | 'corporate-slider-btn'
    children: ReactNode
}