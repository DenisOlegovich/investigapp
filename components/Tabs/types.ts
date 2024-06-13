import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { LinkType } from '@/components/Link'

export interface ITab {
    tabId: string
    /** Название таба */
    title: string
    /** Класс активного таба, опциональный */
    activeClassName?: string
    path?: string
    Content?: ReactNode
    linkType?: LinkType
}

export type TabAnatomy = 'tabList' | 'tab' | 'activeTab' | 'content' | 'select'

export interface TabsProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
    /** Список табов */
    tabs: ITab[]
    onChange?: (id: string) => void
    /** Таб, который по дефолту активен */
    defaultTab?: string | number
    variant?: 'default' | 'menuTabs'
    /** Максимально допустимая длина title в мобильной версии. По по дефолту 15. */
    maxLengthStr?: number
    anatomy?: Partial<Record<TabAnatomy, string>>
}
