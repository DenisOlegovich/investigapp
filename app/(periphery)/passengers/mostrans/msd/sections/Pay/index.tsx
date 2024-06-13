import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { freePassList, notHaveTimeList, travelOnMSDList } from './constants'

import List from '@/components/List'
import Link from '@/components/Link'
import { ExternalLinks } from '@/constants'

export default function Pay({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <h2 className="h2">Оплата</h2>

            <div className={styles.container}>
                <h3 className="h3">Проезд бесплатный для</h3>
                <div className={styles.textWrapper}>
                    <List {...freePassList} />
                    <p>
                        По МСД запрещен проезд грузовиков без пропуска. Узнать об оформлении пропуска можно&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.howApplyForPass}
                        >
                            здесь
                        </Link>
                        . Те грузовики, у которых есть пропуск для передвижения по Москве, смогут передвигаться по МСД.
                        Стоит обратить внимание, что если грузовики с полученными пропусками будут использовать МСД в
                        качестве транзита, то проезд будет для них платным.
                    </p>
                </div>
            </div>

            <div className={styles.container}>
                <h3 className="h3">Проезд по МСД необходимо оплатить</h3>
                <div className={styles.textWrapper}>
                    <p>Проезд по МСД необходимо оплатить, если он транзитный. Таким он считается в случае, если:</p>
                    <List {...travelOnMSDList} />
                    <b>Стоимость проезда — 950 рублей.</b>
                    <p>
                        Оплатить поездку необходимо только за каждый полностью совершенный маршрут ЦКАД-МСД-ЦКАД
                        независимо от времени дня, типа транспортного средства или количества транзитных проездов по
                        МСД.
                    </p>
                    <p>
                        Оплатить проезд можно в приложении&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.parkingMosRu}
                        >
                            «Парковки России»
                        </Link>
                        , на сайте&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.msd}
                        >
                            msd.mos.ru
                        </Link>
                        &nbsp;и транспондерами. Оплата по транспондерам доступна при заезде на МСД с трассы М-11
                        «Москва-Санкт-Петербург» (заезд/выезд с Бусиновской развязки) и строящейся М-12 «Москва — Нижний
                        Новгород — Казань» (заезд/выезд с Косинской эстакады). В будущем оплата будет доступна и через
                        другие сервисы и партнерские каналы.
                    </p>
                    <p>
                        Вы можете оплатить проезд по МСД сразу, не дожидаясь появления начисления – в течение 5 дней на
                        сайте&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.msd}
                        >
                            msd.mos.ru
                        </Link>
                        &nbsp;, в приложении&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.parkingMosRu}
                        >
                            «Парковки России»
                        </Link>
                        , либо непосредственно во время поездки – при помощи транспондера. Убедитесь, что на
                        транспондере достаточно средств.
                    </p>
                </div>

                <div className={styles.container}>
                    <h3 className="h3">Если не успели оплатить?</h3>
                    <div className={styles.textWrapper}>
                        <p>
                            Если проезд не оплатить в этот период, то будет выставлено начисление. Оно появится на
                            сайте&nbsp;
                            <Link
                                type="external"
                                href={ExternalLinks.msd}
                            >
                                msd.mos.ru
                            </Link>
                            &nbsp;и в приложении&nbsp;
                            <Link
                                type="external"
                                href={ExternalLinks.parkingMosRu}
                            >
                                «Парковки России»
                            </Link>
                            .
                        </p>
                        <p>
                            В случае неоплаты будет выписан штраф в размере 1500 рублей для легковых машин и 5 000
                            рублей для грузовых автомобилей (проехавших по МСД без пропуска) и автобусов (ст. 12.21.4
                            КоАП РФ). Штраф выставляет Ространснадзор. В течение 20 дней после выставления штрафа
                            по-прежнему можно внести оплату за проезд и тогда штраф будет аннулирован.
                        </p>
                        <p>
                            За проезд по МСД грузовика без пропуска предусмотрен штраф 5 000 рублей за каждый случай
                            фиксации правонарушения (ст. 12.16 ч.6 КоАП РФ).
                        </p>
                        <p>
                            Оплатить штраф необходимо в течение 60 дней с момента вступления постановления в силу.
                            Сделать это можно через:
                        </p>
                        <List {...notHaveTimeList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
    container: cn('flex', 'flex-col', 'gap-lg'),
    textWrapper: cn('flex', 'flex-col', 'gap-xs sm:gap-base'),
}
