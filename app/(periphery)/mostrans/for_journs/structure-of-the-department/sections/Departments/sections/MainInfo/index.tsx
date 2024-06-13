import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import Link from '@/components/Link'
import If from '@/components/If'
import { Department } from '../../types'

interface MainInfoProps
    extends Pick<
            Department,
            | 'organization'
            | 'mainPerson'
            | 'description'
            | 'postalAddress'
            | 'workingTime'
            | 'emails'
            | 'pressServiceEmail'
            | 'phoneSection'
            | 'phoneMedia'
        >,
        ComponentPropsWithoutRef<'div'> {}

export default function MainInfo({
    organization,
    mainPerson,
    description,
    postalAddress,
    workingTime,
    emails,
    pressServiceEmail,
    phoneSection,
    phoneMedia,
    ...props
}: MainInfoProps) {
    return (
        <div {...props}>
            <Link
                href={organization.link}
                variant="simple_black"
                type="new-window"
                className={styles.organization}
            >
                {organization.title}
            </Link>
            <div className={styles.content}>
                <p className={styles.title}>{mainPerson.jobTitle}</p>
                <p>{mainPerson.fullName}</p>
                {description}

                <p className={styles.title}>Почтовый адрес:</p>
                <p>{postalAddress.location}</p>
                {postalAddress.subwayStation}

                <If condition={workingTime}>
                    <p className={styles.title}>Режим работы:</p>
                    <p>{workingTime}</p>
                </If>

                <If condition={emails}>
                    <p className={styles.title}>Электронная почта:</p>
                    <div className={cn('flex', 'flex-wrap', 'gap-[.4rem]')}>
                        {emails?.map(({ link, label }, idx) => (
                            <span key={idx}>
                                <Link href={`mailto:${link}`}>{link}</Link>
                                &nbsp;
                                {label && <span>{label}</span>}
                            </span>
                        ))}
                    </div>
                </If>

                <If condition={pressServiceEmail}>
                    <p className={styles.title}>Электронная почта пресс-службы:</p>
                    <Link href={`mailto:${pressServiceEmail}`}>{pressServiceEmail}</Link>
                </If>

                <If condition={phoneSection}>
                    <p className={styles.title}>{phoneSection.title}</p>
                    <div className={cn('flex', 'flex-wrap', 'gap-[.4rem]')}>
                        {phoneSection.phones.map(({ number, label }, idx) => (
                            <span key={idx}>
                                <Link
                                    href={`tel:${number}`}
                                    className="inline"
                                >
                                    {number}
                                </Link>
                                &nbsp;
                                <span>{label}</span>
                            </span>
                        ))}
                    </div>
                </If>

                <If condition={phoneMedia}>
                    <p className={styles.title}>Телефон для представителей СМИ:</p>
                    <Link href={`mailto:${phoneMedia}`}>{phoneMedia}</Link>
                </If>
            </div>
        </div>
    )
}

const styles = {
    organization: cn('h3', 'inline-block', 'mb-lg md:mb-xl'),
    content: cn('flex', 'flex-col', 'gap-xs md:gap-base'),
    title: 'body-s_bold md:body_bold',
}
