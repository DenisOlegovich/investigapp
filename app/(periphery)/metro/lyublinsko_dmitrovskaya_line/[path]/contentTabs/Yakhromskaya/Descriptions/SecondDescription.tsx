import React from 'react'

import { mmLogo } from '@/Images'
import { getLineIcon } from '@/utils'
import Image from '@/components/Image'
import BusRoute from '@/components/BusRoute'

export const SecondDescription: React.FC = () => {
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
                Теперь у жителей есть метро в шаговой доступности. На Дмитровском шоссе пользуйтесь метро или&nbsp;
                <BusRoute
                    number="т78"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                .
            </div>
            <div>
                На Клязьминской улице пользуйтесь измененными&nbsp;
                <BusRoute
                    number="149"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                &nbsp;или&nbsp;
                <BusRoute
                    number="774"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                &nbsp;
                <BusRoute
                    number="571"
                    variant="pink"
                    className="text-black md:text-[1.4rem]"
                />
                &nbsp;до метро&nbsp;
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
                &nbsp;Лианозово.
            </div>
        </>
    )
}
