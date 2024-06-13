import { ExternalLinks, Mails, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'
import List from '@/components/List'

export const parking = {
    organization: {
        title: 'ГКУ «Администратор Московского парковочного пространства» АМПП',
        link: ExternalLinks.parkingFines,
    },
    mainPerson: {
        jobTitle: 'Генеральный директор',
        fullName: 'Павлов Павел Павлович',
    },
    postalAddress: {
        location: 'Москва, 125040, ул. Скаковая д. 19',
        subwayStation: (
            <SubwayStation
                number={2}
                station="Белорусская"
            />
        ),
    },
    workingTime: 'Понедельник–четверг с 8:00 до 17:00, пятница с 8:00 до 15:45',
    emails: [{ link: Mails.parking }],
    phoneSection: {
        title: 'Телефон:',
        phones: [{ number: Tels.mosmetroContactCenter }],
    },
    tasksOrganization: {
        title: 'Функции и задачи ГКУ «АМПП» – организация работы платных парковок в Москве:',
        content: (
            <List
                variant="unordered"
                items={[
                    { title: 'работа системы оплаты парковок;' },
                    { title: 'обустройство плоскостных парковок со шлагбаумом;' },
                    { title: 'контроль за соблюдением правил оплаты парковки;' },
                    {
                        title: 'перемещение неправильно припаркованных транспортных средств на специализированные стоянки (по решению должностных лиц);',
                    },
                    { title: 'оператор Московского скоростного диаметра в части взимания платы за проезд.' },
                ]}
            />
        ),
    },
    informationResources: [
        {
            resource: 'Официальный сайт ГКУ «АМПП»:',
            link: { href: ExternalLinks.parking, label: 'parking.mos.ru' },
        },
        {
            resource: 'Официальный сайт «Московский скоростной диаметр»:',
            link: { href: ExternalLinks.msd, label: 'msd.mos.ru/' },
        },
        {
            resource:
                'Автоматизированная информационная система города Москвы «Единое парковочное пространство» (АИС ЕПП), Автоматизированная информационная система «Реестр парковочных разрешений» (АИС РПР), Информационная система «Единый диспетчерский центр» (ИС ЕДЦ), Автоматизированная система «Центр мониторинга и управления плоскостными парковками закрытого типа» (АИС ЦМИУ), Автоматизированная информационная система «Московский скоростной диаметр» (АИС МСД).',
        },
    ],
}
