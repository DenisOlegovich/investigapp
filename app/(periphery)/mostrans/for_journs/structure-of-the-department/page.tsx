import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import Departments from './sections/Departments'
import Workers from './sections/Workers'

export default function Page() {
    return (
        <ContentLimiter className={cn('body-s md:body pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.departmentStructure]}</h1>
                <Workers />
                <Departments />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl md:gap-3xl', 'max-w-[75.5rem]'),
}
