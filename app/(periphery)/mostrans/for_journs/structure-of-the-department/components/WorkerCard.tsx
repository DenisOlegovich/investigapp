import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { CustomImage } from '@/Images'
import { cn } from '@/utils'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { Pages } from '@/constants'

export type WorkerCardAnatomy = 'container' | 'image' | 'name' | 'jobTitle'

export interface Person {
    id: string
    fullName: string
    jobTitle: string
    image: CustomImage
    detail?: { title?: string; text?: string; list?: ReactNode }[]
}

type WorkerCardProps = ComponentPropsWithoutRef<'div'> &
    Person & {
        anatomy?: Partial<Record<WorkerCardAnatomy, string>>
    }

export default function WorkerCard({
    id,
    fullName,
    jobTitle,
    image,
    anatomy: {
        container: containerCustomProps = '',
        image: imageCustomProps = '',
        name: nameCustomProps = '',
        jobTitle: jobTitleCustomProps = '',
    } = {},
    detail,
    className,
    ...props
}: WorkerCardProps) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div className={cn('flex', 'items-start', 'gap-sm md:gap-lg', containerCustomProps)}>
                <div className={cn(styles.imageWrapper, imageCustomProps)}>
                    <Image
                        img={image}
                        alt=""
                        className={cn(styles.image)}
                    />
                    <Link
                        variant="unstyled"
                        href={`${Pages.departmentStructure}/person/${id}`}
                        className={styles.link}
                    />
                </div>

                <div>
                    <Link
                        variant="simple_black"
                        className={cn('h4', nameCustomProps)}
                        href={`${Pages.departmentStructure}/person/${id}`}
                    >
                        {fullName}
                    </Link>
                    <p className={cn(styles.jobTitle, jobTitleCustomProps, 'hidden md:block')}>{jobTitle}</p>
                </div>
            </div>
            <p className={cn(styles.jobTitle, jobTitleCustomProps, 'block md:hidden')}>{jobTitle}</p>
        </div>
    )
}

const styles = {
    wrapper: 'p-sm md:p-lg',
    imageWrapper: cn(
        'relative',
        'w-full',
        'h-full',
        'max-w-[4.8rem] md:max-w-[10rem]',
        'max-h-[4.8rem] md:max-h-[10rem]',
        'rounded-[50%]',
        'overflow-hidden'
    ),
    image: cn('size-full', 'object-cover'),
    jobTitle: cn('body-s', 'text-grey-dark', 'mt-xs md:mt-base'),
    iconBefore: cn('bg-grey-light', 'p-[.7rem]', 'rounded-[50%]', 'transition'),
    link: cn('absolute', 'inset-0', 'z-0', 'rounded-[50%]'),
}
