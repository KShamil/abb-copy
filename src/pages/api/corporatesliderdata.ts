// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CorporateSliderData } from '@/interfaces/interfaces'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CorporateSliderData[]>
) {
    res.status(200).json(
        [
            {
                img: "https://abb-bank.az/storage/uploads/files/1625645354_1611574278-3-min-1.png?v=125",
                title: "Elektron ticarət",
                description: "Biznesiniz üçün ödənişlərinizi onlayn qəbul edin",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1625645544_1611574185-1-min.png?v=125",
                title: "Əməkhaqqı layihəsi",
                description: "Əməkhaqqı ödənişlərini avtomatlaşdırın",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1625645472_1611574860-4-min-1.png?v=125",
                title: "Tracking funksiyası",
                description: "InternetBank ilə beynəlxalq köçürmələrinizi izləyin",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1625657811_abb-bina.png?v=125",
                title: "Korporativ kreditlər",
                description: "İri layihələrinizin əsasını bizimlə qoyun",
                link: "Daha ətraflı"
            }

        ]
    )
}
