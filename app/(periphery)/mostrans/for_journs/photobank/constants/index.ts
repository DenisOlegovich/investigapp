import {
    CustomImage,
    photobank1Image1,
    photobank1Image2,
    photobank1Image3,
    photobank1Image4,
    photobank1Image5,
    photobank1Image6,
} from '@/Images'

export type Photo = {
    id: string
    title: string
    mainImage: CustomImage
    images?: CustomImage[]
}

export type Photobank = {
    title: string
    items: Photo[]
}

export const photo: Photo = {
    id: '1',
    title: 'Московское центральное кольцо',
    mainImage: photobank1Image1,
    images: [
        photobank1Image1,
        photobank1Image2,
        photobank1Image3,
        photobank1Image4,
        photobank1Image5,
        photobank1Image6,
    ],
}

export const photobank: Photobank[] = [
    {
        title: 'Как транспорт Москвы защищают от коронавируса',
        items: [photo, photo],
    },
    {
        title: 'Мероприятия с участием М.С. Ликсутова',
        items: [photo],
    },
    {
        title: 'Московский метрополитен',
        items: [photo],
    },
    {
        title: 'Московское центральное кольцо',
        items: [photo],
    },
    {
        title: 'Наземный транспорт',
        items: [photo],
    },
    {
        title: 'Московский паркинг',
        items: [photo],
    },
    {
        title: 'Карта «Тройка»',
        items: [photo],
    },
    {
        title: 'Такси',
        items: [photo],
    },
    {
        title: 'Каршеринг',
        items: [],
    },
    {
        title: 'Мототранспорт',
        items: [],
    },
    {
        title: 'Велотранспорт',
        items: [],
    },
    {
        title: 'Сервисные центры',
        items: [],
    },
    {
        title: 'События',
        items: [],
    },
]
