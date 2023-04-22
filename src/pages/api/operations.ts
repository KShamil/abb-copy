import type { NextApiRequest, NextApiResponse } from 'next'
import { OperationsData } from '@/interfaces/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OperationsData[]>
) {
  res.status(200).json(
    [
      {
        img:"https://abb-bank.az/storage/uploads/1594975285_Hesablar.png",
        title:"Hesablar",
        description:"ABB korporativ müştərilər üçün cari hesabların idarə edilməsi və kassa əməliyyatlarının aparılması imkanını yaradır.",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/files/1594980897_ko%CC%88c%CC%A7u%CC%88rm%C9%99.png",
        title:"Köçürmələr",
        description:"ABB korporativ müştərilərə sərfləri şərtlərlə bankdaxili, ölkədaxili və xaricə köçürmə xidmətlərini təklif edir.",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/1594979431_Elektron%20bank%C3%A7%C4%B1l%C4%B1q.png",
        title:"Elektron bankçılıq",
        description:"Elektron bankçılıq xidmətləri vasitəsilə Siz qısa zaman ərzində bütün lazımi bank əməliyyatlarını müvəffəqiyyətlə həyata keçirə bilərsiniz.",
        link:"Daha ətraflı"
      },
    ]
  )
}
