import { DefaultComponentProps } from '@/types'
import { cn } from '@/utils'

interface LayoutContentProps extends DefaultComponentProps {}

export default function LayoutContent({ className, children, ...props }: LayoutContentProps) {
    return (
        <div
            className={cn('relative z-0', 'grid grid-rows-[auto_1fr_auto]', 'min-h-[100svh]', className)}
            {...props}
        >
            {children}
        </div>
    )
}
