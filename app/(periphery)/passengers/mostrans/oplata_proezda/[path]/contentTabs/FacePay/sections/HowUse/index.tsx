import List from '@/components/List'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { heading, list } from './constants'

export default function HowUse({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>{heading}</h2>
            <List {...list} />
        </div>
    )
}
