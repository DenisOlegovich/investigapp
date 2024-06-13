'use client'
import { ComponentPropsWithoutRef, useRef } from 'react'

import { CustomImage } from '@/Images'
import { cn } from '@/utils'
import { useTrigger } from '@/hooks/useTrigger'

import Card from '@/components/Card'
import Image from '@/components/Image'
import PhotobankModal from './PhotobankModal'

export interface PhotobankGalleryProps extends ComponentPropsWithoutRef<'div'> {
    images: CustomImage[]
}

export default function PhotobankGallery({ images }: PhotobankGalleryProps) {
    const [isOpen, { onHandler, offHandler: hideModal }] = useTrigger()
    const indexCurrentImage = useRef(0)

    const openModal = (idx: number) => {
        indexCurrentImage.current = idx
        onHandler()
    }

    return (
        <>
            <PhotobankModal
                isOpen={isOpen}
                onClose={hideModal}
                defaultIndex={indexCurrentImage.current}
                images={images.map(({ src }, idx) => ({
                    id: idx,
                    src,
                }))}
            />
            <div className={cn('mt-2xl md:mt-3xl', 'grid', 'grid-cols-2 lg:grid-cols-4', 'gap-sm md:gap-lg')}>
                {images.map((img, idx) => (
                    <Card
                        type="box"
                        key={idx}
                        className={cn(
                            // 'w-[184px] md:w-[310px]',
                            'h-[80px] sm:h-[184px]',
                            'overflow-hidden',
                            'cursor-pointer'
                        )}
                        body={
                            <Image
                                img={img}
                                alt="photobank"
                                className={cn('object-cover', 'h-full')}
                            />
                        }
                        onClick={() => openModal(idx)}
                        anatomy={{
                            body: cn('absolute', 'inset-0'),
                        }}
                    />
                ))}
            </div>
        </>
    )
}
