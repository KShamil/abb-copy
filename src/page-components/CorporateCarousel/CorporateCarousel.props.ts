import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CorporateSliderData } from '@/interfaces/interfaces';

export interface CorporateCarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: CorporateSliderData[];
}