import { Pages, PagesDisplayNames } from '@/constants'
import { navMenu } from '../constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import Description from './sections/Description'
import InternalNavbar from '@/components/InternalNavbar'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <Link
                href={Pages.transportMagistral}
                variant="simple_gray"
                className={styles.link}
            >
                ← Магистраль
            </Link>
            <h1 className={styles.title}>{PagesDisplayNames[Pages.magistralChange]}</h1>
            <div className={styles.content}>
                <Description className="max-w-[75.5rem] " />
                <InternalNavbar
                    title="Смотреть другие разделы:"
                    navMenu={navMenu}
                    excludedPageHref={Pages.magistralChange}
                    className="xl:mt-[6rem]"
                />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('pt-[6.8rem] md:pt-[9rem] xl:pt-[8.2rem]', 'pb-2xl md:pb-[7rem] xl:pb-[10rem]'),
    link: cn('mb-lg xl:mb-3xl', 'inline-block'),
    title: cn('h1', 'mb-xl md:mb-3xl'),
    content: cn('flex', 'gap-xl xl:gap-[13.6rem]', 'flex-col xl:flex-row'),
}
