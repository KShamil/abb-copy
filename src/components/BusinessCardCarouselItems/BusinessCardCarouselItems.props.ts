import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BusinessCardData } from '@/interfaces/interfaces';

export interface BusinessCardCarouselItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: BusinessCardData[];
}