import { CardData } from '@/interfaces/interfaces';
import { OffersCardData } from '@/interfaces/interfaces';
import { CorporativeData } from '@/interfaces/interfaces';
import { BusinessCardData } from '@/interfaces/interfaces';
import { CorporateSliderData } from '@/interfaces/interfaces';
import { KobSliderData } from '@/interfaces/interfaces';
import { PersonalSliderData } from '@/interfaces/interfaces';
import { OperationsData } from '@/interfaces/interfaces';
import axios from 'axios';


export async function getData(): Promise<CardData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/transitions`);
    return response.data
}

export async function getOffersCardData(): Promise<OffersCardData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/offers`);
    return response.data
}


export async function getCorporativeData(): Promise<CorporativeData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/corporate`);
    return response.data
}

export async function getBusinessCardData(): Promise<BusinessCardData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/business`);
    return response.data
}

export async function getCorporateSliderItemsData(): Promise<CorporateSliderData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/corporatesliderdata`);
    return response.data
}

export async function getKobSliderItemsData(): Promise<KobSliderData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/kobsliderdata`);
    return response.data
}

export async function getPersonalSliderItemsData(): Promise<PersonalSliderData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/personalsliderdata`);
    return response.data
}

export async function getOperationsData(): Promise<OperationsData[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/operations`);
    return response.data
}