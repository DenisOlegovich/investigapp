import { ComponentPropsWithoutRef } from 'react'

import { Pages } from '@/constants'
import { cn } from '@/utils'

import Button from '@/components/Forms/Button'

export default function Suggestions({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.container}>
                <h3 className="h3">Предложения по запуску МСД</h3>
                <p className="text-[1.6rem]">
                    Предложения по запуску Московского скоростного диаметра вы можете оставить заполнив форму
                </p>
            </div>
            <Button
                as="link"
                type="button"
                variant="danger"
                className={styles.button}
                href={Pages.msdOffers}
            >
                Заполнить
            </Button>
        </div>
    )
}

const styles = {
    wrapper: cn('p-xl', 'bg-grey-extra-light', 'rounded-[0.8rem]', 'flex', 'flex-col', 'gap-xl'),
    container: cn('flex', 'flex-col', 'gap-lg', 'max-w-[50rem]'),
    button: cn('md:self-start', 'min-w-[27.2rem]'),
}
