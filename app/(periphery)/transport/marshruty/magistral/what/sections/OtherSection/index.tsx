import { ComponentPropsWithoutRef } from 'react'

import { Pages } from '@/constants'
import { navMenu } from '../../../constants'
import { cn } from '@/utils'
import InternalNavbar from '@/components/InternalNavbar'

import { styles } from '../../styles'

export default function OtherSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <InternalNavbar
            title="Смотреть другие разделы:"
            navMenu={navMenu}
            excludedPageHref={Pages.magistralWhat}
            className={cn(styles.wrapper, className)}
        />
    )
}
