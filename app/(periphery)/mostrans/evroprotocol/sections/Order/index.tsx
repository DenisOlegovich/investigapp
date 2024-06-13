import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { list } from './constants'

import List from '@/components/List'

export default function Order(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={styles.heading}>
                Последовательность действий участников ДТП при оформлении происшествия по схеме Европротокола
            </h2>
            <List
                className={styles.list}
                {...list}
            />
        </div>
    )
}

const styles = {
    heading: cn('h2', 'mb-xl'),
    list: 'mt-xl',
}
