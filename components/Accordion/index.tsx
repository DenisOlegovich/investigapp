'use client'

import { ComponentPropsWithoutRef, useEffect, useMemo, useState } from 'react'
import AccordionItem, { AccordionItemAnatomy, AccordionItemProps } from './AccordionItem'

interface OpenItems {
    [key: number]: boolean
}

type AccordionAnatomy = 'itemWrapper' | AccordionItemAnatomy

export interface AccordionProps extends ComponentPropsWithoutRef<'div'> {
    items: Pick<AccordionItemProps, 'title' | 'content' | 'isOpen' | 'expandedTitle'>[]
    anatomy?: Partial<Record<AccordionAnatomy, string>>
}

export default function Accordion({
    items,
    anatomy: { itemWrapper: itemWrapperClassName = '', ...restItemClassName } = {},
    ...props
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<OpenItems>({})

    const toggleAccordion = (index: number) => {
        setOpenItems((prevOpenItems) => {
            const isOpen = !prevOpenItems[index]

            return { ...prevOpenItems, [index]: isOpen }
        })
    }

    const initialOpenItems = useMemo(
        () =>
            items.reduce((acc, { isOpen }, index) => {
                return { ...acc, [index]: isOpen ?? false }
            }, {} as OpenItems),
        [items]
    )

    useEffect(() => {
        setOpenItems(initialOpenItems)
    }, [initialOpenItems])

    return (
        <div {...props}>
            {items.map(({ title, expandedTitle, content }, index) => (
                <AccordionItem
                    key={index}
                    title={title}
                    expandedTitle={expandedTitle}
                    content={content}
                    isOpen={openItems[index]}
                    toggle={() => toggleAccordion(index)}
                    className={itemWrapperClassName}
                    anatomy={restItemClassName}
                />
            ))}
        </div>
    )
}
