import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { ExternalLinks } from '@/constants'

import Link from '@/components/Link'

export default function Links({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.container}>
                <p className="factorid">!</p>
                <p>
                    Официальный веб-сайт проекта и<br />
                    самая актуальная информация:
                    <br />
                    <Link
                        type="external"
                        href={ExternalLinks.msd}
                    >
                        msd.mos.ru
                    </Link>
                    .
                </p>
            </div>
            <div className={styles.container}>
                <p className="factorid">!</p>
                <p>
                    Проверить начисления по оплате <br />
                    проезда можно&nbsp;
                    <Link href="#form-msd">тут</Link>.
                </p>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn(
        'flex',
        'flex-col sm:flex-row md:flex-col',
        'gap-2xl sm:gap-lg md:gap-[6.5rem]',
        'sm:justify-between md:justify-start'
    ),
    container: cn('flex', 'gap-xs', 'text-[1.6rem]'),
}
