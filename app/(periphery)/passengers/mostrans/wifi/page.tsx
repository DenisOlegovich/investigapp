import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import HowGet from './sections/HowGet'
import WiFiFree from './sections/WiFiFree'

export default function Page() {
    return (
        <ContentLimiter
            className={cn('text-xl pt-[9.5rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]', 'body-s md:body')}
        >
            <h1 className="h1">{PagesDisplayNames[Pages.wifi]}</h1>
            <p
                className={cn(
                    'mt-xl md:mt-3xl',
                    'mb-xl md:mb-3xl',
                    'max-w-[755px]',
                    'text-lg text-grey-dark md:text-4xl'
                )}
            >
                В метро и на магистральных маршрутах автобусов и электробусов теперь доступна единая сеть Wi-fi. Всего с
                момента запуска проекта доступом к сети обеспечены около 900 автобусов и электробусов.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-3">
                <HowGet />
                <WiFiFree />
            </div>
        </ContentLimiter>
    )
}
