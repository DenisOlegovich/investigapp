import Link, { ILinkProps } from '@/components/Link'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef, FC } from 'react'

export interface MobileAppLinkProps extends Omit<ILinkProps, 'type' | 'variant'> {
    IconDefault: FC<ComponentPropsWithoutRef<'svg'>>
    IconHover: FC<ComponentPropsWithoutRef<'svg'>>
    variant?: 'stroke' | 'fill'
    label: string
}

export default function MobileAppLink({
    className,
    variant = 'stroke',
    IconDefault,
    IconHover,
    label,
    ...props
}: MobileAppLinkProps) {
    return (
        <Link
            className={cn(styles.base, className, {
                [styles.linkFill]: variant === 'fill',
            })}
            variant="unstyled"
            type="regular"
            iconBefore={
                <>
                    <IconDefault className={styles.iconDefault} />
                    <IconHover className={styles.iconHover} />
                </>
            }
            {...props}
        >
            {label}
        </Link>
    )
}

const styles = {
    base: cn(
        'group',
        'flex items-center place-content-center',
        'gap-[0.6rem]',
        'text-black md:text-grey-dark/[0.8] hover:text-white',
        'bg-[#666f781a]',
        'hover:bg-black hover:opacity-80',
        'active:opacity-100',
        'p-[0.7rem]',
        'max-w-[27.2rem] sm:max-w-[13.5rem]',
        'w-full',
        'h-[4.8rem] sm:h-auto',
        'rounded-[0.8rem]'
    ),
    linkFill: cn('bg-black/[0.3]', 'text-white md:text-white'),
    iconDefault: 'group-hover:hidden size-[2.4rem] md:size-[1.8rem]',
    iconHover: 'hidden group-hover:block size-[2.4rem] md:size-[1.8rem]',
}
