import { cn } from '@/utils'
import InfoSection from './InfoSection'
import FreeMusicSection from './FreeMusicSection'

import { styles } from '../../styles'

export const heading = 'Общая информация о проекте'

export default function CommonInfoSection() {
    return (
        <div className={cn('body-s md:body', 'mt-2xl md:mt-3xl')}>
            <h2 className={styles.title}>{heading}</h2>

            <div className="grid grid-cols-1 xl:grid-cols-3">
                <InfoSection />

                <FreeMusicSection />
            </div>
        </div>
    )
}
