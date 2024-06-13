import { ExternalLinks } from '@/constants/externalLinks'
import Link from '@/components/Link'
import { ListProps } from '@/components/List'

export const heading = 'Пополнение билета «Кошелек» карты «Тройка»'

export const list: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: (
                <Link
                    href={ExternalLinks.elecsnet}
                    variant="default"
                    type="external"
                >
                    Элекснет
                </Link>
            ),
        },
        {
            title: (
                <Link
                    href={ExternalLinks.aeroexpress}
                    variant="default"
                    type="external"
                >
                    Аэроэкспресс
                </Link>
            ),
        },
        {
            title: (
                <Link
                    href={ExternalLinks.cppk}
                    variant="default"
                    type="external"
                >
                    Электричка
                </Link>
            ),
        },
        {
            title: (
                <Link
                    href={ExternalLinks.mtppk}
                    variant="default"
                    type="external"
                >
                    Московско-Тверская пригородная пассажирская компания
                </Link>
            ),
        },
    ],
}
