import { PageProps } from '@/types'
import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import Tabs from '@/components/Tabs'
import { tabs } from './constants'

export async function generateStaticParams() {
    return tabs.map(({ path }) => ({ path }))
}

type Params = { path: string }

// TODO: Добавить 404 страницу
export default function Page({ params }: PageProps<Params>) {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <h1 className={cn('h1', 'mb-xl md:mb-3xl')}>{PagesDisplayNames[Pages.worldTransportPromotion]}</h1>
                <Tabs
                    tabs={tabs}
                    defaultTab={params?.path}
                />
            </div>
        </ContentLimiter>
    )
}
