import { useCallback, useMemo, useState } from 'react'
import { LightGalleryProps } from 'lightgallery/react'

import { CustomImage } from '@/Images'
import { cn } from '@/utils'
import If from '@/components/If'
import InlineGallery from '@/components/InlineGallery'

interface UseGalleryProps extends LightGalleryProps {
    images: CustomImage[]
    wrapperClassName?: string
}

export const useGallery = ({ images, wrapperClassName = '', ...props }: UseGalleryProps) => {
    const [container, setContainer] = useState<HTMLDivElement | null>(null)
    const setContainerRef = useCallback((node: HTMLDivElement | null) => {
        if (node) {
            setContainer(node)
        }
    }, [])

    return useMemo(
        () => (
            <div
                ref={setContainerRef}
                className={cn(styles.wrapper, wrapperClassName)}
            >
                <If condition={container !== null}>
                    <InlineGallery
                        dynamicEl={images.map(({ src }, idx) => ({
                            id: idx,
                            src,
                        }))}
                        container={container ?? ''}
                        {...props}
                    />
                </If>
            </div>
        ),
        [container, images, setContainerRef, wrapperClassName, props]
    )
}

const styles = {
    wrapper: cn('rounded-[.8rem]', 'overflow-hidden'),
}
