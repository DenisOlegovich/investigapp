import { ComponentPropsWithoutRef } from 'react'

import List from '@/components/List'
import { mccRules } from './constants'

export default function MCCRules(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className="h2 mb-xl">
                Правила проезда, провоза ручной клади и нахождения пассажиров на объектах Московского центрального
                кольца
            </h2>
            <p className="mb-[1.2rem] md:mb-[1.8rem]">
                Настоящие Правила и их выполнение направлены на обеспечение безопасности перевозок, улучшение качества
                обслуживания пассажиров и обязательны к безусловному выполнению всеми лицами, находящимися на объектах
                Московского центрального кольца.
            </p>
            <List {...mccRules} />
        </div>
    )
}
