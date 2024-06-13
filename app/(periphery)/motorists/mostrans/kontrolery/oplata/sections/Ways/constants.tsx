import { Docs, ExternalLinks } from '@/constants'

import Link from '@/components/Link'
import { ListProps } from '@/components/List'

export const list: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: (
                <>
                    в электронную приемную через форму&nbsp;
                    <Link
                        type="external"
                        href={ExternalLinks.appealDecision}
                    >
                        «Обжалование постановления»
                    </Link>
                    , документ с подписью;
                </>
            ),
        },
        {
            title: 'Почтой России по адресу: 127994, г. Москва, ул. Садовая-Самотечная, д. 1;',
        },
        {
            title: 'лично по адресу: г. Москва, 2-й Южнопортовый проезд, д. 27А, стр. 1, офис 206. График работы: с пн по чт с 8:00 до 17:00, в пт с 8:00 до 15:45. Копия постановления будет выдана на месте.',
        },
    ],
}

export const docApplication = Docs.application
