// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { KobSliderData } from '@/interfaces/interfaces'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<KobSliderData[]>
) {
    res.status(200).json(
        [
            {
                img: "https://abb-bank.az/storage/uploads/1615898345_microakia-01.png",
                title: "Mikro kredit",
                description: "Böyük başlanğıc üçün kiçik addım",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/1617102051_agro-500-01.png",
                title: "Aqroinkişaf krediti",
                description: "İşinizə təkan verin",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/1606308156_invoys.png",
                title: "İnvoysun maliyyələşdirilməsi",
                description: "Sahibkarlar üçün kreditin şərtləri asanlaşdı",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1596111023_k%C9%99nd%20t%20krediti.png",
                title: "Kənd təsərrüfatına dəstək krediti",
                description: "Aqrar biznesiniz bizimlə böyüsün",
                link: "Daha ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1625645135_1595846101-ixrac.png",
                title: "İxraca dəstək krediti",
                description: "İxrac edin, dəstək olaq!",
                link: "Daha ətraflı"
            }

        ]
    )
}
