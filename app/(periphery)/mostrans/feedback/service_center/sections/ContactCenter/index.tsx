import { ComponentPropsWithoutRef } from 'react'

import { Tels } from '@/constants'
import { cn } from '@/utils'
import Link from '@/components/Link'

export default function ContactCenter(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className="h2">Контакт-центр «Московский транспорт»</h2>
            <p className={styles.text}>
                Оставить заявку с вопросом, требующим решения, а также получить консультацию о работе транспортного
                комплекса столицы можно по телефонам:{' '}
                <Link href={`tel:${Tels.mosmetroContactCenter}`}>{Tels.mosmetroContactCenter}</Link> (с городских
                телефонов){' '}
                <Link href={`tel:${Tels.mosmetroContactCenterMobile}`}>{Tels.mosmetroContactCenterMobile}</Link> (с
                мобильных).
            </p>
            <p className={styles.text}>Звонки принимают круглосуточно.</p>
        </div>
    )
}

const styles = {
    text: cn('mt-xs md:mt-base'),
}
