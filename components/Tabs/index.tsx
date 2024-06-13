'use client'

import If from '@/components/If'
import Link from '@/components/Link'
import Select from '@/components/Forms/Select'
import { SelectOption } from '@/components/Forms/Select/interfaces'
import { cn } from '@/utils'
import { useCallback, useMemo, useState } from 'react'
import { TabsProps } from './types'
import { getLongestStr } from './utils/getLongestStr'

export default function Tabs({
    tabs,
    defaultTab = 0,
    onChange,
    variant = 'default',
    maxLengthStr = 15,
    anatomy: {
        tabList: tabListCustomProps = '',
        tab: tabCustomProps = '',
        content: contentCustomProps = '',
        activeTab: activeTabCustomProps = '',
        select: selectProps = '',
    } = {},
    ...restProps
}: TabsProps) {
    const { className = '', ...otherProps } = restProps

    const [activeTab, setActiveTab] = useState(typeof defaultTab === 'string' ? defaultTab : tabs[defaultTab]?.tabId)

    const isHasLongestStr = useMemo(() => {
        const longestStr = getLongestStr(tabs)

        return longestStr.length > maxLengthStr
    }, [tabs, maxLengthStr])

    const options = useMemo(
        () =>
            tabs.map<SelectOption>(({ tabId, title, path, linkType }) => ({
                value: tabId,
                label: path ? (
                    <Link
                        href={path}
                        type={linkType}
                        scroll={false}
                        variant="unstyled"
                        className="block"
                    >
                        {title}
                    </Link>
                ) : (
                    title
                ),
            })),
        [tabs]
    )

    const changeTabHandler = useCallback(
        (id?: string | string[]) => {
            if (typeof id === 'string') {
                setActiveTab(id)
                onChange?.(id)
            }
        },
        [onChange]
    )

    return (
        <div
            className={cn({ [styles.menuTabWrapper]: variant === 'menuTabs' }, className)}
            {...otherProps}
        >
            <Select
                type="fill"
                instanceId="tabs"
                options={options}
                initialValue={activeTab}
                onChange={changeTabHandler}
                className={cn(
                    'mb-lg md:mb-3xl',
                    'hidden',
                    {
                        'block md:hidden': variant === 'default' && tabs.length > 3,
                    },
                    selectProps
                )}
            />

            <div
                className={cn(
                    {
                        [styles.tabList]: variant === 'default',
                        [styles.tabListLessThree]: variant === 'default' && !(tabs.length > 2 || isHasLongestStr),
                        [styles.tabListMoreThree]: variant === 'default' && tabs.length > 3,
                    },
                    {
                        [styles.menuTabList]: variant === 'menuTabs',
                    },
                    tabListCustomProps
                )}
            >
                {tabs.map(({ tabId, title, path, linkType, activeClassName = 'bg-midnight' }) => {
                    const tabClassName = cn(
                        {
                            [styles.tab]: variant === 'default',
                        },
                        {
                            [styles.menuTab]: variant === 'menuTabs',
                            [styles.menuTabUnchecked]: variant === 'menuTabs' && activeTab !== tabId,
                            [styles.menuTabChecked]: variant === 'menuTabs' && activeTab === tabId,
                        },
                        {
                            [cn('text-white', activeTabCustomProps, activeClassName)]: activeTab === tabId,
                            'hover:bg-grey-extra-light': activeTab !== tabId,
                        },
                        tabCustomProps
                    )

                    return (
                        <If
                            key={tabId}
                            condition={path}
                            Else={
                                <button
                                    key={tabId}
                                    onClick={() => changeTabHandler(tabId)}
                                    className={tabClassName}
                                >
                                    {title}
                                </button>
                            }
                        >
                            <Link
                                key={tabId}
                                variant="unstyled"
                                href={path ?? ''}
                                type={linkType}
                                scroll={false}
                                className={tabClassName}
                            >
                                {title}
                            </Link>
                        </If>
                    )
                })}
            </div>

            <div className={contentCustomProps}>{tabs.find(({ tabId }) => tabId === activeTab)?.Content}</div>
        </div>
    )
}

const styles = {
    menuTabWrapper: cn('flex', 'flex-col md:flex-row', 'space-x-[2.4rem]'),
    tabList: cn('flex flex-col md:flex-row', 'w-full sm:w-fit overflow-hidden', 'mb-xl md:mb-3xl rounded-[0.4rem]'),
    tabListLessThree: 'flex-row',
    tabListMoreThree: cn('hidden md:flex', 'flex-wrap', 'bg-grey-light'),
    tab: cn(' p-[0.8rem_1.2rem] text-black ', 'bg-grey-light', 'transition duration-200'),
    menuTab: cn('w-fit p-[0.8rem] text-black md:rounded-[0.8rem] max-md:whitespace-nowrap', ' text-left'),
    menuTabUnchecked: cn('max-md:[&:not(:first-child)]:border-l', 'max-md:border-[#A2A9B180]'),
    menuTabChecked: cn(
        'max-md:[&:not(:first-child)]:border-l max-md:border-transparent max-md:[&+*]:border-transparent'
    ),
    menuTabList: cn(
        'flex flex-row md:flex-col md:space-y-[0.8rem] max-md:overflow-x-scroll',
        'w-full md:w-fit',
        'mb-xl md:mb-3xl',
        'max-md:bg-grey-extra-light',
        'max-md:rounded-[0.8rem]'
    ),
}
