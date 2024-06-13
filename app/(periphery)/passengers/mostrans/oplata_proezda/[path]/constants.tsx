import { ITab } from '@/components/Tabs/types'
import BankCard from './contentTabs/BankCard'
import Edinyi from './contentTabs/Edinyi'
import EdinyiTatAndZoneB from './contentTabs/EdinyiTatAndZoneB'
import FacePay from './contentTabs/FacePay'
import Others from './contentTabs/Others'
import TariffsMCD from './contentTabs/TariffsMCD'
import TravelPrivilege from './contentTabs/TravelPrivilege'
import Troyka from './contentTabs/Troyka'

export const tabs: ITab[] = [
    {
        tabId: 'troyka',
        path: 'troyka',
        title: 'Карта «Тройка» и проездные',
        Content: <Troyka />,
    },
    {
        tabId: 'edinyi_tat_zona-b',
        path: 'edinyi_tat_zona-b',
        title: '«Единый», «ТАТ» и зона Б',
        Content: <EdinyiTatAndZoneB />,
    },
    {
        tabId: 'tariffs_mcd',
        path: 'tariffs_mcd',
        title: 'Тарифы МДЦ',
        Content: <TariffsMCD />,
    },
    {
        tabId: 'edinyi',
        path: 'edinyi',
        title: 'Билет «Единый»',
        Content: <Edinyi />,
    },
    {
        tabId: 'bank_card',
        path: 'bank_card',
        title: 'Оплата банковской картой',
        Content: <BankCard />,
    },
    {
        tabId: 'travel_privilege',
        path: 'travel_privilege',
        title: 'Льготный проезд',
        Content: <TravelPrivilege />,
    },
    {
        tabId: 'face_pay',
        path: 'face_pay',
        title: 'Биометрия',
        Content: <FacePay />,
    },
    {
        tabId: 'others',
        path: 'others',
        title: 'Другие способы',
        Content: <Others />,
    },
]
