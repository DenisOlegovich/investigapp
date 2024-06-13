import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CustomImage } from '@/Images'

export interface NewsListItemProps {
    id: string
    isMain?: boolean
    date?: string
    title?: ReactNode
    img?: CustomImage
}

export interface NewsListProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    data: Omit<NewsListItemProps, 'isMain'>[]
    onShowMore: () => void
}
