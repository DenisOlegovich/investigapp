import Image from '@/components/Image'

import { cn } from '@/utils'
import { CompareSliderItemProps } from './type'
import Tag from '@/components/Tag'
import AspectRatio from '@/components/common/AspectRatio'

export default function CompareSliderItem({ side, label, img, className, ...props }: CompareSliderItemProps) {
    return (
        <div
            className={cn(
                styles.container,
                {
                    'justify-start': side === 'left',
                    'justify-end': side === 'right',
                },
                className
            )}
            {...props}
        >
            <AspectRatio
                ratio={1.6}
                className="w-full"
            >
                <Image
                    img={img}
                    alt=""
                    className="size-full rounded-[0.8rem] object-cover"
                />
            </AspectRatio>

            {label && (
                <Tag
                    className={cn(styles.label, {
                        'left-xs sm:left-lg': side === 'left',
                        'right-xs sm:right-lg': side === 'right',
                    })}
                >
                    {label}
                </Tag>
            )}
        </div>
    )
}

const styles = {
    container: cn('relative', 'flex', 'items-center', 'size-full'),
    label: cn(
        'absolute',
        'top-xs sm:top-lg',
        'bg-grey-extra-light hover:bg-grey-extra-light active:bg-grey-extra-light'
    ),
}
