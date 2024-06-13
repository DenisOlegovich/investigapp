import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Link from '@/components/Link'
import { metroRules } from './constants'

export default function MetroRules(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <div className={styles.info}>
                <p>
                    Утверждены Постановлением Правительства Москвы № 844-ПП от 16.09.2008 г. (в редакции, утверждённой
                    Постановлением Правительства Москвы № 187-ПП от 19.04.2016 г.)
                </p>
                <p className="body-s_bold md:body_bold">
                    Настоящие Правила обязательны к выполнению всеми лицами, находящимися на территории метрополитена.
                    Несоблюдение требований настоящих Правил влечет административную ответственность в соответствии с
                    Кодексом города Москвы об административных правонарушениях.
                </p>
                <Link
                    type="external"
                    href={ExternalLinks.mosmetro}
                >
                    Перейти на сайт Московского метрополитена
                </Link>
            </div>
            <List {...metroRules} />
        </div>
    )
}

const styles = {
    info: cn('flex', 'flex-col', 'gap-base', 'mb-[2rem] md:mb-[3.4rem]'),
}
