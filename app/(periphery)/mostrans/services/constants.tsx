import { Pages } from '@/constants'
import { CardProps } from '@/components/Card/types'

import { styles } from './styles'

export const cardsCommonProps: Pick<CardProps<'link'>, 'type' | 'className' | 'anatomy'> = {
    type: 'link',
    className: styles.card,
    anatomy: {
        title: styles.cardTitle,
        subtitle: styles.cardSubtitle,
    },
}

export const cards: Pick<CardProps<'link'>, 'href' | 'title' | 'subtitle'>[] = [
    {
        href: Pages.troika,
        title: 'Пополнение карты «Тройка»',
        subtitle: 'Пополнить карту "Тройка" c помощью банковской карты или другим способом',
    },
    {
        href: Pages.troikaLegal,
        title: 'Карты «Тройка» для юридических лиц',
        subtitle:
            'Для организаций, предприятий и индивидуальных предпринимателей. Заказать карты «Тройка» и оплатить проездные билеты по безналичному расчёту',
    },
    {
        href: Pages.searchAuto,
        title: 'Поиск автомобиля на спецстоянке',
        subtitle: 'Найдите, куда эвакуировали Ваш автомобиль!',
    },
    {
        href: Pages.searchAutoFine,
        title: 'Проверить наличие штрафов',
        subtitle:
            'Проверка наличия штрафов по водительскому удостоверению или свидетельству о регистрации транспортного средства',
    },
    {
        href: Pages.schedule,
        title: 'Узнать расписание',
        subtitle: 'Узнать расписание движения электричек и междугородних автобусов',
    },
    {
        href: Pages.getResidentParkingPermit,
        title: 'Получение парковочного разрешения для резидентов',
        subtitle: 'Получить парковочное разрешение резидентам',
    },
    {
        href: Pages.getFamilyParkingPermit,
        title: 'Парковочное разрешение многодетным семьям',
        subtitle: 'Оформить парковочное разрешение многодетным семьям',
    },
    {
        href: Pages.aeroexpress,
        title: 'Расписание «Аэроэкспресс»',
        subtitle: 'Расписание «Аэроэкспресс»',
    },
    {
        href: Pages.subscribeOnNotifications,
        title: 'Подписка на уведомления',
        subtitle: 'Настройка рассылок уведомлений по электронной почте и SMS',
    },
    {
        href: Pages.payAutoFineParkingViolating,
        title: 'Оплата штрафа за нарушение правил парковки-стоянки',
        subtitle: 'Оплатить штрафы за неоплаченную парковку (штраф ГКУ "АМПП", на 5 000 рублей)',
    },
    {
        href: Pages.getDisabledPersonParkingPermit,
        title: 'Получение парковочного разрешения для инвалидов',
        subtitle: 'Оформить парковочное разрешение инвалидам',
    },
    {
        href: Pages.getPermitForSelfPropelledAuto,
        title: 'Получение права на эксплуатацию самоходной машины',
        subtitle: 'Получить право на эксплуатацию самоходной машины по целевому назначению',
    },
    {
        href: Pages.parkingPayment,
        title: 'Оплата парковки',
        subtitle: 'Здесь вы можете оплатить парковку и пополнить парковочный счёт',
    },
    {
        href: Pages.metroEscort,
        title: 'Заказ сопровождения в метро',
        subtitle: 'Заказ сопровождения в метро',
    },
    {
        href: Pages.registerOfCargoTransport,
        title: 'Реестр действующих пропусков грузового транспорта',
        subtitle: 'Реестр действующих пропусков грузового транспорта',
    },
    {
        href: Pages.finesInfo,
        title: 'Получить информацию о штрафах в электронном виде',
        subtitle: 'Получить информацию о штрафах в электронном виде',
    },
    {
        href: Pages.troikaprodlenie,
        title: 'Проверьте доступность продления для Вашего проездного на «Тройке»',
    },
    {
        href: Pages.nedoma,
        title: 'Проверьте привязку транспортной карты к цифровому пропуску',
    },
    {
        href: Pages.cargoRequest,
        title: 'Заявка на грузовую авиаперевозку',
    },
    {
        href: Pages.mosschedule,
        title: 'Расписание наземного транспорта. Область',
    },
]
