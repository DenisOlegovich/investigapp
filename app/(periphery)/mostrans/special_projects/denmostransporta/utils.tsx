import { ContentDataValues } from './types'
import { CustomImage } from '@/Images'
import { resolvedSrc } from '@/utils'
import Quote, { QuoteProps } from '@/components/Quote'
import Image from '@/components/Image'

import { styles } from './styles'

export const mapContent = {
    text: (textContent: ContentDataValues) => (
        <div className={styles.textWrapper}>
            {textContent?.map((text, idx) => (
                <p key={idx}>{text as string}</p>
            ))}
        </div>
    ),
    image: (imageContent: ContentDataValues) =>
        imageContent?.map((img, idx) => (
            <Image
                key={idx}
                img={img as CustomImage}
                alt="image"
            />
        )),
    video: (videoContent: ContentDataValues) =>
        videoContent?.map((videoSrc, idx) => (
            <video
                key={idx}
                controls
            >
                <source
                    src={resolvedSrc(videoSrc as string)}
                    type="video/mp4"
                />
            </video>
        )),
    quote: (quoteContent: ContentDataValues) =>
        quoteContent?.map((quoteProps, idx) => (
            <Quote
                key={idx}
                {...(quoteProps as QuoteProps)}
            />
        )),
}
