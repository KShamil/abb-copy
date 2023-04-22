import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CorporateSliderData } from '@/interfaces/interfaces';

export interface CorporateSliderItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: CorporateSliderData
}