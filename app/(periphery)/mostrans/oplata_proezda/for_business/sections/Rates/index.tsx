'use client'

import RadioGroup from '@/components/Forms/RadioGroup'
import Tariffs from '@/components/Tariffs'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef, useState } from 'react'
import { RatesKind, options, tariffs } from './constants'

const heading = 'Тарифы поездок'

export default function Rates({ className }: ComponentPropsWithoutRef<'div'>) {
    const [value, setValue] = useState<string | undefined>(RatesKind.without)

    return (
        <div className={cn(styles.wrapper, className)}>
            <h2 className="h2">{heading}</h2>
            <div className={styles.container}>
                <p className="h3">Билет «Единый»</p>
                <p>
                    Для проезда на метро, монорельсе, МЦК, МЦД зона «Центральная», наземном транспорте и внутреннем
                    водном транспорте на территории г. Москвы*
                </p>
                <RadioGroup
                    variant="button"
                    options={options}
                    value={value}
                    onChange={setValue}
                />
                {tariffs[value ?? ''].map((props, idx) => (
                    <Tariffs
                        key={idx}
                        anatomy={{
                            item: styles.tariff,
                        }}
                        {...props}
                    />
                ))}
                <p className={styles.subtitle}>
                    * Внутренний водный транспорт включен в тариф Единый проездной билет без лимита поездок на 90 дней и
                    365 дней
                </p>
            </div>
            <div className={styles.container}>
                <p className="h3">Билет «Единый»</p>
                <p>
                    Для проезда на метро, монорельсе, МЦК, МЦД зоны «Центральная», «Пригород», наземном транспорте и
                    внутреннем водном транспорте на территории г. Москвы*
                </p>
                {tariffs[RatesKind.withoutPeriphery].map((props, idx) => (
                    <Tariffs
                        key={idx}
                        anatomy={{
                            item: styles.tariff,
                        }}
                        {...props}
                    />
                ))}
                <p className={styles.subtitle}>
                    * Внутренний водный транспорт включен в тариф Единый проездной билет без лимита поездок на 90 дней и
                    365 дней
                </p>
            </div>
            <div className={styles.container}>
                <p className="h3">Билет «Кошелёк»</p>
                <p>
                    Для проезда в пределах зачисленной суммы по фиксированным тарифам. Поездка на метро, монорельсе,
                    МЦК, МЦД и внутреннем водном транспорте на территории г. Москвы.
                </p>
                {tariffs[RatesKind.wallet].map((props, idx) => (
                    <Tariffs
                        key={idx}
                        anatomy={{
                            item: styles.tariff,
                        }}
                        {...props}
                    />
                ))}
                <p className={styles.subtitle}>Карту можно пополнить на сумму до 10 000 рублей.</p>
            </div>
            <div className={styles.container}>
                <p className="h3">
                    Транспортные маршруты регулярных перевозок внутренним водным транспортом на территории г. Москвы
                </p>
                {tariffs[RatesKind.waterTransport].map((props, idx) => (
                    <Tariffs
                        key={idx}
                        anatomy={{
                            item: styles.tariff,
                        }}
                        {...props}
                    />
                ))}
            </div>
            <div className={styles.container}>
                <p className="h3">Проездные билеты для проезда на наземном транспорте</p>
                {tariffs[RatesKind.groundTransport].map((props, idx) => (
                    <Tariffs
                        key={idx}
                        anatomy={{
                            item: styles.tariff,
                        }}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
    container: cn('flex', 'flex-col', 'gap-lg'),
    subtitle: cn('text-[1.4rem] text-grey-dark md:text-[1.6rem]'),
    tariff: 'md:max-w-[14rem]',
}
