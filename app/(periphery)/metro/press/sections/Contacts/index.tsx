import { ComponentPropsWithoutRef } from 'react'

import { Mails, Tels } from '@/constants'
import { list } from './constants'
import { cn } from '@/utils'

import Link from '@/components/Link'
import List from '@/components/List'

export default function Contacts(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Контакты</h2>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h5 className="h5">Референт (для справок по запросам СМИ):</h5>
                    <Link href={`tel:${Tels.referent}`}>{Tels.referent}</Link>
                </div>
                <div className={styles.container}>
                    <h5 className="h5">
                        Единый телефон СТРОГО для обращений представителей СМИ по оперативным вопросам:
                    </h5>
                    <Link href={`tel:${Tels.forMediaAppeal}`}>{Tels.forMediaAppeal}</Link>
                </div>
                <div className={styles.container}>
                    <h5 className="h5">Телефоны Пресс-службы:</h5>
                    <Link href={`tel:${Tels.pressService1}`}>{Tels.pressService1}</Link>
                    <Link href={`tel:${Tels.pressService2}`}>{Tels.pressService2}</Link>
                    <Link href={`tel:${Tels.pressService3}`}>{Tels.pressService3}</Link>
                </div>
                <div className={styles.container}>
                    <h5 className="h5">Электронная почта для отправки запросов:</h5>
                    <Link href={`mailto:${Mails.infoMosmetro}`}>{Mails.infoMosmetro}</Link>
                    <Link href={`mailto:${Mails.pressMosmetro}`}>{Mails.pressMosmetro}</Link>
                </div>
                <div className={styles.container}>
                    <h5 className="h5">
                        По всем вопросам, не связанным со средствами массовой информации, необходимо обращаться
                        Контакт-центр «Московский транспорт»:
                    </h5>
                    <p>
                        <Link href={`tel:${Tels.mosmetroContactCenter}`}>{Tels.mosmetroContactCenter}</Link>
                        ,&nbsp;
                        <Link href={`tel:${Tels.mosmetroContactCenterMobile}`}>{Tels.mosmetroContactCenterMobile}</Link>
                        &nbsp;(Билайн, МТС, Мегафон, Tele2).
                    </p>
                    <p>
                        Отдел по связям со средствами массовой информации (пресс-служба) Московского метрополитена в
                        настоящее время решает следующие задачи:
                    </p>
                    <List {...list} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-lg'),
    container: cn('flex', 'flex-col', 'gap-sm sm:gap-base'),
}
