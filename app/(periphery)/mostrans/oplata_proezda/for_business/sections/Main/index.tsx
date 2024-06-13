import CardWithHandIcon from '@/components/icons/CardWithHandIcon'
import CoinIcon from '@/components/icons/CoinIcon'
import TransportCardsIcon from '@/components/icons/TransportCardsIcon'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const icons = [
    { Icon: CardWithHandIcon, title: 'Безналичная оплата проезда' },
    { Icon: TransportCardsIcon, title: 'Приобретение проездных билетов и транспортных карт «Тройка»' },
    { Icon: CoinIcon, title: 'Контроль затрат на проезд' },
]

export default function Main({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <p className={cn('lead', 'text-grey-dark')}>
                У представителей организаций, предприятий и индивидуальных предпринимателей есть возможность
                организовать удобную оплату проезда в городском транспорте для своих сотрудников, повышая уровень
                лояльности и имиджа работодателя, исключая необходимость постоянного обращения в билетные кассы.
            </p>
            <p>
                Проезд осуществляется по тарифам Единого проездного билета с возможностью записи на транспортную карту
                «Тройка» или просто использование баланса «Тройки» в тарифном плане Билет «Кошелёк» для оплаты городских
                сервисов.
            </p>
            <div className={styles.iconContainer}>
                {icons.map(({ Icon, title }, idx) => (
                    <div
                        key={idx}
                        className={styles.icon}
                    >
                        <Icon className={cn('text-[#9FA3AD]', 'w-[6rem] md:w-[8.7rem]', 'h-auto')} />
                        <p className="text-[1.4rem] md:text-[1.6rem]">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl md:gap-3xl'),
    iconContainer: cn('flex', 'justify-between', 'gap-sm', 'flex-wrap md:flex-nowrap'),
    icon: cn('flex', 'flex-col', 'gap-[1.6rem]', 'max-w-[13.5rem] md:max-w-[20rem]'),
}
