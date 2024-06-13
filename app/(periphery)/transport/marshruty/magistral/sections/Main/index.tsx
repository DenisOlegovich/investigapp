import { ComponentPropsWithoutRef } from 'react'

import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import { mascotYellowBus } from '@/Images'
import Image from '@/components/Image'
import ContentLimiter from '@/components/common/ContentLimiter'

export default function Main({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <ContentLimiter className={cn('h-full', 'relative')}>
                <div className={styles.container}>
                    <h1 className={cn('h1', 'whitespace-pre-line', 'mb-lg md:mb-xs')}>
                        {PagesDisplayNames[Pages.transportMagistral]}
                    </h1>
                    <p className="lead">Мы развиваем маршрутную сеть «Магистраль»</p>
                </div>
                <Image
                    img={mascotYellowBus}
                    alt="mascot"
                    className={styles.image}
                />
            </ContentLimiter>
        </div>
    )
}

const styles = {
    wrapper: cn('bg-gradient-to-r', 'from-[#2b2c31] to-[#666e7b]', 'h-[540px] md:h-[436px] lg:h-[496px]'),
    container: cn('pt-[9.6rem] md:pt-[12rem]', 'text-white', 'max-w-[884px]'),
    image: cn(
        'absolute',
        'translate-x-[50%]',
        'right-[50%] sm:right-[25%] lg:right-[250px]',
        'bottom-0',
        'h-[300px] lg:h-[350px]',
        'w-auto',
        'block md:hidden xl:block'
    ),
}
