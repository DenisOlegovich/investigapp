import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import Link from '@/components/Link'

export default function DigitalReception(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={styles.heading}>Электронная приемная</h2>
            <p>
                Подать обращение по&nbsp;вопросам работы транспортного комплекса города Москвы можно через форму{' '}
                <Link
                    type="external"
                    href={ExternalLinks.appealDecision}
                >
                    «Обращения&nbsp;граждан»
                </Link>{' '}
                на&nbsp;нашем сайте, а&nbsp;также в&nbsp;личных кабинетах приложений{' '}
                <Link
                    type="external"
                    href={ExternalLinks.moscowTransportApp}
                >
                    «Московский&nbsp;транспорт»
                </Link>{' '}
                и&nbsp;
                <Link
                    type="external"
                    href={ExternalLinks.mosmetroApp}
                >
                    «Метро&nbsp;Москвы»
                </Link>
            </p>
        </div>
    )
}

const styles = {
    heading: cn('h2', 'mb-lg md:mb-xl'),
}
