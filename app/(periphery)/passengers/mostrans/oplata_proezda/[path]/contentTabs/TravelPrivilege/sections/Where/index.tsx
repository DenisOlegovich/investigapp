import List from '@/components/List'
import TextAlert from '@/components/TextAlert'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { alert, heading, list } from './constant'

export default function WhereAnsHow({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <h3 className="h3">{heading}</h3>
            <List {...list} />
            <TextAlert {...alert} />
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
}
