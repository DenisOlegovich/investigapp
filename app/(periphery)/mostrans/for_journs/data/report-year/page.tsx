import { Pages, PagesDisplayNames } from '@/constants'
import { cards } from './constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import PresentationCard from '@/components/PresentationCard'

export default function Page() {
    return (
        <ContentLimiter className={cn('body-s md:body pt-[6.8rem] md:pt-[8.2rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <Link
                href={Pages.dataMT}
                variant="simple_gray"
                className="body-xs md:body-s"
            >
                ← {PagesDisplayNames[Pages.dataMT]}
            </Link>
            <h1 className={styles.title}>{PagesDisplayNames[Pages.reportYear]}</h1>
            <div className={styles.cards}>
                {cards.map(({ ...props }, idx) => (
                    <PresentationCard
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </ContentLimiter>
    )
}

const styles = {
    title: cn('h1', 'mt-2xs md:mt-3xl'),
    cards: cn(
        'mt-xl md:mt-3xl',
        'grid grid-cols-[repeat(auto-fit,28.8rem)] md:grid-cols-[repeat(auto-fit,42.1rem)]',
        'gap-sm md:gap-lg'
    ),
}
