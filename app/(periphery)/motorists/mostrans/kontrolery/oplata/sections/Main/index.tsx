import { ComponentPropsWithoutRef } from 'react'

import { Docs, DocsDisplayNames } from '@/constants'
import { cn } from '@/utils'

import DownloadDoc from '@/components/DownloadDoc'

export default function Main({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={styles.container}>
                <p className={styles.text}>
                    ГКУ «Организатор перевозок» напоминает о необходимости своевременной оплаты штрафа за
                    административное правонарушение (в течение 60 дней со дня вступления Постановления по делу об
                    административном правонарушении в законную силу).
                </p>
                <p className={styles.text}>
                    Неуплата штрафа в течение 60 дней со дня вступления Постановления по делу об административном
                    правонарушении в законную силу, влечет наложение штрафа в двукратном размере (ст. 20.25 КоАП РФ), но
                    не менее одной тысячи рублей либо административный арест на срок до 15 суток, либо обязательные
                    работы на срок до 50 часов.
                </p>
                <p className={styles.text}>
                    В соответствии со статьей 10.1 Закона г. Москвы от 21.11.2007 N 45 (ред. от 31.05.2023) «Кодекса
                    города Москвы об административных правонарушениях» штраф&nbsp;
                    <b>
                        за безбилетный проезд пассажира составляет 2 000 (две тысячи) рублей, за неправомерное
                        использование льготной персонифицированной карты — 4 000 (четыре тысячи) рублей.
                    </b>
                </p>
            </div>

            <DownloadDoc
                src={Docs.receiptPayFine}
                className={styles.docs}
                name={DocsDisplayNames[Docs.receiptPayFine]}
            />
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col xl:flex-row', 'gap-x-[10%] gap-y-lg', 'max-w-[1200px]'),
    container: 'max-w-[755px]',
    text: 'mt-xs md:mt-base first:mt-0',
    docs: cn('h-fit', 'max-w-[32rem]'),
}
