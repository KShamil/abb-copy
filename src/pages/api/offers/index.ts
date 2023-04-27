import type { NextApiRequest, NextApiResponse } from 'next'
import { OffersCardData } from '@/interfaces/interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OffersCardData[]>
) {
  res.status(200).json(
    [
      {
        img:"https://abb-bank.az/storage/uploads/files/1596110413_kartlar%20-%20tekliflerimiz.webp",
        title:"Kartlar",
        description:"ABB-dən debet və kredit, status və eksklüziv, virtual, taksit və başqa kartlar. Nağdsız ödənişlərin üstünlüklərindən faydalanın.",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/1594975734_kreditler%20(2).webp",
        title:"Kreditlər",
        description:"ABB-dən hər kəs üçün sərfəli kreditlər",
        link:"Daha ətraflı"
      },
      {
        img:"https://abb-bank.az/storage/uploads/files/1600155619_bankomat.webp",
        title:"Xidmət ofisi və ATM-lər",
        description:"ABB 67 filial, 13 şöbə və 900-dən çox ATM-i ilə xidmətinizdədir. Sizə ən yaxın nöqtəmizi rahatlıqla seçin.",
        link:"Daha ətraflı"
      },
    ]
  )
}
