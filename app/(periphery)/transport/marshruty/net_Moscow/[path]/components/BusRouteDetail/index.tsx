import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/utils'
import Accordion from '@/components/Accordion'
import FullBusRoute from '../FullBusRoute'

export interface BusRouteDetailProps extends ComponentPropsWithoutRef<'div'> {
    isShowMap: boolean
    bus: string
    route?: string
    description: ReactNode
    map: ReactNode
}

export default function BusRouteDetail({ isShowMap, bus, route, description, map, ...props }: BusRouteDetailProps) {
    return (
        <div
            className={styles.wrapper}
            {...props}
        >
            <FullBusRoute
                bus={bus}
                route={route}
            />
            <div>{description}</div>
            <Accordion
                items={[
                    {
                        isOpen: isShowMap,
                        title: 'Маршрут на карте',
                        content: map,
                    },
                ]}
                anatomy={{ title: 'body-s md:body', content: 'pt-xs md:pt-lg' }}
            />
        </div>
    )
}

const styles = {
    wrapper: cn('body-s md:body', 'flex', 'flex-col', 'gap-xs md:gap-lg'),
}
