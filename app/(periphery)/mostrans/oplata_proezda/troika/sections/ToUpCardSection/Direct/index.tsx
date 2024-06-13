import { ComponentPropsWithoutRef } from 'react'

import { Pages } from '@/constants'
import { list } from './constants'
import { Anchors } from '@/constants/anchors'
import { cn } from '@/utils'
import TextAlert from '@/components/TextAlert'
import Link from '@/components/Link'
import List from '@/components/List'

import { styles } from '../../../styles'

export default function Direct({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'xl:max-w-[867px]', className)}>
            <h4 className={styles.h4}>Прямое пополнение</h4>
            <p>
                Пополнить билет «Кошелек» карты «Тройка» можно в кассах и автоматах по продаже билетов ГУП «Московский
                метрополитен», автоматизированных киосках ГУП «Мосгортранс», в железнодорожных кассах пригородного
                сообщения, отмеченных специальным стикером, кассах «Аэроэкспресс», через агентскую сеть терминалов
                партнеров:
            </p>
            <p className={styles.text}>
                АО «Центральная ППК», АО «Московско-Тверская ППК», ООО «Аэроэкспресс», «Элекснет» и другие.
            </p>
            <p className={styles.text}>Возможная сумма оплаты билета от 1 до 10000 рублей.</p>
            <p className={styles.text}>Комиссия за пополнение не взимается.</p>
            <List
                className="mt-xs md:mt-base"
                {...list}
            />
            <TextAlert
                description={
                    <>
                        Все пункты прямого пополнения карты «Тройка» вы найдете на&ensp;
                        <Link
                            href={`${Pages.oplataProezda}/troyka#${Anchors.topUpLocations}`}
                            variant="default"
                            type="external"
                        >
                            карте
                        </Link>
                    </>
                }
                className="mt-xl"
            />
        </div>
    )
}
