import Link from '@/components/Link'
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
        <ContentLimiter className={cn('pt-[6.4rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <Link
                href={Pages.passengers}
                variant="simple_gray"
                className="inline-block md:hidden"
            >
                ← {PagesDisplayNames[Pages.passengers]}
            </Link>
            <h1 className={cn('h1', 'mb-lg md:mb-3xl', 'mt-[0.8rem] md:mt-0')}>
                {PagesDisplayNames[Pages.oplataProezda]}
            </h1>
            <Tabs
                tabs={tabs}
                defaultTab={params?.path}
            />
        </ContentLimiter>
    )
}
