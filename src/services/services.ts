import { CardData } from '@/interfaces/interfaces';
import { OffersCardData } from '@/interfaces/interfaces';
import { CorporativeData } from '@/interfaces/interfaces';
import { BusinessCardData } from '@/interfaces/interfaces';
import { CorporateSliderData } from '@/interfaces/interfaces';
import { KobSliderData } from '@/interfaces/interfaces';
import { PersonalSliderData } from '@/interfaces/interfaces';
import { OperationsData } from '@/interfaces/interfaces';


export async function getData(): Promise<CardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_TRANSITIONS}`);
    return await response.json()
}

export async function getOffersCardData(): Promise<OffersCardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_OFFERS}`);
    return await response.json()
}


export async function getCorporativeData(): Promise<CorporativeData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CORPORATE}`);
    return await response.json()
}

export async function getBusinessCardData(): Promise<BusinessCardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BUSINESS}`);
    return await response.json()
}

export async function getCorporateSliderItemsData(): Promise<CorporateSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CORPORATESLIDER}`);
    return await response.json()
}

export async function getKobSliderItemsData(): Promise<KobSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_KOBSLIDERDATA}`);
    return await response.json()
}

export async function getPersonalSliderItemsData(): Promise<PersonalSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PERSONALSLIDERDATA}`);
    return await response.json()
}

export async function getOperationsData(): Promise<OperationsData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_OPERATIONS}`);
    return await response.json()
}