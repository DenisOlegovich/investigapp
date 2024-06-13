import { Pages, PagesDisplayNames } from '@/constants'
import { probabilityPedestrianDeath } from '@/Images'
import { articlesList } from './constants/articlesList'
import { description, descriptionSecond } from './constants/common'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Image from '@/components/Image'
import List from '@/components/List'

export default function Museum() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{PagesDisplayNames[Pages.nonPenaltyThreshold]}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.descriptionSecond}>{descriptionSecond}</p>
                <Image
                    img={probabilityPedestrianDeath}
                    alt=""
                    className={styles.image}
                />
                <List {...articlesList} />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: 'max-w-[75.5rem]',
    title: cn('h1', 'mb-2xl md:mb-3xl'),
    description: cn('lead', 'text-grey-dark', 'mb-2xl md:mb-3xl'),
    descriptionSecond: cn('body-s md:body', 'whitespace-pre-line', 'mb-sm md:mb-lg'),
    image: cn('h-[30.8rem] md:h-[45rem]', 'w-[28.8rem] md:w-[42.1rem]', 'mb-sm md:mb-lg', 'rounded-[0.8rem]'),
}
