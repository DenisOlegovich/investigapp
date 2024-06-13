import Price from '@/components/Price'
import ClockStrokeIcon from '@/components/icons/ClockStrokeIcon'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { prices } from './constants'

export default function Prices({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            {prices.map((props, idx) => (
                <Price
                    key={idx}
                    anatomy={{
                        title: 'text-[4rem] md:text-[5.2rem] lg:text-[6.2rem]',
                    }}
                    {...props}
                />
            ))}
            <div className={styles.attention}>
                <ClockStrokeIcon className={styles.attentionClock} />
                <p className={styles.attentionText}>
                    Срок действия проездных на 60 поездок — 45 дней с момента продажи.
                </p>
                <p className={styles.attentionText}>
                    Срок действия Единых проездных билетов без лимита поездок начинает исчисляться с момента первого
                    прохода, но не позднее 10 суток с момента продажи, включая день продажи.
                </p>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-[3.2rem] md:gap-[6.5rem]', 'md:max-w-[31rem]'),
    attention: cn('flex', 'flex-col', 'gap-xs'),
    attentionClock: cn('w-[4rem] md:w-[7.1rem]', 'h-[4rem] md:h-[7.1rem]', 'text-grey'),
    attentionText: 'text-[1.6rem]',
}
