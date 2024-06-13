'use client'

import { ComponentPropsWithoutRef } from 'react'

import { images } from './constants'
import { cn } from '@/utils'
import { useGallery } from '@/hooks/useGallery'

export default function Gallery(props: ComponentPropsWithoutRef<'div'>) {
    const gallery = useGallery({ images, wrapperClassName: styles.image, download: false })

    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Фотогалерея</h2>

            {gallery}

            <p>
                Кроме этого инспекторы информируют пассажиров о видах услуг по их сопровождению, разъясняют Правила
                пользования Московским метрополитеном и порядок оплаты проезда.
            </p>
            <br />
            <p>
                Обращаем Ваше внимание, что все услуги по сопровождению оказываются сотрудниками Центра обеспечения
                мобильности пассажиров бесплатно (напоминаем, что проезд пассажира в метрополитене оплачивается в
                соответствии с действующими тарифами).
            </p>
        </div>
    )
}

const styles = {
    image: cn('h-[17.2rem] sm:h-[41rem] md:h-[45rem]', 'w-full', 'mb-sm md:mb-lg'),
}
