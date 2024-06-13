import { cn } from '@/utils'
import { departments } from './constants/index'
import If from '@/components/If'
import Accordion from '@/components/Accordion'
import MainInfo from './sections/MainInfo'
import DetailInfo from './sections/DetailInfo'

export default function Departments() {
    return (
        <div>
            <h1 className={styles.heading}>Подведомственные организации</h1>
            <div className={styles.content}>
                {departments.map(
                    (
                        {
                            detailInfo,
                            tasksOrganization,
                            mainActivities,
                            informationResources,
                            socialLinks,
                            ...mainInfoProps
                        },
                        idx
                    ) => {
                        const isShowDetail =
                            detailInfo || tasksOrganization || mainActivities || informationResources || socialLinks

                        return (
                            <div key={idx}>
                                <MainInfo
                                    className="mb-xs md:mb-base"
                                    {...mainInfoProps}
                                />
                                <If condition={isShowDetail}>
                                    <Accordion
                                        items={[
                                            {
                                                title: 'Подробнее',
                                                content: (
                                                    <DetailInfo
                                                        detailInfo={detailInfo}
                                                        tasksOrganization={tasksOrganization}
                                                        mainActivities={mainActivities}
                                                        informationResources={informationResources}
                                                        socialLinks={socialLinks}
                                                    />
                                                ),
                                            },
                                        ]}
                                        anatomy={{ title: 'body-s md:body' }}
                                    />
                                </If>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

const styles = {
    heading: cn('h1', 'mb-lg md:mb-xl'),
    content: cn('flex', 'flex-col', 'gap-lg md:gap-xl', 'body-s md:body'),
}
