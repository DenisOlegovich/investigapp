import { ComponentPropsWithoutRef } from 'react'

type NewsListCardContainerParams = {
    keywords: string[]
}
export interface NewsListCardContainerProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    params?: NewsListCardContainerParams
}
