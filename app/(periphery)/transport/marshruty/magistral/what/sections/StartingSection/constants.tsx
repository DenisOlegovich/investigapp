import { ListProps } from '@/components/List'

export const list: ListProps = {
    variant: 'unordered',
    items: [
        {
            title: (
                <>
                    <span className="body-s_bold md:body_bold">Магистральные маршруты</span> — наиболее частые. Именно
                    эти маршруты проходят по основным улицам и соединяют центр с районами Москвы.
                </>
            ),
        },
        {
            title: (
                <>
                    <span className="body-s_bold md:body_bold">Районные маршруты</span> — работают со средними
                    интервалами до 15 мин. Предназначены для передвижений внутри района или между районами.
                </>
            ),
        },
        {
            title: (
                <>
                    <span className="body-s_bold md:body_bold">Социальные маршруты</span> связывают значимые социальные
                    объекты: поликлиники, школы, МФЦ. Интервал их движения, как правило — до 30 минут.
                </>
            ),
        },
    ],
}
