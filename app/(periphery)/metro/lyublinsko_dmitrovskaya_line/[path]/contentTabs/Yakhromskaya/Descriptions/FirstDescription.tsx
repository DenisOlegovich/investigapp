import React from 'react'

import { mcd, mmLogo } from '@/Images'
import { getLineIcon } from '@/utils'
import InfoIcon from '@/components/icons/InfoIcon'
import Image from '@/components/Image'
import BusRoute from '@/components/BusRoute'

export const FirstDescription: React.FC = () => {
    return (
        <>
            <p>
                Открытие участка&nbsp;
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Селигерская — Физтех
            </p>
            <div>
                <BusRoute
                    number="167"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                &nbsp;Вместо Бескудниковского бульвара автобусы идут по улице Ивана Сусанина и Пяловской улице до&nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block"
                />
                &nbsp;
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Селигерская.
            </div>
            <div>
                <BusRoute
                    number="114"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                &nbsp;объединяется с&nbsp;
                <BusRoute
                    number="179"
                    isDisabled
                    className="md:text-[1.4rem]"
                />
                &nbsp;:&nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block"
                />
                &nbsp;
                <Image
                    img={getLineIcon(2)}
                    alt="line"
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(16)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Войковская —&nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block"
                />
                &nbsp;
                <Image
                    img={getLineIcon(7)}
                    alt="line"
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(36)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Петровско-Разумовская —&nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block"
                />
                &nbsp;
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(14)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Лианозово по Бескудниковскому бульвару и Дубнинской улице.
            </div>
            <div>
                <BusRoute
                    number="499"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                &nbsp;объединяется с&nbsp;
                <BusRoute
                    number="748"
                    isDisabled
                    className="md:text-[1.4rem]"
                />
                &nbsp;: автобусы идут через&nbsp;
                <Image
                    img={mcd}
                    alt=""
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(36)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Грачёвская. Меняется схема движения у&nbsp;
                <Image
                    img={mcd}
                    alt=""
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(14)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Бескудниково: автобусы с улицы 800-летия Москвы сначала идут к&nbsp;
                <Image
                    img={mcd}
                    alt=""
                    className="inline-block"
                />
                , а затем на улицу Зарянова.
            </div>
            <div className="inline">
                <InfoIcon className="inline-block text-[2.4rem] text-blue" />
                &nbsp;С улиц 800-летия Москвы, Дубнинской и Бескудниковского бульвара появятся удобные маршруты до
                новой&nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block"
                />
                &nbsp;
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Яхромская и&nbsp;
                <Image
                    img={mcd}
                    alt=""
                    className="inline-block"
                />
                <Image
                    img={getLineIcon(14)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Бескудниково.
            </div>
        </>
    )
}
