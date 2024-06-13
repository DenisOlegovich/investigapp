import { ContentDataKeys, ContentDataValues } from './types'
import { Pages, PagesDisplayNames } from '@/constants'
import { data } from './constants'
import { cn } from '@/utils'
import { mapContent } from './utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import GridContentLayout from '@/components/common/GridContentLayout'
import H1 from '@/components/common/typography/H1'

import { styles } from './styles'

export default function Page() {
    return (
        <ContentLimiter>
            <GridContentLayout>
                <H1>{PagesDisplayNames[Pages.denmostransporta]}</H1>
                <div className={cn(styles.aboutTextWrapper, styles.textWrapper)}>
                    <p className={styles.aboutText}>
                        День Московского транспорта — это новый большой городской праздник, который проводится ежегодно
                        во вторую субботу июля. В этом году он прошел 13 июля.
                    </p>
                    <p className={styles.aboutText}>
                        В общегородском празднике приняли участие около 200 тысяч человек.
                    </p>
                </div>

                <div className={styles.contentWrapper}>
                    {data.map((contentItem) =>
                        (Object.keys(contentItem) as ContentDataKeys[]).map((contentType) =>
                            mapContent[contentType](contentItem[contentType] as ContentDataValues)
                        )
                    )}
                </div>
            </GridContentLayout>
        </ContentLimiter>
    )
}
