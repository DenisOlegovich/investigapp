import { ComponentProps } from 'react'

export interface NewsListCardItemProps {
    id: string
    date: string
    description: string
}

export interface NewsListCardProps extends Omit<ComponentProps<'div'>, 'title'> {
    title?: string
    data: NewsListCardItemProps[]
}
