import { ComponentPropsWithoutRef, FC } from 'react'

import { cn } from '@/utils'
import Link, { ILinkProps } from '@/components/Link'

export interface SocialLinkProps extends ILinkProps {
    Icon: FC<ComponentPropsWithoutRef<'svg'>>
}

export default function SocialLink({ Icon, className, ...props }: SocialLinkProps) {
    return (
        <Link
            variant="unstyled"
            type="regular"
            className={cn(styles.base, className)}
            iconBefore={<Icon className={styles.icon} />}
            {...props}
        />
    )
}

const styles = {
    base: cn('p-[0.6rem]', 'bg-[#666F781A]', 'rounded-[0.4rem]'),
    icon: 'text-[2.4rem]',
}
