import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants'
import { imgs } from './constants'

import { cn } from '@/utils'

import Image from '@/components/Image'
import Link from '@/components/Link'

// TODO: уточнить насчет ссылки ExternalLinks.autoins

export default function Order(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={styles.heading}>Порядок оформления Европротокола</h2>
            <p className={styles.text}>
                При оформлении полиса ОСАГО страховая компания выдает вам бланки извещения о ДТП. Извещение о ДТП и есть
                Европротокол, который необходимо заполнять в случае самостоятельного оформления ДТП без участия
                сотрудников ГИБДД.
            </p>
            <p className={styles.text}>
                В случае необходимости дополнительные бланки Извещения о ДТП вы можете получить в своей страховой
                компании, распечатать с&nbsp;
                <Link
                    type="external"
                    href={ExternalLinks.dt}
                >
                    сайта
                </Link>
                &nbsp;Департамента транспорта и развития дорожно-транспортной инфраструктуры города Москвы или с&nbsp;
                <Link
                    type="external"
                    href={ExternalLinks.autoins}
                >
                    сайта
                </Link>
                &nbsp;Российского союза автостраховщиков!
            </p>
            <p className={styles.text}>
                Каждый экземпляр Извещения о ДТП состоит из двух скрепленных листов: первого и самокопира (второго
                листа).
            </p>
            <p className={styles.text}>
                Лицевая сторона первого листа совместно заполняется и подписывается обоими участниками ДТП.
            </p>
            <p className={styles.text}>
                После заполнения лицевой стороны Извещение разъединяется — каждый из участников ДТП получает по одному
                экземпляру заполненного Извещения.
            </p>
            <p className={styles.text}>
                На обратной стороне Извещения о ДТП имеется бланк декларации. Оба участника ДТП обязаны самостоятельно
                заполнить обратные стороны Извещения. Эти данные позволяют получить дополнительную информацию,
                необходимую для разбирательства страхового случая.
            </p>
            <p className={styles.text}>
                Извещение считается заполненным, если экземпляры Извещения разъединены, заполнены с обеих сторон и
                подписаны участниками ДТП.
            </p>
            {imgs.map(({ href, ...props }, idx) =>
                href ? (
                    <div
                        key={idx}
                        className={cn(styles.containerLink, styles.img)}
                    >
                        <Image {...props} />
                        <Link
                            href={href}
                            target="_blank"
                            className={styles.link}
                        />
                    </div>
                ) : (
                    <Image
                        key={idx}
                        className={styles.img}
                        {...props}
                    />
                )
            )}
        </div>
    )
}

const styles = {
    heading: cn('h2', 'mb-xl'),
    text: 'mt-base first:mt-0',
    img: 'mt-lg',
    containerLink: 'relative',
    link: cn('block', `before:absolute before:content-[''] before:inset-0`),
}
