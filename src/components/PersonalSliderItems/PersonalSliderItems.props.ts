import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PersonalSliderData } from '@/interfaces/interfaces';

export interface PersonalSliderItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: PersonalSliderData
}