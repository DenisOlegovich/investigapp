import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import DomesticSection from './sections/DomesticSection'
import EducationSection from './sections/EducationSection'
import InternationalSection from './sections/InternationalSection'
import MainSection from './sections/MainSection'
import RecommendationSection from './sections/RecommendationSection'

export default function Anticorruption() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.anticorruption]}</h1>
                <MainSection />
                <InternationalSection />
                <DomesticSection />
                <RecommendationSection />
                <EducationSection />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('md:body', 'flex flex-col', 'gap-2xl md:gap-3xl', 'max-w-[755px]'),
}
