import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { docs } from './constant'

import DownloadDoc from '@/components/DownloadDoc'

export default function Files({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <h5 className="h5">Прикрепленные файлы:</h5>
            {docs.map((doc, idx) => (
                <DownloadDoc
                    key={idx}
                    className="w-fit"
                    {...doc}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'gap-sm md:gap-lg'),
}
