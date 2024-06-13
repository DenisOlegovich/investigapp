import { ComponentProps } from 'react'

import { cn } from '@/utils'

const defaultNoDataDescription = 'Данные не найдены'

interface NoDataProps extends ComponentProps<'div'> {
    description?: string
}

export default function NoData({ description: defaultNoDataTitle, className, ...restProps }: NoDataProps) {
    return (
        <div
            className={className}
            {...restProps}
        >
            <p className={cn('text-red-error')}>{defaultNoDataDescription}</p>
        </div>
    )
}
