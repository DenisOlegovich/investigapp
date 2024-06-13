import { ExternalLinks, Mails, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'

export const mdto = {
    organization: {
        title: 'АНО «Московская дирекция транспортного обслуживания»',
        link: ExternalLinks.mdto,
    },
    mainPerson: {
        jobTitle: 'Генеральный директор',
        fullName: 'Шарыкин Александр Владимирович',
    },
    description:
        'АНО «МДТО» осуществляет задачи и функции в организации совершенствования транспортного обслуживания населения и организаций, осуществляющих проведение развлекательных, культурных, спортивных мероприятий, а также обеспечения транспортом объектов массового посещения в городе Москве.',
    postalAddress: {
        location: '109012, Российская Федерация, г. Москва, улица Никольская, д.11-13, стр.4.',
        subwayStation: (
            <SubwayStation
                number={3}
                station="Площадь Революции"
            />
        ),
    },
    emails: [
        {
            link: Mails.mdto,
        },
    ],
    phoneSection: {
        title: 'Телефоны:',
        phones: [
            {
                number: Tels.mdtoReception,
                label: '(приёмная генерального директора АНО «МДТО»),',
            },
            {
                number: Tels.mdtoCorrespondence,
                label: '(вопросы по направленной в АНО «МДТО» корреспонденции),',
            },
            {
                number: Tels.mdtoProcurement,
                label: '(по организации закупок).',
            },
        ],
    },
    informationResources: [
        {
            resource: 'Официальный сайт АНО «МДТО»:',
            link: {
                href: ExternalLinks.mdto,
                label: 'mdto.ru',
            },
        },
    ],
}
