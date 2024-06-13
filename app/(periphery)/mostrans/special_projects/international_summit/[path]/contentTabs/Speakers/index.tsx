import { cn } from '@/utils'
import { items } from './constants'
import PresentationCard from '@/components/PresentationCard'

export default function Speakers() {
    return (
        <div className={styles.wrapper}>
            {items.map(({ title, href, img }, idx) => (
                <PresentationCard
                    key={idx}
                    href={href}
                    img={img}
                    extra={title}
                    anatomy={{
                        container: 'gap-xs md:gap-sm',
                        image: 'h-[18.6rem] md:h-[20rem]',
                    }}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('grid', 'md:grid-cols-[repeat(2,1fr)]', 'gap-sm md:gap-lg', 'max-w-[644px]'),
    itemContainer: cn('relative'),
    itemImage: cn('rounded-[0.8rem]', 'shadow-md', 'w-full'),
    itemLink: cn('mt-xs md:mt-sm', `before:content-[''] before:absolute before:inset-0`),
}
