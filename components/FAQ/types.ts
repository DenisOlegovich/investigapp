import { ComponentProps } from 'react'
import { AccordionProps } from '@/components/Accordion'

export interface FAQProps extends Omit<ComponentProps<'div'>, 'title'> {
    title?: string
    data: AccordionProps['items']
}
