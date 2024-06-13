import React from 'react'

import { mmLogo } from '@/Images'
import { getLineIcon } from '@/utils'
import Image from '@/components/Image'

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
                Автобусы свяжут улицы Абрамцевская, Илимская и Пришвина с новой&nbsp;
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
                &nbsp;Лианозово.
            </div>
        </>
    )
}
