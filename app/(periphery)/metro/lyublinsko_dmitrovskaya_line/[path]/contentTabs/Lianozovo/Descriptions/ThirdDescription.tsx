import React from 'react'

import { getLineIcon } from '@/utils'

import { mcd, mmLogo } from '@/Images'
import InfoIcon from '@/components/icons/InfoIcon'
import Image from '@/components/Image'
import BusRoute from '@/components/BusRoute'

export const ThirdDescription: React.FC = () => {
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
                &nbsp;идет по ул. Ивана Сусанина и Пяловской ул. до&nbsp;
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
                    number="215"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                &nbsp;объединяется с&nbsp;
                <BusRoute
                    number="92"
                    isDisabled
                    className="md:text-[1.4rem]"
                />
                &nbsp;
                <BusRoute
                    number="665"
                    isDisabled
                    className="md:text-[1.4rem]"
                />
                &nbsp;:&nbsp;
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
                &nbsp;Грачёвская — ул. Софьи Ковалёвой —&nbsp;
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
                &nbsp;Моссельмаш —&nbsp;
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
                &nbsp;Петровско-Разумовская.
            </div>
            <p className="inline">
                <InfoIcon className="inline-block text-[2.4rem] text-blue" />
                &nbsp;Из районов Западное и Восточное Дегунино и Дмитровского района будет удобнее добраться до
                поликлиники на ул. 800-летия Москвы.
            </p>
        </>
    )
}
