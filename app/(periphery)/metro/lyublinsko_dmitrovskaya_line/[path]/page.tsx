import { ExternalLinks, Pages, PagesDisplayNames } from '@/constants'
import { tabs } from './constants'
import { PageProps } from '@/types'
import { cn } from '@/utils'

import Link from '@/components/Link'
import Tabs from '@/components/Tabs'
import ContentLimiter from '@/components/common/ContentLimiter'
import Main from './sections/Main'

export async function generateStaticParams() {
    return tabs.map(({ path }) => ({ path }))
}

type Params = { path: string }

export default function Page({ params }: PageProps<Params>) {
    return (
        <ContentLimiter className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heading}>{PagesDisplayNames[Pages.lyublinskoDmitrovskayaLine]}</h1>
                <div className={styles.container}>
                    <Main />
                    <Tabs
                        tabs={tabs}
                        defaultTab={params?.path}
                    />
                    <h3 className="h3">
                        Есть вопросы, задайте&ensp;
                        <Link
                            href={ExternalLinks.chatBot}
                            variant="default"
                            type="external"
                        >
                            Александре
                        </Link>
                    </h3>
                </div>
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('body-s md:body', 'pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]'),
    heading: cn('h1', 'mb-lg md:mb-3xl', 'mt-[0.8rem] md:mt-0', 'max-w-[755px]'),
    container: cn('flex', 'flex-col', 'gap-xl', 'max-w-[755px]'),
}
