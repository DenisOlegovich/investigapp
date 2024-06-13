import { CardProps } from '../types'
import { cn } from '@/utils'
import Link from '@/components/Link'

export default function CardLink({
    href = '#',
    isExternal,
    title,
    subtitle,
    body,
    extra,
    anatomy: {
        container: containerCustomProps = '',
        title: titleCustomProps = '',
        subtitle: subtitleCustomProps = '',
        body: bodyCustomProps = '',
        extra: extraCustomProps = '',
        link: linkCustomProps = '',
    } = {},
    ...restProps
}: Omit<CardProps<'link'>, 'type'>) {
    const { className = '', ...otherProps } = restProps

    return (
        <article
            className={cn(styles.container, className, containerCustomProps)}
            {...otherProps}
        >
            {title && <h2 className={cn('h3 md:body_bold', titleCustomProps)}>{title}</h2>}

            {subtitle && <h3 className={cn('body-s', subtitleCustomProps)}>{subtitle}</h3>}

            {body && <div className={cn(styles.body, bodyCustomProps)}>{body}</div>}

            {extra && <div className={extraCustomProps}>{extra}</div>}

            <Link
                href={href}
                target={isExternal ? '_blank' : '_self'}
                className={cn(styles.link, linkCustomProps)}
            />
        </article>
    )
}

const styles = {
    container: cn(
        'relative flex flex-col items-start gap-[1.2rem] shrink-0',
        'text-white',
        'p-[1.8rem] md:p-[2rem]',
        'rounded-2xl',
        'shadow-md',
        'transition-transform duration-300 hover:shadow-lg active:shadow-sm'
    ),
    body: cn('flex flex-col items-start gap-[1.2rem] shrink-0', 'body_s'),
    link: 'absolute top-0 left-0 right-0 bottom-0 z-1',
}
