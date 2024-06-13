import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils'
import If from '@/components/If'
import Button from '@/components/Forms/Button'
import ArrowIcon from '@/components/icons/ArrowIcon'

export type AccordionItemAnatomy = 'title' | 'expandButton' | 'content'

export interface AccordionItemProps extends Omit<ComponentPropsWithoutRef<'div'>, 'content' | 'title'> {
    title: ReactNode
    content: ReactNode
    toggle: () => void
    isOpen?: boolean
    expandedTitle?: ReactNode
    className?: string
    anatomy?: Partial<Record<AccordionItemAnatomy, string>>
}

export default function AccordionItem({
    title,
    content,
    isOpen,
    expandedTitle,
    toggle,
    className,
    anatomy: {
        title: titleClassName = '',
        expandButton: expandButtonClassName = '',
        content: contentClassName = '',
    } = {},
    ...props
}: AccordionItemProps) {
    const currentTitle = isOpen ? expandedTitle ?? title : title

    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <If
                condition={typeof currentTitle === 'string'}
                Else={
                    <div className={cn('relative', titleClassName)}>
                        {currentTitle}

                        {content && (
                            <Button
                                variant="unstyled"
                                iconBefore={<ArrowIcon />}
                                anatomy={{
                                    iconBefore: cn(styles.iconBefore, { 'rotate-180': isOpen }),
                                }}
                                onClick={toggle}
                                className={cn('absolute right-0 top-0', expandButtonClassName)}
                            />
                        )}
                    </div>
                }
            >
                <h2
                    onClick={toggle}
                    className={cn(styles.title, { 'text-blue decoration-blue/[0.3]': isOpen }, titleClassName)}
                >
                    {currentTitle}
                </h2>
            </If>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={cn(styles.content, contentClassName)}>{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const styles = {
    wrapper: cn('mt-[1.2rem] md:[1.6rem] first-of-type:mt-0'),
    title: cn(
        'h4',
        'cursor-pointer',
        'text-black hover:text-blue',
        'underline  underline-offset-[5px] md:underline-offset-[8px]',
        'decoration-black/[0.3] hover:decoration-blue/[0.3]',
        'decoration-[1px] decoration-dashed'
    ),
    iconBefore: cn('bg-grey-light', 'p-[.7rem]', 'rounded-[50%]', 'transition'),
    content: 'pt-[1rem]',
}
