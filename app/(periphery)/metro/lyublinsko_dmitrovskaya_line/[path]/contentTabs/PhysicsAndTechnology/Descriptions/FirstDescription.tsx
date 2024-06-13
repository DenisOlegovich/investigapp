import React from 'react'

import { getLineIcon } from '@/utils'
import Image from '@/components/Image'

export const FirstDescription: React.FC = () => {
    return (
        <p>
            Открытие участка&nbsp;
            <Image
                img={getLineIcon(10)}
                alt="line"
                className="inline-block"
            />
            &nbsp;Селигерская — Физтех
        </p>
    )
}
