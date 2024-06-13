import { ComponentPropsWithoutRef } from 'react'

import { list, heading } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function ServiceSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'xl:max-w-[867px]', className)}>
            <h2 className={styles.title}>{heading}</h2>
            <List {...list} />
        </div>
    )
}
