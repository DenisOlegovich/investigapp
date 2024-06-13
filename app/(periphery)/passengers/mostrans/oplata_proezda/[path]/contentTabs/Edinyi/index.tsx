import FAQContainer from '@/app/containers/FAQContainer'
import Tariffs from '@/components/Tariffs'
import TextAlert from '@/components/TextAlert'
import { cn } from '@/utils'
import { alert, tariffs } from './constants'

const heading = 'Билет «Единый»'

export default function Edinyi() {
    return (
        <div className={styles.wrapper}>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>{heading}</h2>
            <div className={styles.tariffsContainer}>
                {tariffs.map(({ title, description, items }, idx) => (
                    <div key={idx}>
                        {title && <h4 className={cn('h4', 'mb-base')}>{title}</h4>}
                        {description && <p className={cn('mb-sm md:mb-xl')}>{description}</p>}
                        <Tariffs items={items} />
                    </div>
                ))}
                <TextAlert
                    className="mt-2xs md:mt-0"
                    {...alert}
                />
            </div>
            <FAQContainer
                params={{ keywords: ['main'] }}
                className={cn('mt-lg md:mt-3xl')}
            />
        </div>
    )
}

const styles = {
    wrapper: cn('body-s md:body'),
    tariffsContainer: cn('flex', 'flex-col', 'gap-sm md:gap-xl', 'max-w-[75.5rem]'),
}
