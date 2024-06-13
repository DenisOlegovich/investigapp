import { CardProps } from '@/components/Card/types'
import { ExternalLinks, Pages, PagesDisplayNames } from '@/constants'
import { moscowCarsharing, avia, taxi, trucks, makeSuggestions } from '@/Images'
import { cn } from '@/utils'

import Image from '@/components/Image'

import { styles } from './styles'

export const cards: CardProps<'link'>[] = [
    {
        type: 'link',
        href: Pages.trucks,
        title: PagesDisplayNames[Pages.trucks],
        className: styles.cargo,
        body: (
            <Image
                img={trucks}
                alt="trucks"
                className={cn('h-full w-auto object-cover')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-[9px]', 'left-0', 'h-[108px] md:h-[126px]'),
        },
    },
    {
        type: 'link',
        href: Pages.taxiBusiness,
        title: PagesDisplayNames[Pages.taxiBusiness],
        className: styles.taxi,
        body: (
            <Image
                img={taxi}
                alt="taxi"
                className={cn('h-full w-auto object-cover')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-0', 'h-[102px] md:h-[120px]'),
        },
    },
    {
        type: 'link',
        href: Pages.moscowCarsharing,
        title: PagesDisplayNames[Pages.moscowCarsharing],
        className: styles.carsharing,
        body: (
            <Image
                img={moscowCarsharing}
                alt="moscow carsharing"
                className={cn('h-full w-auto object-cover')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'left-0', 'h-[138px] md:h-[190px] md:h-[]'),
        },
    },
    {
        type: 'link',
        href: Pages.avia,
        title: PagesDisplayNames[Pages.avia],
        className: styles.avia,
        body: (
            <Image
                img={avia}
                alt="avia"
                className={cn('h-full w-auto object-cover')}
            />
        ),
        anatomy: {
            body: cn(
                'absolute',
                'bottom-[-2.5rem] md:bottom-[1.5rem]',
                'right-[-1.5rem] md:right-[4.7rem] lg:right-[2.5rem]',
                'h-[96px] md:h-[75px] '
            ),
        },
    },
    {
        type: 'link',
        href: ExternalLinks.makeSuggestions,
        title: 'Внести предложения',
        className: styles.makeSuggestions,
        body: (
            <Image
                img={makeSuggestions}
                alt="make suggestions"
                className={cn('h-full w-auto object-contain')}
            />
        ),
        anatomy: {
            body: cn(
                'absolute',
                'bottom-[1.2rem] md:bottom-[1.1rem]',
                'right-[1.5rem] md:right-[4.2rem] lg:right-[2rem]',
                'h-[56px] md:h-[59px] '
            ),
        },
    },
]
