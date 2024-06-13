import { list } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function Meetings() {
    return (
        <div className={cn('body-s md:body', 'xl:col-span-2', 'xl:max-w-[755px]')}>
            <p className={cn('mb-2xl md:mb-3xl', 'text-lg text-grey-dark md:text-4xl')}>
                Участники встречи смогут задать свои вопросы и обсудить предложения по организации пешеходных переходов,
                установке дорожных знаков, светофоров и изменению схем движения.
            </p>
            <h2 className={styles.title}>Как проходят</h2>
            <p>
                Встречи проводятся ежеквартально в соответствии с территориальным делением по округам. Каждый ее
                участник может лично обсудить свои предложения с координатором своего округа. Это позволяет решить
                вопросы на месте без официального обращения, обсудить предложения с жителями, преимущества и недостатки
                изменений.
            </p>
            <h2 className={cn('mt-[4rem] md:mt-[4.8rem]', styles.title)}>Поможем</h2>
            <List {...list} />
        </div>
    )
}
