import React from 'react'

import { mmLogo } from '@/Images'
import { getLineIcon } from '@/utils'
import InfoIcon from '@/components/icons/InfoIcon'
import Image from '@/components/Image'
import BusRoute from '@/components/BusRoute'

export const FourthDescription: React.FC = () => {
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
                    number="284"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                &nbsp;Вместо Дмитровского шоссе идет по Карельскому бульвару.
                <br />
                Автобусы будут ходить чаще.
            </div>
            <div>
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
                &nbsp;Вместо Дмитровского шоссе идут по Клязьминской улице.
            </div>
            <div>
                <BusRoute
                    number="63"
                    isDisabled
                    className="md:text-[1.4rem]"
                />
                &nbsp;теперь дублирует метро и больше не работает, пользуйтесь измененными&nbsp;
                <BusRoute
                    number="284"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                &nbsp;
                <BusRoute
                    number="774"
                    variant="blueLight"
                    className="md:text-[1.4rem]"
                />
                &nbsp;и&nbsp;
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
                &nbsp;Люблинско-Дмитровской линией.
            </div>
            <p className="inline">
                <InfoIcon className="inline-block text-[2.4rem] text-blue" />
                &nbsp;С Клязьминской и Лобненской улиц и с Карельского бульвара появятся удобные маршруты до новой
                станции метро Лианозово.
            </p>
        </>
    )
}
