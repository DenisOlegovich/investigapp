import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <h1 className={cn('h1', 'mb-xl md:mb-3xl')}>{PagesDisplayNames[Pages.workTime]}</h1>
                <p>
                    Все станции Московского метрополитена открыты для входа и пересадки с одной линии на другую
                    ежедневно с 5 часов 30 минут утра до 1 часа ночи.
                </p>
                <p className="mt-xs md:mt-base">
                    Все станции Московской монорельсовой транспортной системы работают для входа и выхода пассажиров
                    ежедневно с 8 до 20 часов.
                </p>
            </div>
        </ContentLimiter>
    )
}
