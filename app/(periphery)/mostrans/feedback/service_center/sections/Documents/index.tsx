import { ComponentPropsWithoutRef } from 'react'

import { docs } from './constants'
import { cn } from '@/utils'
import DownloadDoc from '@/components/DownloadDoc'

export default function Documents({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            {docs.map((doc, idx) => (
                <DownloadDoc
                    key={idx}
                    {...doc}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'gap-2xl md:gap-[6.5rem]'),
}
