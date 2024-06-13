import { ComponentPropsWithoutRef } from 'react'

type FAQContainerParams = {
    keywords: string[]
}
export interface FAQContainerProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    params?: FAQContainerParams
}
