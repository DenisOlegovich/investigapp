import { ComponentPropsWithoutRef } from 'react'

type NewsListContainerParams = {
    keywords: string[]
}
export interface NewsListContainerProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    params?: NewsListContainerParams
}
