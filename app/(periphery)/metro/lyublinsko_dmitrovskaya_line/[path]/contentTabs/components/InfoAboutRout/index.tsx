import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CustomImage } from '@/Images'
import { cn } from '@/utils'
import NextArrowIcon from '@/components/icons/NextArrowIcon'
import BusHalfIcon from '@/components/icons/BusHalfIcon'
import CalendarStrokeIcon from '@/components/icons/CalendarStrokeIcon'
import Image from '@/components/Image'
import If from '@/components/If'
import Accordion from '@/components/Accordion'
import BusRoute, { BusRouteProps } from '@/components/BusRoute'

export interface InfoAboutRoutProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
    busRoutes: (BusRouteProps | 'arrow')[]
    date: string
    title: ReactNode
    description: ReactNode
    imgScheme?: CustomImage
    isMain?: boolean
}

export default function InfoAboutRout({
    busRoutes = [],
    date,
    title,
    description,
    imgScheme,
    isMain,
    className,
    ...props
}: InfoAboutRoutProps) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.busWrapper}>
                <BusHalfIcon className={styles.busHalfIcon} />
                <div className={styles.busContainer}>
                    {busRoutes.map((el, idx) =>
                        typeof el === 'string' ? (
                            <NextArrowIcon
                                className={styles.nextArrowIcon}
                                key={idx}
                            />
                        ) : (
                            <BusRoute
                                key={idx}
                                {...el}
                            />
                        )
                    )}
                </div>
            </div>
            <div className={styles.dateWrapper}>
                <CalendarStrokeIcon className={styles.dateIcon} />
                <p>{date}</p>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.descriptionWrapper}>{description}</div>
            {imgScheme && (
                <div className={styles.schemeWrapper}>
                    <If
                        condition={isMain}
                        Else={
                            <Accordion
                                items={[
                                    {
                                        title: 'Показать схему',
                                        expandedTitle: 'Скрыть схему',
                                        content: (
                                            <Image
                                                img={imgScheme}
                                                alt="scheme"
                                                className="rounded-[0.8rem]"
                                            />
                                        ),
                                    },
                                ]}
                                // anatomy={{ title: styles.showSchemeBtn }}
                            />
                        }
                    >
                        <Image
                            img={imgScheme}
                            alt="scheme"
                            className="rounded-[0.8rem]"
                        />
                    </If>
                </div>
            )}
        </div>
    )
}

const styles = {
    wrapper: cn(
        'flex',
        'flex-col',
        'gap-sm sm:gap-lg',
        'p-sm sm:p-lg',
        'rounded-[0.8rem]',
        'bg-grey-extra-light',
        'text-[1.6rem] sm:text-[2rem]'
    ),

    title: cn('h3', 'max-w-[57rem]'),

    busWrapper: cn('flex', 'gap-xs', 'items-center'),
    busContainer: cn('flex', 'gap-[0.6rem]', 'items-center'),
    busHalfIcon: 'text-[3.2rem] text-blue sm:text-[4rem]',
    nextArrowIcon: 'text-[1.7rem] sm:text-[2.4rem]',

    dateWrapper: cn('flex', 'gap-[0.4rem]', 'items-center'),
    dateIcon: 'text-[3.2rem] text-grey-dark',

    descriptionWrapper: cn('flex', 'flex-col', 'gap-xs sm:gap-base'),

    schemeWrapper: cn('flex', 'flex-col', 'gap-xs', 'items-start'),
    // showSchemeBtn: 'underline-offset-[6px] md:underline-offset-[6px]',
}
