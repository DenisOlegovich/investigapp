import { ComponentPropsWithoutRef } from 'react'

import HowGet from './HowGet'
import Prices from './Prices'
import { cn } from '@/utils'

export default function MainSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <p className={cn('mb-2xl md:mb-3xl', 'max-w-[867px]', 'text-lg text-grey-dark md:text-4xl')}>
                Карта «Тройка» открывает доступ к основным достопримечательностям города и является самым удобным и
                выгодным способом оплаты проезда на городском общественном транспорте Москвы.
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-3">
                <HowGet className={cn('xl:col-span-2', 'xl:max-w-[867px]')} />
                <Prices />
            </div>
        </div>
    )
}
