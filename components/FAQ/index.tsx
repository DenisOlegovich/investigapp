import { cn } from '@/utils/cn'

import { Pages } from '@/constants'
import { FAQProps } from './types'

import Accordion from '@/components/Accordion'
import Link from '@/components/Link'
import If from '@/components/If'

const defaultFAQTitle = 'Частые вопросы'
const noDataText = 'Нет данных'

export default function FAQ({ title, data, ...props }: FAQProps) {
    return (
        <If
            condition={Boolean(data?.length)}
            Else={<p className={cn('body', 'text-grey-dark')}>{noDataText}</p>}
        >
            <div {...props}>
                <h2 className={cn('h2', 'w-fit', 'mb-sm md:mb-lg')}>
                    <Link
                        href={Pages.faq}
                        variant="simple_black"
                        className={cn('h2', 'hover:text-blue-dark', 'hover:decoration-blue-dark/[.3]')}
                    >
                        {title ?? defaultFAQTitle}
                    </Link>
                </h2>
                <Accordion items={data} />
            </div>
        </If>
    )
}
