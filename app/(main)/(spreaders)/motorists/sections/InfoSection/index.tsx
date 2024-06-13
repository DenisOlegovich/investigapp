import Card from '@/components/Card'
import Link from '@/components/Link'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { questions, rows } from './constants'

const heading = 'Полезная информация'

export default function InfoSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem] md:mb-[4.8rem]')}>{heading}</h2>
            <div className={cn('grid', 'gap-sm md:gap-lg')}>
                <div
                    className={cn(
                        'md:h-[40.8rem]',
                        'grid',
                        'grid-cols-1 md:grid-cols-2',
                        'gap-sm md:gap-base lg:gap-lg'
                    )}
                >
                    {rows.first.map((card, idx) => (
                        <Card
                            key={idx}
                            {...card}
                        />
                    ))}
                </div>
                <div
                    className={cn(
                        'md:min-h-[19.2rem]',
                        'grid',
                        'grid-cols-1 md:grid-cols-6',
                        'gap-sm md:gap-base lg:gap-lg'
                    )}
                >
                    {rows.seconds.map((card, idx) => (
                        <Card
                            key={idx}
                            {...card}
                        />
                    ))}
                    <div className={cn('mr-auto', 'col-span-1 md:col-span-6 lg:col-span-2')}>
                        {questions.map(({ title, href }, idx) => (
                            <Link
                                key={idx}
                                variant="simple_black"
                                href={href}
                                className={cn('h5')}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
