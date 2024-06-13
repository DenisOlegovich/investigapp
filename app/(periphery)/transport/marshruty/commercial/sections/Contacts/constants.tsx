import { Tels } from '@/constants'

export type ContactsProps = {
    title: string
    general: string
    hr: string[]
    lostItems: string
}

export const contacts: ContactsProps[] = [
    {
        title: 'ООО «ГорТакси»',
        general: Tels.gorTaxi,
        hr: [Tels.gorTaxiHR],
        lostItems: Tels.gorTaxi,
    },
    {
        title: 'ООО «Таксомоторный парк №\u00A020»',
        general: Tels.taxiPark20,
        hr: [Tels.taxiPark20HR, Tels.taxiPark20HR2],
        lostItems: Tels.taxiPark20,
    },
    {
        title: 'ООО «СтарТранс»',
        general: Tels.starTrans,
        hr: [Tels.starTransHR],
        lostItems: Tels.starTransLostItems,
    },
    {
        title: 'ООО «Трансавтолиз»',
        general: Tels.transAutoLiz,
        hr: [Tels.transAutoLizHR],
        lostItems: Tels.transAutoLizLostItems,
    },
]
