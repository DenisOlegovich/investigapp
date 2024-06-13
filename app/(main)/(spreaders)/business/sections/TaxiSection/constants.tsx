import { Pages } from '@/constants'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { cn } from '@/utils'
import { styles } from '@/app/(main)/(spreaders)/business/sections/TaxiSection/styles'
import { taxiParking } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.taxiParking,
        title: 'Карта парковок для такси',
        className: cn('bg-grey-light', 'lg:flex-1', 'h-[31.2rem] lg:h-[40rem]', 'overflow-hidden'),
        body: (
            <>
                <div className={styles.taxiHeader} />
                <Image
                    img={taxiParking}
                    alt="tickets new"
                    className={styles.taxiImage}
                />
            </>
        ),
        anatomy: {
            title: cn('md:text-2xl text-black', 'z-10', 'md:mr-[35%] xl:mr-0'),
            body: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),
        },
    },
]

export const questions = [
    {
        href: Pages.taxiLicense,
        title: 'Получение, замена, аннулирование и выдача дубликата',
    },
    {
        href: Pages.privilegesTaxi,
        title: 'Льготы и субсидии',
    },
]
