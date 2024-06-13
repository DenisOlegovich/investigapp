import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import Direct from './Direct'
import Remote from './Remote'

const heading = 'Пополнение билета «Кошелек» карты «Тройка»'

export default function ToUpCardSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={cn('h2', 'xl:max-w-[867px]')}>{heading}</h2>
            <Direct />
            <Remote />
        </div>
    )
}
