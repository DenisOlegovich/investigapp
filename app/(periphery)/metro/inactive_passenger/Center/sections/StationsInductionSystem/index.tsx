import { ComponentPropsWithoutRef } from 'react'

import List from '@/components/List'
import { stationsWithInductionSystem } from './constants'
import { cn } from '@/utils'

export default function StationsInductionSystem(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Список станций с индукционными портативными системами:</h2>
            <List {...stationsWithInductionSystem} />
        </div>
    )
}
