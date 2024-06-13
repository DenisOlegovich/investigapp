import { troika2x } from '@/Images'
import Card from '@/components/Card'
import Image from '@/components/Image'
import Price from '@/components/Price'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import Cards from '../../../../components/Cards'
import { cards, prices } from './constants'

export default function PaymentCard({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <Card
                type="box"
                title="Пополнить карту «Тройка»"
                className={styles.cardTroika}
                body={
                    <Image
                        img={troika2x}
                        alt="troika"
                        className={cn('h-full', 'w-auto')}
                    />
                }
                anatomy={{
                    body: styles.cardTroikaBody,
                }}
            />

            <div>
                <Cards
                    cards={cards}
                    className={cn('w-[22.7rem]')}
                />
                <p className="mt-xs">
                    На карту «Тройка» можно записать многие виды проездных билетов, в том числе большинство проездных
                    билетов на пригородные электрички.
                </p>
            </div>

            {prices.map((props, idx) => (
                <Price
                    key={idx}
                    {...props}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('body-s', 'flex', 'flex-col', 'gap-sm md:gap-3xl'),
    cardTroika: cn(
        'bg-grey-extra-light',
        'text-black',
        'shadow-none',
        'h-[17.2rem] md:h-[19.2rem]',
        'overflow-hidden',
        'hover:shadow-none'
    ),
    cardTroikaBody: cn(
        'absolute',
        'left-0',
        'right-[-10%] sm:right-[-4%] md:right-[-17%] lg:right-0',
        'bottom-[-4rem]',
        'top-0',
        'items-end lg:items-center'
    ),
}
