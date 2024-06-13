import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { CustomImage } from '@/Images'

export type CompareSliderItem = {
    label?: ReactNode
    img: CustomImage
}

export type CommonCompareSliderItemProps = CompareSliderItem & ComponentPropsWithoutRef<'div'>

export interface CompareSliderProps extends ComponentPropsWithoutRef<'div'> {
    items: [CommonCompareSliderItemProps, CommonCompareSliderItemProps]
}

export type CompareSliderItemProps = {
    side?: 'left' | 'right'
} & CommonCompareSliderItemProps
