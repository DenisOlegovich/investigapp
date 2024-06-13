import ContentLimiter from '@/components/common/ContentLimiter'
import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import { images } from './constants'
import Image from '@/components/Image'

export default function EmergenciesPassenger() {
    return (
        <ContentLimiter className={cn('pt-[6.4rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1', 'mb-2xl sm:mb-3xl')}>{PagesDisplayNames[Pages.emergenciespassenger]}</h1>
            <div className={cn('flex', 'flex-col', 'gap-sm sm:gap-lg', 'max-w-[755px]', 'w-full')}>
                {images.map((img, idx) => (
                    <Image
                        key={idx}
                        img={img}
                        alt=""
                    />
                ))}
            </div>
        </ContentLimiter>
    )
}
