import { ExternalLinks, Mails, SocialLinks, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'

export const metro = {
    organization: {
        title: 'ГУП «Московский Метрополитен»',
        link: ExternalLinks.mosmetro,
    },
    mainPerson: {
        jobTitle: 'Руководитель',
        fullName: 'Козловский Виктор Николаевич',
    },
    description:
        'Целями и предметом деятельности предприятия являются оказание услуг по перевозке пассажиров в целях удовлетворения потребностей города Москвы в пассажирских перевозках и получения прибыли.',
    postalAddress: {
        location: '129110, г. Москва, Проспект Мира, д. 41, стр. 2.',
        subwayStation: (
            <SubwayStation
                number={5}
                station="Проспект Мира"
            />
        ),
    },
    emails: [{ link: Mails.infoMosmetro }],
    phoneSection: {
        title: 'Телефоны:',
        phones: [
            { number: Tels.mosmetro1, label: ',' },
            { number: Tels.mosmetro2, label: ',' },
            { number: Tels.mosmetro3, label: ',' },
            { number: Tels.mosmetro4, label: '(факс)' },
        ],
    },
    informationResources: [
        {
            resource: 'Официальный сайт ГУП «Московский метрополитен»',
            link: { href: ExternalLinks.mosmetro, label: 'mosmetro.ru/' },
        },
        {
            resource: 'Официальная страница в социальной сети «ВКонтакте»',
            link: { href: SocialLinks.mosmetroVk, label: 'vk.com/mosmetro' },
        },
        {
            resource: 'Мобильное приложение «Метро Москвы»',
            link: { href: ExternalLinks.mosmetroApp, label: 'mosmetro.ru/app' },
        },
    ],
}
