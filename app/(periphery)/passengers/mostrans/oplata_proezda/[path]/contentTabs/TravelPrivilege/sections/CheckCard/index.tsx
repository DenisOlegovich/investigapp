import { mapPublicServices } from '@/Images'
import Image from '@/components/Image'
import Link from '@/components/Link'
import CardStatusIcon from '@/components/icons/CardStatusIcon'
import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

export default function CheckCard({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <Link
                href={ExternalLinks.checkingCard}
                iconBefore={<CardStatusIcon className="h-[4.8rem] w-[7.4rem]" />}
                className={styles.checkReadiness}
            >
                Проверить готовность карты
            </Link>
            <article className={styles.publicService}>
                <Image
                    img={mapPublicServices}
                    alt="map"
                />
                <Link
                    href={ExternalLinks.myDocumentsMoscow}
                    className={styles.publicServiceLink}
                    type="external"
                >
                    Центры госуслуг «Мои&nbsp;документы»
                </Link>
            </article>
        </div>
    )
}

const styles = {
    checkReadiness: cn('flex', 'flex-col', 'gap-[3rem]', 'text-[1.8rem] md:text-[3rem]'),
    publicService: cn('relative', 'w-full', 'max-w-[31.1rem]', 'mt-[3.2rem] md:mt-[5.6rem]'),
    publicServiceLink: cn('before:block before:absolute before:inset-1', 'mt-xs'),
}
