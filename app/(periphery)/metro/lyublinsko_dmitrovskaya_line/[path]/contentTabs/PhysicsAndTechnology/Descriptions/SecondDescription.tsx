import React from 'react'

import { getLineIcon } from '@/utils'
import InfoIcon from '@/components/icons/InfoIcon'
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
            <p>
                Жители 7-го и 9-го микрорайонов Северного смогут добраться до новой станции метро «Физтех». Автобусы
                будут ходить чаще.
            </p>
            <p className="inline">
                <InfoIcon className="inline-block text-[2.4rem] text-blue" />
                &nbsp;Остановка у метро — на Долгопрудненском шоссе.
            </p>
        </>
    )
}
