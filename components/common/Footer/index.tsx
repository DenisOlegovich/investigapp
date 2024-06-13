import ContentLimiter from '@/components/common/ContentLimiter'
import FooterPattern from '@/components/icons/FooterPattern'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import FooterContent from './FooterContent'

interface FooterProps extends ComponentPropsWithoutRef<'div'> {
    type?: 'main' | 'default'
}

export default function Footer({ type = 'default', className, ...props }: FooterProps) {
    return (
        <footer
            className={cn(styles.footer, className)}
            {...props}
        >
            <ContentLimiter className="relative z-[1]">
                <FooterContent />
            </ContentLimiter>

            <FooterPattern
                className={cn(styles.pattern, {
                    'block md:hidden': type === 'default',
                })}
            />
        </footer>
    )
}

const styles = {
    footer: cn('relative', 'overflow-hidden', 'bg-grey-extra-light', 'pb-[8.1rem]'),
    pattern: cn('absolute', 'bottom-[-16rem] md:bottom-0', 'z-0', 'text-white', 'w-full', 'h-full'),
}
