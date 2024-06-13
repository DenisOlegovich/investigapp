import { cn, getExt } from '@/utils'
import { CustomImage } from '@/Images'
import { CardProps, CardType } from '@/components/Card/types'
import Card from '@/components/Card'
import Link from '@/components/Link'
import Image from '@/components/Image'
import If from '@/components/If'

export type PresentationCardAnatomy = 'container' | 'image'

export interface PresentationCardProps
    extends Pick<CardProps<'link' | 'box'>, 'href' | 'extra' | 'className' | 'isExternal'> {
    type?: CardType
    img: CustomImage
    withDocInfo?: boolean
    anatomy?: Partial<Record<PresentationCardAnatomy, string>>
}

export default function PresentationCard({
    type = 'link',
    href,
    img,
    extra,
    withDocInfo,
    isExternal = true,
    anatomy: { container: containerCustomProps = '', image: imageCustomProps = '' } = {},
    ...props
}: PresentationCardProps) {
    return (
        <Card
            type={type}
            isExternal={isExternal}
            href={href}
            body={
                <Image
                    img={img}
                    alt=""
                    className={cn(styles.image, imageCustomProps)}
                />
            }
            extra={
                <If
                    condition={withDocInfo}
                    Else={
                        <Link
                            href={href ?? '#'}
                            type={isExternal ? 'external' : 'regular'}
                        >
                            {extra}
                        </Link>
                    }
                >
                    <Link
                        href={href ?? '#'}
                        type={isExternal ? 'external' : 'regular'}
                    >
                        {extra}
                    </Link>
                    <p className={styles.docInfo}>{getExt(href ?? '#')}</p>
                </If>
            }
            anatomy={{
                container: cn(styles.cardContainer, containerCustomProps),
                body: styles.cardBody,
            }}
            {...props}
        />
    )
}

const styles = {
    cardContainer: cn('p-0 md:p-0', 'gap-xs md:gap-lg', 'shadow-none hover:shadow-none'),
    cardBody: cn('w-full'),
    image: cn('w-full', 'h-[17.8rem] md:h-[26rem]', 'rounded-lg', 'object-cover'),
    docInfo: cn('mt-xs', 'text-grey-dark', 'uppercase'),
}
