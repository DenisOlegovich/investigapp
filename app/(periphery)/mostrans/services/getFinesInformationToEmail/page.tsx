import { Pages, PagesDisplayNames } from '@/constants'
import { listIndividualsEntities, listLegalEntities, listSberClients, listVTBClients } from './constants'
import { finesInfo } from '@/Images'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Image from '@/components/Image'
import List from '@/components/List'

import { styles } from './styles'

export default function GetFinesInformationToEmail() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className="max-w-[98rem]">
                <h1 className={cn('h1', 'mb-2xl md:mb-3xl')}>{PagesDisplayNames[Pages.finesInfo]}</h1>
                <div className="max-w-[87rem]">
                    <Image
                        img={finesInfo}
                        alt="map"
                        className="rounded-[8px]"
                    />
                    <h2 className={cn('h2', 'mt-2xl md:mt-3xl')}>Инструкция по подключению услуги</h2>

                    <h3 className={styles.heading}>Для юридических лиц</h3>
                    <List {...listLegalEntities} />

                    <h3 className={styles.heading}>Для физических лиц</h3>
                    <List {...listIndividualsEntities} />

                    <h3 className={styles.heading}>Для клиентов Сбера</h3>
                    <List {...listSberClients} />

                    <h3 className={styles.heading}>Для клиентов ВТБ</h3>
                    <List {...listVTBClients} />
                </div>
            </div>
        </ContentLimiter>
    )
}
