import Link from '@/components/Link'
import { ListProps } from '@/components/List'
import { ExternalLinks } from '@/constants'

export const heading = 'Где получить карту'

export const list: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: (
                <>
                    <Link
                        href={ExternalLinks.cardMoscow}
                        type="external"
                    >
                        Оформить онлайн
                    </Link>
                    &ensp; на портале и потом забрать в центре госуслуг «Мои документы». Чтобы узнать, когда забирать
                    карту — проверьте её готовность.
                </>
            ),
        },
        {
            title: 'Оформить сразу в центре госуслуг «Мои документы». Обращаться можно в любой центр вне зависимости от места жительства или местонахождения учебного заведения.',
        },
    ],
}

export const alert = {
    title: 'Важно!',
    description: 'Для льготного проезда у студентов при себе должен быть студенческий билет.',
}
