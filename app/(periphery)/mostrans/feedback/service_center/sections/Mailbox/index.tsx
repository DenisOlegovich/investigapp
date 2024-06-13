import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export default function Mailbox(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className="h2">Ящик для корреспонденции:</h2>
            <p className={styles.text}>125993, ГСП-3, г. Москва, 1-й Красногвардейский пр., д. 21, стр.1.</p>
            <p className={styles.text}>Башня ОКО, «Служба одного окна», 1-й этаж.</p>
        </div>
    )
}

const styles = {
    text: cn('mt-xs md:mt-base'),
}
