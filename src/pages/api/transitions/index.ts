// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CardData } from '@/interfaces/interfaces';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData[]>
) {
  res.status(200).json(
    [
      {
        img:"https://abb-bank.az/storage/uploads/files/1643022201_1632142837-sade-kecidler-2.webp",
        title:" Nağd pul krediti",
        description:"Bütün ehtiyaclarınız üçün 35 000 AZN-dək nağd pul krediti",
        buttonText:"Kredit alın"
      },
      {
        img:"https://abb-bank.az/storage/uploads/1632142837_sade-kecidler-2.webp",
        title:"TamKart",
        description:"Hər kəs üçün 24 ayadək hissəli ödəniş imkanı olan faizsiz taksit kartı",
        buttonText:"Sifariş edin"
      },
      {
        img:"https://abb-bank.az/storage/uploads/1632142904_sade-kecidler-3.webp",
        title:"ABB mobile",
        description:"İstədiyin yerdən bank xidmətlərini rahatlıqla idarə edə bildiyin sadə və sürətli mobil tətbiq ",
        buttonText:"Tətbiqi yükləyin"
      },
    ]
  )
}
