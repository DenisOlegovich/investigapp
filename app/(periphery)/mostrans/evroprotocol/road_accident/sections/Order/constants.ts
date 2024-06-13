import { roadAccidentFirst, roadAccidentSecond, roadAccidentThird } from '@/Images'
import { ImageProps } from '@/components/Image'
import { ExternalLinks } from '@/constants'

export const imgs: ({ href?: string } & ImageProps)[] = [
    {
        img: roadAccidentFirst,
        alt: 'road_accident-1',
        href: ExternalLinks.uproshchennoeOformlenieDtp,
    },
    {
        img: roadAccidentSecond,
        alt: 'road_accident-2',
    },
    {
        img: roadAccidentThird,
        alt: 'road_accident-3',
    },
]
