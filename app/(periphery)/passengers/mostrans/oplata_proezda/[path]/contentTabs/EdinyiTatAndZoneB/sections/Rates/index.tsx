'use client'

import { ComponentPropsWithoutRef, useState } from 'react'

import { RatesKind, alert, heading, options, tariffs } from './constants'
import { cn } from '@/utils'
import RadioGroup from '@/components/Forms/RadioGroup'
import Tariffs from '@/components/Tariffs'
import TextAlert from '@/components/TextAlert'

export default function Rates({ className }: ComponentPropsWithoutRef<'div'>) {
    const [value, setValue] = useState<string | undefined>(RatesKind.without)

    return (
        <div className={cn(styles.wrapper, className)}>
            <h3 className="h3">{heading}</h3>
            <RadioGroup
                variant="button"
                options={options}
                value={value}
                onChange={setValue}
            />
            {tariffs[value ?? ''].map((props, idx) => (
                <Tariffs
                    key={idx}
                    {...props}
                />
            ))}
            <TextAlert {...alert} />
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-lg md:gap-xl'),
}
