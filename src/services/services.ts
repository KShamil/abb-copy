import { CardData } from '@/interfaces/interfaces';
import { OffersCardData } from '@/interfaces/interfaces';
import { CorporativeData } from '@/interfaces/interfaces';
import { BusinessCardData } from '@/interfaces/interfaces';
import { CorporateSliderData } from '@/interfaces/interfaces';
import { KobSliderData } from '@/interfaces/interfaces';
import { PersonalSliderData } from '@/interfaces/interfaces';
import { OperationsData } from '@/interfaces/interfaces';


export async function getData(): Promise<CardData[]> {
    const response = await fetch('http://localhost:3000/api/transitions');
    return await response.json()
}

export async function getOffersCardData(): Promise<OffersCardData[]> {
    const response = await fetch('http://localhost:3000/api/offers');
    return await response.json()
}


export async function getCorporativeData(): Promise<CorporativeData[]> {
    const response = await fetch('http://localhost:3000/api/corporative');
    return await response.json()
}

export async function getBusinessCardData(): Promise<BusinessCardData[]> {
    const response = await fetch('http://localhost:3000/api/business');
    return await response.json()
}

export async function getCorporateSliderItemsData(): Promise<CorporateSliderData[]> {
    const response = await fetch('http://localhost:3000/api/corporatesliderdata');
    return await response.json()
}

export async function getKobSliderItemsData(): Promise<KobSliderData[]> {
    const response = await fetch('http://localhost:3000/api/kobsliderdata');
    return await response.json()
}

export async function getPersonalSliderItemsData(): Promise<PersonalSliderData[]> {
    const response = await fetch('http://localhost:3000/api/personalsliderdata');
    return await response.json()
}

export async function getOperationsData(): Promise<OperationsData[]> {
    const response = await fetch('http://localhost:3000/api/operations');
    return await response.json()
}