import { subsidyDocsList, typesFormsDocs } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Link from '@/components/Link'

import { styles } from '../../styles'

export default function Operators() {
    return (
        <>
            <h2 className={cn('mt-2xl md:mt-3xl', styles.title)}>Операторам технического осмотра</h2>

            <p className={cn('mb-xs my:mb-base')}>
                При сдаче документов на получение субсидии необходимо предоставить в канцелярию Департамента следующие
                документы:
            </p>
            <List {...subsidyDocsList} />

            <h4 className={cn('h4', 'mb-lg', styles.text)}>Типовые формы документов:</h4>
            {typesFormsDocs.map((link, idx) => (
                <Link
                    href={link.href}
                    variant="default"
                    type="external"
                    key={idx}
                    className={cn('inline-block', styles.links)}
                >
                    {link.text}
                </Link>
            ))}
        </>
    )
}
