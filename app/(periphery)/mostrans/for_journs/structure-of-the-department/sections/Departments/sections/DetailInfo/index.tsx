import { cn } from '@/utils'
import If from '@/components/If'
import { Department } from '../../types'
import { ComponentPropsWithoutRef } from 'react'
import Link from '@/components/Link'

interface DetailInfoProps
    extends Pick<
            Department,
            'detailInfo' | 'tasksOrganization' | 'mainActivities' | 'informationResources' | 'socialLinks'
        >,
        ComponentPropsWithoutRef<'div'> {}

export default function DetailInfo({
    detailInfo,
    tasksOrganization,
    mainActivities,
    informationResources,
    socialLinks,
    ...props
}: DetailInfoProps) {
    return (
        <div
            className={styles.content}
            {...props}
        >
            <If condition={detailInfo}>
                <p>{detailInfo}</p>
            </If>
            <If condition={tasksOrganization}>
                <p className={styles.title}>{tasksOrganization?.title}</p>
                {tasksOrganization?.content}
            </If>
            <If condition={mainActivities}>
                <p className={styles.title}>{mainActivities?.title}</p>
                {mainActivities?.content}
            </If>
            <If condition={informationResources?.length}>
                <p className={styles.title}>Официальные информационные ресурсы:</p>
                {informationResources?.map(({ resource, link }, idx) => (
                    <div key={idx}>
                        {resource && <p className="inline">{resource}</p>}{' '}
                        {link && (
                            <Link
                                type="external"
                                href={link.href}
                                className="inline"
                            >
                                {link.label}
                            </Link>
                        )}
                    </div>
                ))}
            </If>
            <If condition={socialLinks}>
                <p className={styles.title}>Официальные социальные сети:</p>
                {socialLinks?.map(({ link, label }, idx) => (
                    <Link
                        key={idx}
                        href={link}
                    >
                        {label}
                    </Link>
                ))}
            </If>
        </div>
    )
}

const styles = {
    content: cn('flex', 'flex-col', 'gap-xs md:gap-base', 'body-s md:body'),
    title: 'body-s_bold md:body_bold',
}
