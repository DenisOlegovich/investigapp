import { ComponentPropsWithoutRef } from 'react'

import { heading, list } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function HowGet({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'xl:col-span-2', 'xl:max-w-[755px]', className)}>
            <h2 className={styles.title}>{heading}</h2>
            <p>Чтобы воспользоваться бесплатным Wi-Fi, вам нужна российская сим-карта.</p>
            <p className={cn(styles.text)}>Чтобы подключиться к сети Wi-Fi:</p>
            <List
                {...list}
                className="mt-xs md:mt-base"
            />
        </div>
    )
}
