import Link from '@/components/Link'
import List from '@/components/List'
import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { actionList, neededDocList, orderingWithDelivery } from './constnats'

const heading = 'Как получить проездные билеты и транспортные карты «Тройка»'

export default function HowGetTickets({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <h2 className="h2">{heading}</h2>
            <p>
                Есть два способа получить проездные билеты: самовывозом, заключив прямой договор с ГУП «Московский
                метрополитен» или доставкой, при оформлении через сайт Агента.
            </p>
            <div className={styles.container}>
                <p className="h3">Оформление прямого договора с ГУП «Московский метрополитен»</p>

                <div className={cn('flex', 'flex-col', 'gap-[1.2rem] md:gap-[2.4rem]')}>
                    <p>Как заключить договор по выбранному тарифу и получить проездные билеты и транспортные карты?</p>
                    <List {...actionList} />
                </div>

                <div className={cn('flex', 'flex-col', 'gap-[1.2rem] md:gap-[1.8rem]')}>
                    <p>Для получения проездных билетов необходимо наличие следующих документов:</p>
                    <List {...neededDocList} />
                </div>
            </div>
            <div className={styles.container}>
                <p className="h3">Онлайн-оформление с доставкой</p>
                <List {...orderingWithDelivery} />

                <p>
                    Когда действие проездного билета закончится, просто оформите заказ на сайте и оплатите его, а ваши
                    сотрудники сами запишут билеты через&ensp;
                    <Link
                        type="external"
                        href={ExternalLinks.metroApp}
                    >
                        приложение
                    </Link>
                    &ensp; или терминалы банка МКБ.
                </p>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
    container: cn('flex', 'flex-col', 'gap-lg'),
}
