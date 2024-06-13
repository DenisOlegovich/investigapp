import { ListProps } from '@/components/List'
import { articles } from './articles'
import { cn } from '@/utils'
import Link from '@/components/Link'

export const articlesList: ListProps = {
    anatomy: { title: cn('flex', 'flex-col', 'gap-xs md:gap-base') },
    items: articles.map(
        ({
            originalLink,
            originalText,
            location,
            authors,
            researchCenter,
            translateLink,
            translateText,
            translateLinkVariant,
        }) => ({
            title: (
                <>
                    {originalLink && (
                        <Link
                            type="external"
                            href={originalLink}
                        >
                            {originalText}
                        </Link>
                    )}
                    {location && <p>{location}</p>}
                    {authors && <p>{authors}</p>}
                    {researchCenter && <p>{researchCenter}</p>}
                    {translateLink && (
                        <Link
                            type="external"
                            variant={translateLinkVariant || 'pseudo'}
                            href={translateLink}
                        >
                            {translateText}
                        </Link>
                    )}
                </>
            ),
        })
    ),
}
