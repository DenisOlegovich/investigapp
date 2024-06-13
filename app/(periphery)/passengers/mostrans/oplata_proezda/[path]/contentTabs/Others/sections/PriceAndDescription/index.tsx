import { turniket } from '@/Images'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Price from '@/components/Price'
import { ExternalLinks, Tels } from '@/constants'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { price } from './constants'

export default function PriceAdnDescription({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(className)}>
            <Price {...price} />
            <Image
                img={turniket}
                alt="terminal"
                className="mt-[6.5rem]"
            />
            <p className="mt-xl">
                Для оплаты проезда кольцом, браслетом или брелоком поднесите его с считывателю на терминале.
                <br />
                <br />
                При неисправностях и случаях брака с кольцом, браслетом, брелоком и т.д. напишите в чат-бот&ensp;
                <Link
                    type="external"
                    href={ExternalLinks.chatBot}
                >
                    Александра
                </Link>
                или позвоните с мобильного по номеру&ensp;
                <Link
                    variant="simple_black"
                    href={`tel:${Tels.mosmetroContactCenterMobile}`}
                    className="h4"
                >
                    {Tels.mosmetroContactCenterMobile}
                </Link>
            </p>
        </div>
    )
}
