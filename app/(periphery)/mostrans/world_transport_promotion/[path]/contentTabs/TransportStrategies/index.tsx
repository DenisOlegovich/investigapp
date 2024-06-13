import { cn } from '@/utils'
import { transportStrategyDocs } from '../../constants'
import PresentationCard from '@/components/PresentationCard'

export default function TransportStrategies() {
    return (
        <div>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>Транспортные стратегии мировых столиц</h2>
            <div className={styles.wrapper}>
                {transportStrategyDocs.map((props, idx) => (
                    <PresentationCard
                        key={idx}
                        type="box"
                        withDocInfo
                        anatomy={{
                            container: cn('max-w-[31rem]', 'gap-sm md:gap-sm'),
                            image: 'h-[37.2rem] md:h-[40rem]',
                        }}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('grid grid-cols-1 md:grid-cols-2 gap-sm md:gap-lg'),
}
