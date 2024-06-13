import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import { museum } from '@/Images'
import Image from '@/components/Image'
import List from '@/components/List'
import Link from '@/components/Link'
import SocialLink from '@/components/SocialLink'
import { listPlatform, museumSocialLinks } from './constants'

export default function About({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <Image
                img={museum}
                alt="Музей Транспорта Москвы"
                className={styles.image}
            />
            <p className={styles.description}>
                Музей Транспорта Москвы ー это открытое городское пространство и живой исследовательский центр,
                отвечающий на важный вопрос: что движет Москвой? В фондах музея находятся более 250 экземпляров легковых
                и грузовых автомобилей, такси, автобусов, машин городских служб, вело и мототехника.
                <br />
                <br />
                Экспонаты коллекции музея можно увидеть на выставочных проектах, а также на транспортной инфраструктуре
                города. Постоянная экспозиция музея будет размещена в гараже архитектора Константина Мельникова на
                Новорязанской улице, 27. Сейчас памятник архитектуры советского авангарда находится на реставрации. Ему
                будет возвращен исторический облик.
                <br />
                <br />
                Площадки Музея Транспорта Москвы:
            </p>
            <List
                {...listPlatform}
                className={styles.list}
            />
            <Link
                href={ExternalLinks.museum}
                type="external"
                className="md:body"
            >
                Сайт Музея Транспорта Москвы
            </Link>
            <p className={cn('mt-lg  md:mt-xl', 'font-medium', 'body-s md:h5')}>
                Социальные сети Музея Транспорта Москвы:
            </p>
            <div className={cn('flex', 'mt-xs', 'gap-[0.6rem]')}>
                {museumSocialLinks.map(({ ...props }, idx) => (
                    <SocialLink
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: 'flex flex-col',
    image: cn('h-[17.2rem] sm:h-[28rem] md:h-[36rem] lg-h-auto', 'w-auto', 'rounded-[.8rem]', 'object-cover'),
    description: 'mt-sm md:mt-lg mb-xs md:mb-base md:body',
    list: 'mb-xs md:mb-base',
}
