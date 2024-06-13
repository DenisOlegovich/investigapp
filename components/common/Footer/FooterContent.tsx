import { cn } from '@/utils'

import Link from '@/components/Link'
import SocialLink from '@/components/SocialLink'
import GlassesIcon from '@/components/icons/GlassesIcon'
import { Tels } from '@/constants'
import { linksFirstColumn, linksSecondColumn, mostransSocialLinks } from './constants'

export default function FooterContent() {
    return (
        <div className={cn(styles.stack, styles.wrapper)}>
            <div className={cn(styles.stack, styles.spacing, 'flex-col md:flex-row')}>
                <div className={cn(styles.stack, styles.spacing)}>
                    <div className={cn(styles.stackVertical, 'gap-[0.9rem] lg:gap-[1.2rem]')}>
                        {linksFirstColumn.map(({ title, href }, idx) => (
                            <Link
                                key={idx}
                                href={href}
                                variant="simple_black"
                                className={cn('body-xs')}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div className={cn(styles.stackVertical, 'gap-[0.9rem] lg:gap-[1.2rem]', 'items-start')}>
                        {linksSecondColumn.map(({ title, href }, idx) => (
                            <Link
                                key={idx}
                                href={href}
                                variant="simple_black"
                                className={cn('body-xs')}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className={cn(
                        styles.stack,
                        'gap-[0.6rem]',
                        'h-[2rem]',
                        'hidden md:flex',
                        'items-center',
                        'h-[6rem]'
                    )}
                >
                    <GlassesIcon className={cn('text-[6rem]')} />
                    <Link
                        variant="pseudo"
                        href="/"
                        className={cn('body-xs')}
                    >
                        Версия для слабовидящих
                    </Link>
                </div>
            </div>
            <div
                className={cn(
                    styles.stack,
                    styles.spacing,
                    'flex-col md:flex-row-reverse lg:flex-col-reverse xl:flex-row',
                    'justify-end'
                )}
            >
                <div className={cn(styles.stackVertical, 'gap-[0.9rem] lg:gap-[1.2rem]')}>
                    <p className={cn('body-xs')}>Контакт-центр «Московский транспорт»</p>
                    <Link
                        href={`tel:${Tels.mosmetroContactCenter}`}
                        variant="simple_black"
                        className={cn('body')}
                    >
                        {Tels.mosmetroContactCenter}
                    </Link>
                    <div className={cn(styles.stack, 'gap-[0.8rem]', 'items-center')}>
                        <Link
                            variant="simple_black"
                            href={`tel:${Tels.mosmetroContactCenterMobile}`}
                            className={cn('body')}
                        >
                            {Tels.mosmetroContactCenterMobile}
                        </Link>
                        <p className={cn('body-xs')}>с мобильного телефона</p>
                    </div>
                </div>
                <div>
                    <p className={cn('body-xs mb-[0.6rem]')}>Мы в соц. сетях</p>
                    <div className={cn('flex', 'gap-[1.2rem]')}>
                        {mostransSocialLinks.map(({ ...props }, idx) => (
                            <SocialLink
                                key={idx}
                                {...props}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    stack: cn('flex'),
    stackVertical: cn('flex flex-col items-start'),
    spacing: cn('gap-[2rem] md:gap-xl xl:gap-2xl'),
    wrapper: cn(
        'pt-[1.8rem] md:pt-[2.5rem] xl:pt-[2.4rem]',
        'pb-0 md:pb-[4rem] xl:pb-[9.6rem]',
        'flex-col lg:flex-row',
        'gap-[2rem]',
        'justify-between',
        'items-start'
    ),
}
