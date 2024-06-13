import { ComponentPropsWithoutRef } from 'react'

import { CustomImage } from '@/Images'

export interface ImageProps extends Omit<ComponentPropsWithoutRef<'img'>, 'src'> {
    img: CustomImage
}

export default function Image({ img, width, height, ...props }: ImageProps) {
    return (
        <img
            src={img.src}
            width={width ?? img.width}
            height={height ?? img.height}
            {...props}
        />
    )
}
