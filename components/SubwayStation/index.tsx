import { ComponentPropsWithoutRef } from 'react'

import { cn, getLineIcon } from '@/utils'
import Image from '@/components/Image'
import If from '@/components/If'
import { metroLineIcons } from '@/constants'

export type SubwayStationAnatomy = 'container' | 'icon' | 'station'

export interface SubwayStationProps extends ComponentPropsWithoutRef<'div'> {
    number: keyof typeof metroLineIcons
    station?: string
    anatomy?: Partial<Record<SubwayStationAnatomy, string>>
}

export default function SubwayStation({
    number,
    station,
    className,
    anatomy: {
        container: containerCustomProps = '',
        icon: iconCustomProps = '',
        station: stationCustomProps = '',
    } = {},
    ...props
}: SubwayStationProps) {
    return (
        <div
            className={cn(styles.wrapper, className, containerCustomProps)}
            {...props}
        >
            <Image
                img={getLineIcon(number)}
                alt=""
                className={iconCustomProps}
            />
            <If condition={station}>
                <p className={stationCustomProps}>{station}</p>
            </If>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'items-center', 'gap-xs', 'body-s md:body'),
}
