import { list } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function RequirementsSection() {
    return (
        <div className={cn('body-s md:body', 'mt-2xl md:mt-3xl', 'max-w-[755px]')}>
            <h2 className={styles.title}>Основные требования к нахождению на месте выступления:</h2>
            <p>2-часовой слот = время нахождения на точке: время подготовки, выступления и сбора после выступления.</p>
            <div>
                <h4 className={cn('h4', 'mt-sm xl:mt-lg mb-xs md:mb-base', styles.h4)}>
                    В течение всего времени нахождения на месте выступления:
                </h4>
                <List {...list} />
            </div>
        </div>
    )
}
