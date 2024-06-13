import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import BusHalfIcon from '@/components/icons/BusHalfIcon'
import If from '@/components/If'
import BusRoute from '@/components/BusRoute'

export interface FullBusRouteProps extends ComponentPropsWithoutRef<'div'> {
    bus: string
    route?: string
}

export default function FullBusRoute({ bus, route, ...props }: FullBusRouteProps) {
    return (
        <div
            className={styles.wrapper}
            {...props}
        >
            <BusHalfIcon className="text-[3.2rem] text-blue" />
            <BusRoute
                number={bus}
                variant="blue"
                className={styles.busRoute}
            />
            <If condition={route}>
                <h5 className="h5">{route}</h5>
            </If>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-wrap', 'items-center', 'gap-[0.4rem] md:gap-sm'),
    tag: cn(
        'flex',
        'justify-center',
        'items-center',
        'w-[5.4rem]',
        'h-[2.4rem]',
        'text-white',
        'text-[2rem]',
        'leading-none',
        'bg-blue',
        'rounded-[0.2rem]'
    ),
    busRoute: cn(' text-[2rem] md:text-[2rem] ', 'leading-[1]', 'min-w-[2.7em] md:min-w-[2.7em]'),
}
