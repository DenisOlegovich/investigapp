import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { list } from './constants'

import List from '@/components/List'

export default function DomesticSection(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h1 className={cn('h2', 'mb-xl')}>Нормы российского законодательства:</h1>
            <List {...list} />
        </div>
    )
}
