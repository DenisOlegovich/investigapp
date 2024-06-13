import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import Link from '@/components/Link'

interface InternalNavMenuItem {
    title: string
    href: string
}

export interface InternalNavbarProps extends ComponentPropsWithoutRef<'div'> {
    /** Обязательный, общий заголовок блока с навигацией по группе страниц */
    title: string
    navMenu: InternalNavMenuItem[]
    /** Опциональный, для исключения из списка для навигации по группе страниц текущей страницы */
    excludedPageHref?: string
}

export default function InternalNavbar({ title, navMenu, excludedPageHref, ...props }: InternalNavbarProps) {
    const activeNavMenu = navMenu.filter(({ href }) => href !== excludedPageHref)

    return (
        <div {...props}>
            <h5 className={styles.title}>{title}</h5>
            {activeNavMenu.map(({ href, title: linkTitle }, index) => (
                <Link
                    key={index}
                    href={href}
                    className={styles.link}
                >
                    {linkTitle}
                </Link>
            ))}
        </div>
    )
}

const styles = {
    title: 'body-s_bold sm:h5',
    link: cn('block', 'mt-xs', 'text-base'),
}
