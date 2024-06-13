import { CardProps } from '@/components/Card/types'
import { Pages } from '@/constants'
import Image from '@/components/Image'
import { cn } from '@/utils'
import { styles } from './styles'
import { coddDesc, coddLogo, trafficJams } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        href: Pages.mapClosures,
        type: 'link',
        title: 'Пробки и\u00A0перекрытия',
        body: (
            <>
                <div className={styles.mapHeader} />
                <Image
                    img={trafficJams}
                    alt=""
                    className={styles.image}
                />
                <Image
                    img={coddDesc}
                    alt=""
                    className={styles.coddDescImage}
                />
                <Image
                    img={coddLogo}
                    alt=""
                    className={styles.coddMobileImage}
                />
            </>
        ),
        className: cn(
            'min-h-[31.2rem]',
            'bg-red',
            'w-full h-full',
            'md:col-span-6 lg:col-span-5',
            'col-start-1 lg:col-start-5',
            'overflow-hidden'
        ),
        anatomy: {
            title: cn('md:text-2xl text-black', 'z-10', 'mr-[35%] xl:mr-0'),
            body: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),
        },
    },
]
