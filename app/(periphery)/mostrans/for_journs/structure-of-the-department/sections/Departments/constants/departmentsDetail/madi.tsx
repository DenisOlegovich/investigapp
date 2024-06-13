import { ExternalLinks, Tels } from '@/constants'
import SubwayStation from '@/components/SubwayStation'

export const madi = {
    organization: {
        title: 'Московская административная дорожная инспекция',
        link: ExternalLinks.madi,
    },
    mainPerson: {
        jobTitle: 'Руководитель',
        fullName: 'Григорян Рудик Ашхарабекович',
    },
    postalAddress: {
        location: '129090, г. Москва, ул. Большая почтовая, д.7с1',
        subwayStation: (
            <SubwayStation
                number={3}
                station="Бауманская"
            />
        ),
    },
    workingTime: 'Понедельник–четверг с 8:00 до 17:00, пятница с 8:00 до 15:45, обед с 12:00 до 12:45.',
    phoneSection: {
        title: 'Телефон:',
        phones: [
            {
                number: Tels.madi,
                label: '(звонить с пн по чт - с 8:00 до 17:00, в пт - с 8:00 до 15:45. Перерыв на обед с 12:00 до 12:45)',
            },
        ],
    },
}
