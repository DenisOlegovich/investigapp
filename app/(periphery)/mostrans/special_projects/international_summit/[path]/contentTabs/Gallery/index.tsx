import Image from '@/components/Image'
import { cn } from '@/utils'
import { images } from './constants'

export default function Gallery() {
    return (
        <div className={styles.wrapper}>
            {images.map(({ img, className }, idx) => (
                <Image
                    key={idx}
                    img={img}
                    className={cn(styles.img, className)}
                    alt=""
                />
            ))}
        </div>
    )
}

const styles = {
    img: cn('h-full', 'rounded-[0.8rem]', 'object-cover', 'w-full', 'min-h-[85px]'),
    wrapper: cn('grid', 'gap-sm md:gap-lg'),
}
