import Link from '@/components/Link'
import { ListProps } from '@/components/List'
import { ExternalLinks } from '@/constants'

export const heading = 'МЦД-4 «Калужско-Нижегородский»'

export const mcd3List: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'Ипподром, Раменское — Ховрино, Лихоборы, Петровско-Разумовская',
        },
        {
            title: 'Зеленоград-Крюково, Фирсановская — Вешняки, Выхино, Косино',
        },
    ],
}

export const mcd4List: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'Железнодорожная — Аминьевская;',
        },
        {
            title: 'Апрелевка, Победа — Чухлинка, Нижегородская, Серп и Молот, Курская;',
        },
        {
            title: 'Кокошкино, Толстопальцево — Чухлинка, Нижегородская;',
        },
        {
            title: 'Лесной Городок — Чухлинка.',
        },
    ],
}

export const transferList: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'при поездке по «Центральной» зоне — 27 рублей (по билету «90 минут»);',
        },
        {
            title: 'при поездке из зон «Пригород» и «Дальняя» — 54 рубля (стоимость полного билета).',
        },
    ],
}

export const walletList: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: (
                <Link
                    href={ExternalLinks.elecsnet}
                    type="external"
                >
                    Элекснет
                </Link>
            ),
        },
        {
            title: (
                <Link
                    href={ExternalLinks.cppk}
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
                    type="external"
                >
                    Московско-Тверская пригородная пассажирская компания
                </Link>
            ),
        },
    ],
}
