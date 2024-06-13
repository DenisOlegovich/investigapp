import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { workersStructure } from '../../constants/workersStructure'
import Accordion, { AccordionProps } from '@/components/Accordion'
import WorkerCard from '../../components/WorkerCard'

export default function Workers({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    const {
        detail: mainPersonDetail,
        subordinates: mainPersonDirectSubordinates = [],
        ...mainPerson
    } = workersStructure

    const directSubordinatesAccordionItems: AccordionProps['items'] = mainPersonDirectSubordinates.map(
        ({ detail: directSubordinateDetail, subordinates: subSubordinates, ...directSubordinate }) => ({
            title: <WorkerCard {...directSubordinate} />,
            content: subSubordinates ? (
                <>
                    <div className={cn('h-[0.1rem]', 'bg-grey/[.5]', 'mx-sm md:mx-lg')} />

                    {subSubordinates.map(({ detail, subordinates, ...subSubordinate }) => (
                        <WorkerCard
                            key={subSubordinate.id}
                            {...subSubordinate}
                            anatomy={{
                                container: 'md:pl-[3.6rem]',
                                image: cn('min-w-[4.8rem] md:min-w-[10rem]', 'h-[4.8rem] md:h-[10rem]'),
                            }}
                        />
                    ))}
                </>
            ) : null,
        })
    )

    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <WorkerCard
                {...mainPerson}
                className={styles.workerWrapper}
                anatomy={styles.mainPersonCardAnatomy}
            />

            <Accordion
                items={directSubordinatesAccordionItems}
                anatomy={{
                    itemWrapper: styles.workerWrapper,
                    expandButton: 'mt-sm md:mt-lg mr-sm md:mr-lg',
                    content: 'pt-0',
                }}
            />
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-sm md:gap-lg'),
    workerWrapper: cn('bg-grey-extra-light', 'rounded-[0.8rem]', 'overflow-hidden'),
    mainPersonCardAnatomy: {
        container: cn('flex-col', 'md:p-[4rem]'),
        image: cn('max-w-[20rem] md:max-w-[20rem]', 'max-h-[20rem] md:max-h-[20rem]'),
        name: 'text-3xl leading-2xs font-semibold md:text-7xl md:leading-base',
        jobTitle: cn('text-lg leading-xl font-normal md:text-4xl md:leading-lg', 'mt-sm md:mt-xl'),
    },
}
