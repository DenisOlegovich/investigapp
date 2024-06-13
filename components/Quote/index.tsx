import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/utils'
import Image from '@/components/Image'
import { CustomImage } from '@/Images'

export interface QuoteProps extends ComponentPropsWithoutRef<'div'> {
    text: ReactNode
    human?: {
        img: CustomImage
        name: ReactNode
        description: ReactNode
    }
}

export default function Quote({ text, human, className, ...props }: QuoteProps) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.quoteWrapper}>
                {text}
                {human && <div className={styles.arrow} />}
            </div>
            {human && (
                <div className={styles.humanWrapper}>
                    <Image
                        img={human.img}
                        width={48}
                        height={48}
                        alt="human"
                        className={styles.humanImg}
                    />
                    <div className={styles.humanInfo}>
                        <p className={cn('font-medium')}>{human.name}</p>
                        <p className={cn('text-[1.4rem] text-grey-dark', 'max-w-[378px]')}>{human.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'max-w-[755px]', 'gap-[3.6rem]'),
    quoteWrapper: cn(
        'relative rounded-[8px] bg-grey-extra-light',
        'p-[1.6rem] sm:px-[3.6rem] sm:py-[3.8rem]',
        'text-[1.6rem] sm:text-[2rem]'
    ),
    humanWrapper: cn('sm:pl-[4.6rem]', 'flex flex-col sm:flex-row gap-[1.6rem]'),
    humanImg: cn('w-[4.8rem] h-[4.8rem]', 'rounded-full'),
    humanInfo: cn('flex flex-col gap-[0.6rem]', 'text-[1.6rem]'),
    arrow: cn(
        'absolute top-full sm:left-[8.5rem] left-[4.8rem]',
        'transform -translate-x-1/2',
        'w-0 h-0',
        'border-l-[0px] border-l-transparent border-r-[24px] border-r-transparent border-t-[24px] border-t-grey-extra-light'
    ),
}
