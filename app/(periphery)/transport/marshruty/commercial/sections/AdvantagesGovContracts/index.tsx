import { ComponentPropsWithoutRef } from 'react'

import { advantagesList } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function AdvantagesGovContracts({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Преимущества государственных контрактов</h2>
            <List {...advantagesList} />
        </div>
    )
}
