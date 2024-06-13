import { cn } from '@/utils'
import { DefaultComponentProps } from '@/types'

export interface ContentLimiterProps extends DefaultComponentProps {}

export default function ContentLimiter({ children, className, ...props }: ContentLimiterProps) {
    return (
        <div
            className={cn('max-w-[1440px] mx-auto', 'px-sm sm:px-2xl lg:px-[6.4rem] w-full', className)}
            {...props}
        >
            {children}
        </div>
    )
}
