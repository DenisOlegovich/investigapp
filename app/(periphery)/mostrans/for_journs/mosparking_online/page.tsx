import { Pages, PagesDisplayNames } from '@/constants'
import { data } from './constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import GridContentLayout from '@/components/common/GridContentLayout'
import H1 from '@/components/common/typography/H1'
import H2 from '@/components/common/typography/H2'
import CompareSlider from '@/components/CompareSlider'

export default function Page() {
    return (
        <ContentLimiter>
            <GridContentLayout>
                <H1>{PagesDisplayNames[Pages.mosparkingOnline]}</H1>
                <p className={styles.text}>
                    Еще 8-10 лет назад парковка автомобилей в Москве зачастую была хаотичной. Водители нарушали правила
                    остановки и стоянки, вставали вторым, а иногда и третьим рядом и занимали тротуары – это регулярно
                    приводило к затруднениям движения на улицах города, усугубляло пробки и даже провоцировало аварии.
                </p>
                <p className={styles.text}>
                    «Московский паркинг» работает с конца 2012 года. За это время парковки стали организованными,
                    количество нарушений снизилось, оборачиваемость парковочных мест повысилась в 4 раза, что позволило
                    местным жителям быстрее находить места возле дома, сократилось время проезда экстренных служб,
                    создана безопасная и благоприятная среда для пешеходов, городского транспорта и автомобилистов.
                </p>
                <p>
                    Чтобы показать вам, как изменился город за последние 8 лет, мы подготовили онлайн-выставку. Подборка
                    фотографий поможет сравнить внешний вид московских улиц в 2009-2012 годах с тем, как они выглядят
                    сейчас.
                </p>
                <div>
                    {data.map(({ title, items }, idx) => (
                        <div
                            key={idx}
                            className="mt-2xl md:mt-3xl"
                        >
                            <H2>{title}</H2>
                            <CompareSlider items={items} />
                        </div>
                    ))}
                </div>
            </GridContentLayout>
        </ContentLimiter>
    )
}

const styles = {
    text: 'mb-sm sm:mb-base',
}
