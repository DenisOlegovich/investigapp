import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { list } from './constants'

import List from '@/components/List'

export default function What(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Что такое МСД?</h2>
            <List {...list} />
        </div>
    )
}
