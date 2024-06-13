import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Link from '@/components/Link'
import { websiteTickets } from './constants'

export default function WebsiteTickets(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h5 className={cn('body-s_bold md:h5', 'mb-sm')}>
                Также можно приобрести проездные билеты на сайте{' '}
                <Link
                    href={ExternalLinks.zakupki}
                    type="new-window"
                >
                    zakupki.mos.ru
                </Link>
            </h5>
            <List {...websiteTickets} />
        </div>
    )
}
