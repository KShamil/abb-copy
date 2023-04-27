// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PersonalSliderData } from '@/interfaces/interfaces'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PersonalSliderData[]>
) {
    res.status(200).json(
        [
            {
                img: "https://abb-bank.az/storage/uploads/files/1681901486_1000x1000-png.webp",
                title: "Bayramda xidmətinizdəyik!",
                description: "24 aprel 2023-cü ildə saat 10:00-dan 14:00-dək",
                link: "Ətraflı"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1681978937_banner-2.webp",
                title: "Hər kəsə 11.9% ilə nağd kredit!",
                description: "35000 AZN-dək nağd krediti komissiyasız, zaminsiz 60 ayadək müddətə tam onlayn əldə edin!",
                link: "Kredit alın"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1659702248_abb-bankbanner-1.webp",
                title: "Gəncliyini tam yaşa",
                description: "Pulsuz sifariş edin, ödənişlərdə 5% keşbek qazanın, komissiyasız köçürmə və nağdlaşdırmadan faydalanın!",
                link: "Sifariş et"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1676870455_abb-png.webp",
                title: "İpoteka Krediti",
                description: "İllik 6%-dən başlayaraq 500 000 AZN-dək ipoteka krediti",
                link: "Sifariş edin"
            },
            {
                img: "https://abb-bank.az/storage/uploads/files/1669359168_new-project1.webp",
                title: "TamKartla 24 ayadək taksit!",
                description: "15 000 AZN-dək kredit limiti ilə kartınızı indi onlayn alın!",
                link: "TamKart sifariş edin"
            }

        ]
    )
}
