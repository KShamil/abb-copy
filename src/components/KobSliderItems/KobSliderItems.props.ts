import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { KobSliderData } from '@/interfaces/interfaces';

export interface KobSliderItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: KobSliderData
}