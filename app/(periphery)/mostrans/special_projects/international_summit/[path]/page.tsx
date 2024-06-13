import Tabs from '@/components/Tabs'
import ContentLimiter from '@/components/common/ContentLimiter'
import { Pages, PagesDisplayNames } from '@/constants'
import { PageProps } from '@/types'
import { cn } from '@/utils'
import { tabs } from './constants'

export async function generateStaticParams() {
    return tabs.map(({ path }) => ({ path }))
}

type Params = { path: string }

// TODO: Добавить 404 страницу
export default function Page({ params }: PageProps<Params>) {
    return (
        <ContentLimiter className={cn('md:body pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.internationalSummit]}</h1>
                <p>
                    Международный саммит лидеров в сфере развития городского транспорта прошел в Москве впервые. Его
                    посетили делегации ведущих мегаполисов мира. В Москву съехались мэры, их заместители, руководители
                    транспортных департаментов и транспортных компаний из Нью-Йорка, Монреаля, Берлина, Мадрида,
                    Сингапура, Чэнду, Буэнос-Айреса, Сеула и других городов. Всего присутствовали ведущие эксперты из 20
                    городов и 15 стран. По завершению мероприятия мэр Москвы С. Собянин и генеральный секретарь
                    Международного союза общественного транспорта Мохамед Мезгани подписали декларацию о дальнейшем
                    сотрудничестве городов-участников международного саммита лидеров в сфере развития городского
                    транспорт.
                </p>
                <Tabs
                    tabs={tabs}
                    defaultTab={params?.path}
                />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('md:body', 'flex flex-col', 'gap-2xl md:gap-3xl', 'max-w-[755px]'),
}
