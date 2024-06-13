import Link from '@/components/Link'
import TextAlert from '@/components/TextAlert'
import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { alert, heading } from './constants'

export default function PaymentByRing({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-xl')}>{heading}</h2>
            <p>
                Оплачивать проезд любого вида транспорта можно кольцом PayRing, силиконовым браслетом или брелоком, они
                заменяют карту «Тройка» — имеют такой же функционал и процесс пополнения.
                <br />
                <br />
                Купить кольцо, браслет или брелок можно на&ensp;
                <Link
                    type="external"
                    href={ExternalLinks.liveCommunicationStand}
                >
                    стойках «Живое общение»
                </Link>
                .
            </p>
            <TextAlert
                {...alert}
                className="mt-xl"
            />
        </div>
    )
}
