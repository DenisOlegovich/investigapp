import Image, { ImageProps } from '@/components/Image'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

export interface CardsProps extends ComponentPropsWithoutRef<'div'> {
    cards: ImageProps['img'][]
}

export default function Cards({ cards, className }: CardsProps) {
    return (
        <div className={cn(styles.cards, className)}>
            {cards.map((img, idx) => (
                <Image
                    key={idx}
                    img={img}
                    alt="card"
                    className={cn(styles.cardImage, {
                        'absolute h-full right-0 z-[2]': idx === 0,
                        'absolute h-full right-[20%] z-[1]': idx === 1,
                        'min-h:11rem': idx === 2,
                    })}
                />
            ))}
        </div>
    )
}

const styles = {
    cards: cn('relative', 'w-full'),
    cardImage: cn('w-[60%]'),
}
