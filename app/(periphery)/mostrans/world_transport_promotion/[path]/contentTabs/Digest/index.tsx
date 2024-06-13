import { cn } from '@/utils'
import { digestDocs } from '../../constants'
import PresentationCard from '@/components/PresentationCard'

export default function Digest() {
    return (
        <div>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>Дайджест «Мировое транспортное развитие»</h2>
            <p className={cn('body-s md:body', 'mb-lg')}>
                Для определения путей дальнейшего развития города Москва уделяет особое внимание изучению опыта работы
                транспорта в различных городах мира.
            </p>
            {digestDocs.map((props, idx) => (
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
    )
}
