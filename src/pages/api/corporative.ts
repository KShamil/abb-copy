import type { NextApiRequest, NextApiResponse } from 'next'
import { CorporativeData } from '@/interfaces/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CorporativeData[]>
) {
  res.status(200).json(
    [
      {
        img:"https://abb-bank.az/storage/uploads/files/1600153695_1.jpg?v=122",
        title:"Əmanətlər",
        description:"ABB korporativ müştərilərə öz vəsaitlərini etibar edə biləcəyi, yerli və xarici valyutada depozit tarifləri təklif edir.",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/files/1594987168_s%C9%99n%C9%99dli%20%C9%99m%C9%99liyyatlar.png?v=122",
        title:"Sənədli əməliyyatlar",
        description:" Sənədli əməliyyatlar vasitəsi ilə Siz  beynəlxalq ticarət əməliyyatları zamanı minimal risklərlə etibarlı tərəfdaşlıq əlaqələrinə sahib ola bilərsiniz",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/files/1594987197_biznes%20kredit.png?v=122",
        title:"Korporativ kreditlər",
        description:"ABB müştəriləri üçün öz layihələrinin bünövrəsini qoyması üçün qısamüddətli və uzunmüddətli korporativ kreditlər təqdim edir.",
        link:"Daha ətraflı"
      },
    ]
  )
}
