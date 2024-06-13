import List from '@/components/List'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { heading, list } from './constant'

export default function How({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <h3 className="h3">{heading}</h3>
            <List {...list} />
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
}
