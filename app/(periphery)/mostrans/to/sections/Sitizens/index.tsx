import { ExternalLinks } from '@/constants'
import { freeTOList, pointTO, questionTO } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Link from '@/components/Link'

import { styles } from '../../styles'

export default function Sitizens() {
    return (
        <>
            <h2 className={styles.title}>Гражданам</h2>

            <h4 className={cn('h4', 'mb-xs md:mb-base')}>
                Проведение технического осмотра транспортных средств в городе Москве осуществляется без взимания платы
                при условии, что транспортное средство принадлежит на праве собственности:
            </h4>
            <List
                {...freeTOList}
                className="mb-xs md:mb-base"
            />

            {pointTO.map((link, idx) => (
                <Link
                    href={link.href}
                    variant="default"
                    type="external"
                    key={idx}
                    className={cn('inline-block', styles.links)}
                >
                    {link.text}
                </Link>
            ))}

            <p>
                В соответствии с приказом Департамента транспорта и развития дорожно-транспортной инфраструктуры города
                Москвы&ensp;
                <Link
                    href={ExternalLinks.orderDT_19_03_2012_61_02_53_2}
                    variant="default"
                    type="external"
                >
                    от 19.03.2012 № 61-02-53/2
                </Link>
                «Об утверждении нормативов минимальной обеспеченности населения пунктами технического осмотра в городе
                Москве» в редакции приказа Департамента транспорта и развития дорожно-транспортной инфраструктуры города
                Москвы&ensp;
                <Link
                    href={ExternalLinks.orderDT_24_04_2020_61_02_214_20}
                    variant="default"
                    type="external"
                >
                    от 24.04.2020 № 61-02-214/20 «О внесении изменений в приказ Департамента транспорта и развития
                    дорожно-транспортной инфраструктуры города Москвы»
                </Link>
                &ensp; нормативы минимальной обеспеченности населения пунктами технического осмотра в городе Москве
                составляют 221 пункт. Со всеми аккредитованными пунктами технического осмотра вы можете ознакомиться на
                официальном сайте Российского союза страховщиков, пройдя по ссылке:&ensp;
                <Link
                    href={ExternalLinks.pointTO}
                    variant="default"
                    type="external"
                >
                    oto-register.autoins.ru/pto/
                </Link>
                .
            </p>

            <h4 className={cn('h4', 'mb-xs md:mb-base', styles.text)}>
                Постановления Правительства Москвы по вопросам ТО:
            </h4>
            {questionTO.map((link, idx) => (
                <Link
                    href={link.href}
                    variant="default"
                    type="external"
                    key={idx}
                    className={cn('inline-block', styles.links)}
                >
                    {link.text}
                </Link>
            ))}
        </>
    )
}
