import { ComponentPropsWithoutRef } from 'react'

import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import List from '@/components/List'
import { tasksToHelpBusinessesAndCitizens } from '../../constants'
import H1 from '@/components/common/typography/H1'
import Lead from '@/components/common/typography/Lead'

export default function Main({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <ContentLimiter>
                <div className={styles.container}>
                    <H1>{PagesDisplayNames[Pages.helpingBusinesses]}</H1>
                    <Lead
                        gutter={false}
                        className={cn('mb-[12px] md:mb-[14px]')}
                    >
                        Узнайте, какими мерами поддержки можно воспользоваться уже сейчас, и куда для этого нужно
                        обратиться. Мы будем оперативно обновлять эту страницу.
                    </Lead>
                    <Lead
                        gutter={false}
                        className={cn('mb-[12px] md:mb-[14px]')}
                    >
                        Главная задача — снизить экономический урон от вводимых ограничений:
                    </Lead>
                    <List {...tasksToHelpBusinessesAndCitizens} />
                </div>
            </ContentLimiter>
        </div>
    )
}

const styles = {
    wrapper: cn('bg-gradient-to-r', 'from-[#2b2c31] to-[#666e7b]'),
    container: cn('pb-2xl md:pb-3xl', 'text-white', 'max-w-[1089px]'),
}
