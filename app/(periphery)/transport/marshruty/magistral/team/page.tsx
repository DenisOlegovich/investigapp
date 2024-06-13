import { Mails, Pages, PagesDisplayNames } from '@/constants'
import { navMenu } from '../constants'
import { vacancy } from './constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import InternalNavbar from '@/components/InternalNavbar'
import Card from '@/components/Card'

import { styles } from './styles'
import Accordion from '@/components/Accordion'
import H1 from '@/components/common/typography/H1'
import GridContentLayout from '@/components/common/GridContentLayout'
import Image from '@/components/Image'
import { magistralBus } from '@/Images'
import H2 from '@/components/common/typography/H2'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <Link
                href={Pages.transportMagistral}
                variant="simple_gray"
                className={styles.link}
            >
                ← Магистраль
            </Link>
            <H1 className={styles.title}>{PagesDisplayNames[Pages.magistralTeam]}</H1>
            <GridContentLayout template="grid">
                <div>
                    <p className={styles.text}>
                        Мы ищем в команду людей — координаторов направлений проекта, районных координаторов, аналитиков
                        маршрутной сети, аналитиков инфраструктуры, которые помогут сделать наземный транспорт Москвы
                        еще удобнее. Для этого им предстоит общаться с коллегами и экспертами, собирать и анализировать
                        информацию, предлагать и продвигать свои идеи, а также уметь доводить начатое до конца. В работе
                        нужны коммуникабельность, пытливый ум и целеустремленность. Если вы узнали в описании себя, ниже
                        подробности о вакансиях.
                    </p>
                    <p className={styles.text}>
                        Ждем ваши резюме и сопроводительные письма на почту{' '}
                        <Link href={`mailto:${Mails.magistral}`}>{Mails.magistral}</Link>.
                    </p>
                    <H2>Вакансии</H2>
                    <Accordion
                        items={vacancy}
                        className="mb-xl md:mb-3xl"
                        anatomy={{ title: 'mb-[2.4rem]' }}
                    />
                    <Image
                        img={magistralBus}
                        alt="Автобус"
                        className="rounded-[0.8rem]"
                    />
                </div>
                <InternalNavbar
                    title="Смотреть другие разделы:"
                    navMenu={navMenu}
                    excludedPageHref={Pages.magistralTeam}
                />
            </GridContentLayout>
        </ContentLimiter>
    )
}
