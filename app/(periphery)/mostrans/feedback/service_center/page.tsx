import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import DigitalReception from '@/app/(periphery)/mostrans/feedback/service_center/sections/DigitalReception'
import ContactCenter from '@/app/(periphery)/mostrans/feedback/service_center/sections/ContactCenter'
import Mailbox from '@/app/(periphery)/mostrans/feedback/service_center/sections/Mailbox'
import ServiceCenters from '@/app/(periphery)/mostrans/feedback/service_center/sections/ServiceCenters'
import Documents from '@/app/(periphery)/mostrans/feedback/service_center/sections/Documents'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]')}>
            <h1 className={styles.title}>{PagesDisplayNames[Pages.feedback]}</h1>
            <div className={styles.wrapper}>
                <div className="max-w-[75.5rem]">
                    <DigitalReception className="mb-2xl md:mb-3xl" />
                    <ServiceCenters className="mb-2xl md:mb-3xl" />
                    <ContactCenter className="mb-2xl md:mb-3xl" />
                    <Mailbox />
                </div>
                <Documents className="md:max-w-[31rem]" />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    title: cn('h1', 'mb-2xl md:mb-3xl', 'max-w-[75.5rem]'),
    wrapper: cn('flex flex-wrap', 'justify-between', 'gap-2xl md:gap-5xl', 'body-s md:body'),
}
