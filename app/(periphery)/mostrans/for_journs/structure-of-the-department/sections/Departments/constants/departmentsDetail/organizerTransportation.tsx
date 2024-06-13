import { ExternalLinks, Tels } from '@/constants'
import List from '@/components/List'
import SubwayStation from '@/components/SubwayStation'

export const organizerTransportation = {
    organization: {
        title: 'ГКУ «Организатор перевозок»',
        link: ExternalLinks.organizerTransportation,
    },
    mainPerson: {
        jobTitle: 'Руководитель',
        fullName: 'Султанов Владислав Назипович',
    },
    description: (
        <>
            <p>Московская административная дорожная инспекция контролирует:</p>
            <List
                variant="unordered"
                items={[
                    { title: 'правила остановки и стоянки транспортных средств;' },
                    { title: 'правила перевозки пассажиров и багажа легковым такси;' },
                    { title: 'правонарушения, связанные со стоянкой на зеленых насаждениях;' },
                    { title: 'соблюдение условий производства разгрузочно-погрузочных работ в ночное время.' },
                ]}
            />
        </>
    ),
    postalAddress: {
        location: 'г. Москва, 127994, ул. Садовая-Самотёчная, д. 1.',
        subwayStation: (
            <SubwayStation
                number={7}
                station="Цветной бульвар"
            />
        ),
    },
    workingTime: 'Понедельник–четверг с 8:00 до 17:00, пятница с 8:00 до 15:45',
    phoneSection: {
        title: 'Телефон/факс:',
        phones: [{ number: Tels.organizerTransportation }],
    },
    tasksOrganization: {
        title: 'Сведения о задачах и функциях организации:',
        content: (
            <List
                variant="unordered"
                items={[
                    {
                        title: 'работа контролеров в наземном транспорте и метро (соблюдение правил пользования и оплаты проезда, контроль неправомерного использования льготных персонифицированных карт);',
                    },
                    {
                        title: 'контроль обслуживания маршрутов коммерческими перевозчиками, работающими по государственным контрактам;',
                    },
                    {
                        title: 'диспетчеризация и организация: движение наземного транспорта, маршрутная сеть, выделенные полосы;',
                    },
                    {
                        title: 'контроль исполнения государственного контракта по работе регулярного речного электрического транспорта;',
                    },
                    {
                        title: 'пресечение нелегальных пассажирских перевозок, незаконной торговли и несанкционированной рекламы.',
                    },
                ]}
            />
        ),
    },
    informationResources: [
        {
            resource: 'Раздел о ГКУ «Организатор перевозок» на Едином транспортном портале:',
            link: { href: ExternalLinks.organizerTransportation, label: 't.mos.ru/organizer_transportation' },
        },
        {
            resource: 'Автоматизированная информационная система «ГКУ «Организатор перевозок».',
        },
    ],
}
