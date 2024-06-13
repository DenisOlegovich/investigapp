'use client'

import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import GridContentLayout from '@/components/common/GridContentLayout'
import H1 from '@/components/common/typography/H1'
import RegistrationForm from './RegistrationForm'

export default function Page() {
    return (
        <ContentLimiter>
            <GridContentLayout>
                <H1>{PagesDisplayNames[Pages.ecodiktant]}</H1>
                <div className="mb-2xl md:mb-3xl">
                    <p className={styles.aboutText}>
                        Регистрация на участие во Всероссийском экологическом диктанте в автобусном парке ГУП
                        «Мосгортранс»
                    </p>
                </div>
                <div className="mb-xl">
                    <p className={styles.text}>
                        <strong>Время проведения:</strong> 13:00
                    </p>
                    <p className={styles.text}>
                        <strong>Адрес проведения:</strong> ул. Дениса Давыдова, 2. Филиал Центральный ГУП «Мосгортранс»
                    </p>
                </div>
                <RegistrationForm />
            </GridContentLayout>
        </ContentLimiter>
    )
}

const styles = {
    aboutText: cn('text-[2.8rem]', 'text-grey-dark', 'mt-xs md:mt-base first:mt-0'),
    text: cn('mt-xs md:mt-base first:mt-0'),
}
