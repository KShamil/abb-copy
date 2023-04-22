// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BusinessCardData } from '@/interfaces/interfaces'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<BusinessCardData[]>
) {
    res.status(200).json(
        [
            {
                img: "https://abb-bank.az/storage/uploads/files/1626330773_visa-business.png?v=123",
                title: "VISA Business",
                description: "Biznes ödənişlərinizi Visa Business ilə rahat həyata keçirin",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1626517413_mastercard-business-sahibkart.png?v=123",
                title: "Mastercard Business",
                description: "Biznes xərclərinizin idarəedilməsi üçün MasterCard kartı",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1626517427_visa-gold.png?v=123",
                title: "VISA Business Gold",
                description: "Kredit kartının üstünlükləri ilə qızıl debet kartı",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1626517443_visa-electron-paywave-salary.png?v=123",
                title: "VISA Electron PayWave Salary",
                description: "İşçiləriniz üçün münasib VISA əməkhaqqı kartı",
                link: "Daha ətraflı"
            }

        ]
    )
}
