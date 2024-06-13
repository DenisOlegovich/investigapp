import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { styles } from './styles'
import { lostAndFound, mobile, payFine } from '@/Images'

export const cards: Omit<CardProps<'link'>, 'type'>[] = [
    {
        href: Pages.mobile,
        title: 'Мобильные приложения',
        subtitle: 'Расписания транспорта, оплата парковки, вызов такси на расстоянии одного тапа',
        className: styles.mobile,
        body: (
            <Image
                img={mobile}
                alt=""
                className={styles.mobileImg}
            />
        ),
        anatomy: {
            body: styles.mobileBody,
        },
    },
    {
        href: Pages.payFine,
        title: 'Штрафы в городском\nтранспорте',
        className: styles.payFine,
        body: (
            <Image
                img={payFine}
                alt=""
                className={styles.payFineImg}
            />
        ),
        anatomy: {
            body: styles.payFineBody,
        },
    },
    {
        href: Pages.lostAndFound,
        title: 'Бюро находок',
        subtitle: 'Что делать, если забыли вещи в транспорте',
        className: styles.lostAndFound,
        body: (
            <Image
                img={lostAndFound}
                alt=""
                className={styles.lostAndFoundImg}
            />
        ),
        anatomy: {
            body: styles.lostAndFoundBody,
            title: styles.zIndex,
            subtitle: styles.lostAndFoundSubtitle,
        },
    },
]

export const questions = [
    {
        title: 'Что такое парковочный абонемент и как его получить?',
        href: `${Pages.faq}#qa-6`,
    },
    {
        title: 'Какие права имеют владельцы резидентных разрешений?',
        href: `${Pages.faq}#qa-36`,
    },
    {
        title: 'Как часто можно менять номер автомобиля в реестре парковочных разрешений?',
        href: `${Pages.faq}#qa-42`,
    },
]
