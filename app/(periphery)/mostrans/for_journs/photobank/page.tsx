import { Pages, PagesDisplayNames } from '@/constants'
import { Photo, photobank } from './constants'
import { cn } from '@/utils'

import Accordion from '@/components/Accordion'
import PresentationCard from '@/components/PresentationCard'
import ContentLimiter from '@/components/common/ContentLimiter'

export default function Photobank() {
    const content = (items: Photo[]) => {
        if (items.length) {
            return (
                <div className={cn('grid', 'sm:grid-cols-2 lg:grid-cols-4', 'gap-sm md:gap-lg')}>
                    {items.map(({ id, title, mainImage }, idx) => (
                        <PresentationCard
                            key={idx}
                            img={mainImage}
                            href={`${Pages.photobank}/${id}`}
                            extra={title}
                            isExternal={false}
                            anatomy={{
                                container: cn('w-full', 'gap-sm md:gap-sm'),
                                image: 'h-[219px] sm:h-[236px]',
                            }}
                        />
                    ))}
                </div>
            )
        }

        return <p className="text-grey">пока нет изображений</p>
    }

    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className="h1">{PagesDisplayNames[Pages.photobank]}</h1>
            <Accordion
                className="mt-2xl md:mt-3xl"
                anatomy={{
                    itemWrapper: 'mt-[2.9rem] md:mt-[3.3rem]',
                    content: 'pt-xl',
                }}
                items={photobank.map(({ title, items }) => ({
                    title,
                    content: content(items),
                }))}
            />
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('body-s md:body', 'pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] sm:pb-[7rem] md:pb-[10rem]'),
}
