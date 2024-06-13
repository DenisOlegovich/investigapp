import { ExternalLinks, Mails, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'

export const mosgortrans = {
    organization: {
        title: 'ГУП «Мосгортранс»',
        link: ExternalLinks.mosgortrans,
    },
    mainPerson: {
        jobTitle: 'Генеральный директор',
        fullName: 'Асаул Николай Анатольевич',
    },
    description:
        'Функции и задачи ГУП «Мосгортранс» – основной в Москве оператор наземного городского пассажирского транспорта.',
    postalAddress: {
        location: '125195, г. Москва, Ленинградское шоссе, дом 59.',
        subwayStation: (
            <SubwayStation
                number={2}
                station="Речной вокзал"
            />
        ),
    },
    emails: [{ link: Mails.mosgortrans }],
    phoneSection: {
        title: 'Телефон:',
        phones: [{ number: Tels.mosgortrans }],
    },
    informationResources: [
        {
            resource: 'Официальный сайт ГУП «Мосгортранс»:',
            link: { href: ExternalLinks.mosgortrans, label: 'mosgortrans.ru/' },
        },
    ],
}
