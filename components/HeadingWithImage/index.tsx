import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/utils'
import { CustomImage } from '@/Images'
import ContentLimiter from '@/components/common/ContentLimiter'
import Image from '@/components/Image'
import Pattern from './pattern'

type HeadingWithImageAnatomy = 'container' | 'content' | 'image' | 'pattern'

export interface HeadingWithImageProps extends ComponentPropsWithoutRef<'div'> {
    img?: CustomImage
    anatomy?: Partial<Record<HeadingWithImageAnatomy, string>>
}

export default function HeadingWithImage({
    img,
    children,
    className,
    anatomy: {
        container: containerClassName = '',
        content: contentClassName = '',
        image: imageClassName = '',
        pattern: patternClassName = '',
    } = {},
    ...props
}: HeadingWithImageProps) {
    return (
        <div
            className={cn('relative', 'min-h-[40rem] md:min-h-[55rem]', className, containerClassName)}
            {...props}
        >
            <ContentLimiter className={cn('flex', contentClassName)}>{children}</ContentLimiter>
            {img && (
                <Image
                    img={img}
                    alt=""
                    className={cn(
                        'absolute top-0 left-0 z-[-1]',
                        'size-full object-cover',
                        'brightness-[.7]',
                        imageClassName
                    )}
                />
            )}

            <Pattern className={cn('absolute bottom-0 right-0 md:right-[-30%] xl:right-0', patternClassName)} />
        </div>
    )
}
