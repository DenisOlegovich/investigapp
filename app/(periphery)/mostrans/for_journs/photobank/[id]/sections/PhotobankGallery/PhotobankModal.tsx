'use client'

import { cn } from '@/utils'
import { useGallery } from '@/hooks/useGallery'

import Modal, { BaseClientModalProps } from '@/components/Modals/BaseClientModal'
import { CustomImage } from '@/Images'

export interface PhotobankModalProps extends BaseClientModalProps {
    defaultIndex?: number
    images: CustomImage[]
}

export default function PhotobankModal({ isOpen, onClose, defaultIndex, images, ...props }: PhotobankModalProps) {
    const gallery = useGallery({
        images,
        wrapperClassName: styles.wrapperGallery,
        index: defaultIndex,
    })

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            anatomy={{
                overlay: 'px-sm sm:px-2xl lg:px-[6.4rem]',
                dialog: 'relative lg:max-w-[110vh]',
            }}
            {...props}
        >
            {gallery}
        </Modal>
    )
}

const styles = {
    wrapperGallery: cn('h-[calc(55vw)] sm:h-[calc(55vw)]', 'max-h-[74vh]', 'w-full'),
}
