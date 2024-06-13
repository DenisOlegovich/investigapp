import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import NewStandarts from './sections/NewStandarts'
import AdvantagesGovContracts from './sections/AdvantagesGovContracts'
import EconomicBenefits from './sections/EconomicBenefits'
import Schedule from './sections/Schedule'
import MonitoringWorkCarriers from './sections/MonitoringWorkCarriers'
import Contacts from './sections/Contacts'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <h1 className={cn('h1')}>{PagesDisplayNames[Pages.commerciaCarriers]}</h1>
                <NewStandarts />
                <AdvantagesGovContracts />
                <EconomicBenefits />
                <Schedule />
                <MonitoringWorkCarriers />
                <Contacts />
            </div>
        </ContentLimiter>
    )
}
