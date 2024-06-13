import { ExternalLinks, Mails, SocialLinks, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'

export const codd = {
    organization: {
        title: 'ГКУ «Центр организации дорожного движения Правительства Москвы» ЦОДД',
        link: ExternalLinks.codd,
    },
    mainPerson: {
        jobTitle: 'Руководитель организации',
        fullName: 'Кизлык Михаил Александрович',
    },
    postalAddress: {
        location: '111033, г. Москва, Золоторожский вал, д.4, стр.2; 2-й Лесной переулок, д.11, стр.1',
        subwayStation: (
            <SubwayStation
                number={2}
                station="Белорусская"
            />
        ),
    },
    workingTime: 'Понедельник–четверг с 8:00 до 17:00, пятница с 8:00 до 15:45',
    emails: [{ link: Mails.codd }],
    pressServiceEmail: Mails.coddPressService,
    phoneSection: {
        title: 'Телефон:',
        phones: [{ number: Tels.codd }],
    },
    phoneMedia: Tels.coddMedia,
    detailInfo:
        'Государственное казенное учреждение города Москвы - Центр организации дорожного движения Правительства Москвы',
    tasksOrganization: {
        title: 'Функции и задачи:',
        content:
            'Центр организации дорожного движения (ЦОДД) занимается разработкой и реализацией стратегии управления дорожным движением. Организация развивает дорожную сеть, чтобы движение в городе стало быстрым, комфортным и безопасным для всех: пешеходов, велосипедистов, пассажиров городского транспорта и автомобилистов.',
    },
    informationResources: [
        {
            link: { href: SocialLinks.mosroadVk, label: 'vk.com/mosroad' },
        },
        {
            link: { href: ExternalLinks.codd, label: 'gucodd.ru/' },
        },
        {
            link: { href: ExternalLinks.coddOld, label: 'old.gucodd.ru/' },
        },
    ],
}
