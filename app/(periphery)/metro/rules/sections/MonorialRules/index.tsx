import { ComponentPropsWithoutRef } from 'react'

import List from '@/components/List'
import { monorialRules } from './constants'

export default function MonorialRules(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className="h2">Правила пользования Московской монорельсовой транспортной системой</h2>
            <List {...monorialRules} />
        </div>
    )
}
