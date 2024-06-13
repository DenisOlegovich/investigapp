import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks, Tels } from '@/constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Link from '@/components/Link'
import { mobilityAssistance, mobilityAssistanceMuseum, mobilityAssistanceUniversity } from './constants'

export default function MobilityAssistance(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <p>
                14 октября 2013 года в Московском метрополитене для оказания помощи гражданам с ограниченными
                возможностями в передвижении образован Центр обеспечения мобильности пассажиров. Инспекторы Центра
                оказывают услуги по максимально возможному, безопасному и комфортному передвижению по метрополитену
                маломобильных категорий граждан: с нарушение слуха, зрения, функций опорно-двигательного аппарата,
                социальных категорий (пожилые люди, многодетные семьи, родители с детьми до 7 лет и др.), а также
                организованных групп пассажиров, в том числе детских (дети до 11 лет). Сопровождение осуществляется по
                всему маршруту следования — от входа на станцию, в лифтах, по лестницам, эскалаторам и платформам
                станций, в вагонах поездов и до выхода со станции.
            </p>
            <br />
            <p>
                Пассажиры могут оформить заявку на сопровождение и получить более подробную информацию, позвонив по
                телефонам поддержки:
            </p>
            <Link href={`tel:${Tels.requestSupport}`}>{Tels.requestSupport}</Link>&nbsp;и&nbsp;
            <Link href={`tel:${Tels.requestSupportSecond}`}>{Tels.requestSupportSecond}</Link> (бесплатный вызов),
            в&nbsp;
            <Link
                href={ExternalLinks.mosmetroApp}
                type="external"
            >
                мобильном приложении «Метро Москвы»
            </Link>
            или заполнить соответствующую форму на сайте&nbsp;
            <Link
                href={ExternalLinks.mosmetroAccessibilityCenterForm}
                type="external"
            >
                mosmetro.ru
            </Link>
            . Время обслуживания пассажиров с 05:30 до 01:00.
            <div className={styles.lists}>
                <p>Помощь в передвижении маломобильным пассажирам:</p>
                <List {...mobilityAssistance} />
                <p>
                    В целях обеспечения доступности культурных объектов города для маломобильных граждан, Центром
                    обеспечения мобильности пассажиров заключены соглашения с музейными организациями по сопровождению
                    маломобильных пассажиров до следующих музеев:
                </p>
                <List {...mobilityAssistanceMuseum} />
                <p>
                    Также Центром обеспечения мобильности пассажиров разработаны следующие маршруты сопровождения
                    маломобильных граждан:
                </p>
                <List {...mobilityAssistanceUniversity} />
            </div>
        </div>
    )
}

const styles = {
    lists: cn('flex', 'flex-col', 'gap-xs  md:gap-base', 'mt-xs md:mt-base'),
}
