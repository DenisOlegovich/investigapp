import React from 'react'

import { getLineIcon } from '@/utils'

import { mcd, mmLogo } from '@/Images'
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
                Объединенный маршрут&nbsp;
                <BusRoute
                    number="270"
                    variant="blueLight"
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
                &nbsp;Речной вокзал —&nbsp;
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
                    img={getLineIcon(36)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Ховрино — ул. Лобенская.
            </div>
            <div>
                Для проезда к&nbsp;
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
                &nbsp;Грачёвская пользуйтесь измененным&nbsp;
                <BusRoute
                    number="499"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                .
            </div>
        </>
    )
}
