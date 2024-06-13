import { ComponentPropsWithoutRef } from 'react'

import Link, { ILinkProps } from '@/components/Link'
import DocIcon from '@/components/icons/DocIcon'
import { cn, getExt, resolvedSrc } from '@/utils'

type DownloadDocAnatomy = 'formatContainer' | 'formatIcon' | 'formatText' | 'linkContainer'

export interface DownloadDocProps extends ComponentPropsWithoutRef<'div'> {
    src?: string
    name?: string
    size?: string
    anatomy?: Partial<Record<DownloadDocAnatomy, string>> & { link?: Omit<ILinkProps, 'href'> }
}

export default function DownloadDoc({
    src,
    name,
    size,
    className,
    anatomy: {
        formatContainer: formatContainerClassName,
        formatIcon: formatIconClassName,
        formatText: formatTextClassName,
        linkContainer: linkContainerClassName,
        link: { className: linkClassName = '', ...linkProps } = {},
    } = {},
}: DownloadDocProps) {
    const resSrc = resolvedSrc(src)
    const ext = getExt(resSrc ?? '')

    return (
        <div
            className={cn(styles.wrapper, className, {
                'opacity-[0.6]': !resSrc,
            })}
        >
            <div className={cn(styles.formatContainer, formatContainerClassName)}>
                <DocIcon
                    className={cn(
                        styles.formatIcon,
                        {
                            'text-red': ext?.includes('pdf'),
                            'text-blue': ext?.includes('doc'),
                            'text-carsharing-orange': ext?.includes('png'),
                            'text-troika': ext?.includes('jpg' || 'jpeg'),
                        },
                        formatIconClassName
                    )}
                />
                <p className={cn(styles.formatText, formatTextClassName)}>{ext}</p>
            </div>
            <div className={cn(styles.linkContainer, linkContainerClassName)}>
                <Link
                    href={resSrc ?? '#'}
                    target={resSrc ? '_blank' : undefined}
                    // download={Boolean(resSrc)}
                    className={cn(styles.link, linkClassName)}
                    variant="simple_gray"
                    isDisabled={!resSrc}
                    {...linkProps}
                >
                    {name || resSrc}
                </Link>
                {size && <p className={cn('signature', 'mt-[0.6rem]')}>{size}</p>}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'gap-[1.2rem]', 'relative'),
    formatContainer: cn('relative', 'w-fit', 'h-fit'),
    formatIcon: cn('text-grey-light', 'w-[2.6rem] md:w-[3.8rem]', 'h-auto'),
    formatText: cn(
        'text-white',
        'absolute',
        'inset-x-0',
        'bottom-[0.6rem]',
        'text-[1rem] md:text-[1.4rem]',
        'text-center',
        'font-medium'
    ),
    linkContainer: cn('flex', 'flex-col', 'gap-[0.6rem]'),
    link: 'before:block before:absolute before:inset-0',
}
