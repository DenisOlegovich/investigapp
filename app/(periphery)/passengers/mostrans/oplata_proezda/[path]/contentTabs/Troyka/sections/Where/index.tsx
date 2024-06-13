import List from '@/components/List'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { heading, typeOfCardsList, whereBuyList } from './constants'

export default function Where({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h3 className={styles.title}>{heading}</h3>
            <div className={styles.wrapper}>
                <List {...whereBuyList} />

                <h4 className="h4">Карта «Тройка» в виде брелоков, браслетов, колец и т. п.</h4>

                <List {...typeOfCardsList} />
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xs md:gap-base'),
    title: cn('h3', 'mb-sm md:mb-xl'),
}
