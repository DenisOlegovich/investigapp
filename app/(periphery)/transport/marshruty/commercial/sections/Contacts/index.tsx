import { ComponentPropsWithoutRef, Fragment } from 'react'

import { contacts } from './constants'
import { cn } from '@/utils'
import Link from '@/components/Link'

import { styles } from '../../styles'

export default function Contacts({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Контакты</h2>
            {contacts.map((contact, idx) => (
                <div
                    key={idx}
                    className="mt-xl"
                >
                    <h4 className="h4">{contact.title}</h4>
                    <p className="mt-lg">
                        Общий:&ensp;<Link href={`tel:${contact.general}`}>{contact.general}</Link>
                    </p>
                    <div className={styles.text}>
                        Отдел кадров:&ensp;
                        {contact.hr.map((hr, idx) => (
                            <Fragment key={idx}>
                                <Link href={`tel:${hr}`}>{hr}</Link>
                                {idx < contact.hr.length - 1 && ', '}
                            </Fragment>
                        ))}
                    </div>
                    <p className={styles.text}>
                        Забытые вещи:&ensp;<Link href={`tel:${contact.lostItems}`}>{contact.lostItems}</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}
