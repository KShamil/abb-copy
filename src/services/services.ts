import { CardData } from '@/interfaces/interfaces';
import { OffersCardData } from '@/interfaces/interfaces';
import { CorporativeData } from '@/interfaces/interfaces';
import { BusinessCardData } from '@/interfaces/interfaces';
import { CorporateSliderData } from '@/interfaces/interfaces';
import { KobSliderData } from '@/interfaces/interfaces';
import { PersonalSliderData } from '@/interfaces/interfaces';
import { OperationsData } from '@/interfaces/interfaces';


export async function getData(): Promise<CardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/transitions`);
    return await response.json()
}

export async function getOffersCardData(): Promise<OffersCardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/offers`);
    return await response.json()
}


export async function getCorporativeData(): Promise<CorporativeData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/corporative`);
    return await response.json()
}

export async function getBusinessCardData(): Promise<BusinessCardData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/business`);
    return await response.json()
}

export async function getCorporateSliderItemsData(): Promise<CorporateSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/corporatesliderdata`);
    return await response.json()
}

export async function getKobSliderItemsData(): Promise<KobSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/kobsliderdata`);
    return await response.json()
}

export async function getPersonalSliderItemsData(): Promise<PersonalSliderData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/personalsliderdata`);
    return await response.json()
}

export async function getOperationsData(): Promise<OperationsData[]> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/operations`);
    return await response.json()
}