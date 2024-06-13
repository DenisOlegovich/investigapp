import { PageProps } from '@/types'
import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'
import { photo } from '../constants'

import Link from '@/components/Link'
import ContentLimiter from '@/components/common/ContentLimiter'
import PhotobankGallery from './sections/PhotobankGallery'

export async function generateStaticParams() {
    // return Object.keys(photos).map((key) => ({ id: key }))
    return [{ id: photo.id }]
}

type Params = { id: number }

export default function Page({ params }: PageProps<Params>) {
    if (!params?.id) {
        return null
    }

    const { title, images } = photo

    return (
        <ContentLimiter className={cn('pt-[6.8rem] md:pt-[9.6rem]', 'pb-[4rem] sm:pb-[7rem] md:pb-[10rem]')}>
            <Link
                href={Pages.photobank}
                variant="simple_gray"
            >
                ← {PagesDisplayNames[Pages.photobank]}
            </Link>

            <h1 className={cn('h1', 'mt-2xs md:mt-lg')}>{title}</h1>
            {images && <PhotobankGallery images={images.map((img) => ({ ...img }))} />}
        </ContentLimiter>
    )
}
