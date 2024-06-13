import { ComponentPropsWithoutRef } from 'react'

import { locations } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

export default function Locations(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h3 className={cn('h3', 'mb-lg md:mb-xl')}>Найти вышеперечисленные площадки можно в ДОРЦ по адресам:</h3>
            <List
                variant="ordered"
                markerSpacing={0.8}
                items={locations}
            />
        </div>
    )
}
