import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { PersonalSliderData } from '@/interfaces/interfaces';

export interface PersonalCarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    props: PersonalSliderData[];
}