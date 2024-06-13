'use client'

import { useCallback, useRef } from 'react'
import LightGallery, { LightGalleryProps } from 'lightgallery/react'
import { InitDetail } from 'lightgallery/lg-events'

import 'lightgallery/css/lightgallery.css'
import '@/styles/react-lightgallery-inline.scss'

export interface GalleryProps extends LightGalleryProps {}

export default function InlineGallery({ children, ...props }: GalleryProps) {
    const lightGallery = useRef<InitDetail['instance'] | null>(null)

    const onInit = useCallback((detail: InitDetail) => {
        if (detail) {
            lightGallery.current = detail.instance
            lightGallery.current?.openGallery()
        }
    }, [])

    return (
        <LightGallery
            mobileSettings={{
                controls: false,
                download: true,
            }}
            licenseKey="1234-5678-901-2345"
            onInit={onInit}
            counter={false}
            dynamic
            hash={false}
            closable={false}
            addClass="inline"
            allowMediaOverlap
            download
            {...props}
        >
            {children}
        </LightGallery>
    )
}
