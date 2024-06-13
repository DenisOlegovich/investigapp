import { turniket } from '@/Images'
import Image from '@/components/Image'
import Price from '@/components/Price'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { price } from './constants'

export default function Prices({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <Price
                className="max-w-[21.3rem] md:max-w-none"
                {...price}
            />
            <Image
                img={turniket}
                alt="terminal"
                className={cn('hidden md:block', 'mt-[6.5rem]')}
            />
        </div>
    )
}
