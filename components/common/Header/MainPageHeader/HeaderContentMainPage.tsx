'use client'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import { headerLinks } from '../constants'
import { Videos } from '@/constants'
import { cn, resolvedSrc } from '@/utils'
import Link from '@/components/Link'
import Button from '@/components/Forms/Button'
import ContentLimiter from '@/components/common/ContentLimiter'
import LoginIcon from '@/components/icons/LoginIcon'
import SearchMenuIcon from '@/components/icons/SearchMenuIcon'
import MosTransportLogo from '@/components/icons/logos/MosTransportLogo'
import Pattern from './pattern'

export default function HeaderContentMainPage() {
    const src = resolvedSrc(Videos.mainHeader)

    const { scrollY } = useScroll()
    const [position, setPosition] = useState(false)
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        setThemeHandler(window.scrollY)
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setPositionHandler(latest)
        setThemeHandler(latest)
    })

    const setPositionHandler = (y: number) => {
        if (y > 150) {
            setPosition(true)
        } else {
            setPosition(false)
        }
    }

    const setThemeHandler = (y: number) => {
        if (y > 75) {
            setTheme(true)
        } else {
            setTheme(false)
        }
    }

    return (
        <>
            <div
                className={cn(
                    'z-[98]',
                    'w-full',
                    position ? 'absolute top-0 lg:top-[15rem]' : 'absolute lg:fixed top-0'
                )}
            >
                <ContentLimiter>
                    <div className={cn(styles.headerContent)}>
                        <Link
                            href="/"
                            variant="unstyled"
                        >
                            <MosTransportLogo
                                color={theme ? 'red' : 'white'}
                                className={cn(
                                    'mr-[2.4rem] ',
                                    'text-[4.3rem] md:text-[6.5rem] lg:text-[8.2rem] transition ease-in-out'
                                )}
                            />
                        </Link>
                        <div className={cn(styles.stack, 'gap-lg')}>
                            <Button
                                variant="unstyled"
                                className={cn(
                                    '[:hover&_path]:opacity-[1]',
                                    '[&_path]:transition [&_path]:ease [&_path]:delay-100'
                                )}
                            >
                                <SearchMenuIcon
                                    color={theme ? 'black' : 'white'}
                                    className={cn('text-[6rem]', 'transition')}
                                />
                            </Button>

                            <Button
                                size="s"
                                variant="secondary"
                                className="hidden md:block"
                            >
                                Войти
                            </Button>
                            <Button
                                variant="unstyled"
                                className="block md:hidden"
                            >
                                <LoginIcon
                                    className={cn('text-[3.6rem]', 'transition')}
                                    color={theme ? 'greyDark' : 'white'}
                                />
                            </Button>
                        </div>
                    </div>
                </ContentLimiter>
            </div>

            <ContentLimiter>
                <div className={cn('z-10 relative', 'pt-[11rem] md:pt-[20rem] lg:pt-[37rem]')}>
                    <h1
                        className={cn(
                            'hero md:h1 lg:hero',
                            theme ? 'text-black' : 'text-white',
                            'transition-all',
                            'mb-[2.6rem] md:mb-[6.4rem]',
                            'overflow-hidden'
                        )}
                    >
                        Московский <br />
                        транспорт
                    </h1>
                    <div
                        className={cn(
                            styles.stack,
                            'gap-xs md:gap-lg',
                            'mb-[2.6rem] md:mb-[6.4rem]',
                            'overflow-x-scroll',
                            'scrollbar-hide'
                        )}
                    >
                        {headerLinks.map(({ title, link }, idx) => (
                            <Link
                                key={idx}
                                href={link}
                                variant="unstyled"
                                className={cn(
                                    styles.link,
                                    theme
                                        ? 'text-grey-dark border-[#666f784d] hover:border-grey-dark'
                                        : 'text-white border-[#ffffff4d] hover:border-white'
                                )}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>
                    <div
                        className={cn(
                            'absolute right-[-6.4rem] md:right-[4rem] lg:right-[-6.4rem]',
                            'top-[11rem] md:top-[20rem] lg:top-[35rem]',
                            'w-[40%] sm:w-[50%] md:w-[40%] lg:w-[48%] xl:w-[57%]',
                            'h-[10rem] sm:h-[11rem] md:h-[18rem] lg:h-auto',
                            theme ? 'opacity-100' : 'opacity-80'
                        )}
                    >
                        <Pattern />
                    </div>
                </div>
            </ContentLimiter>

            <div
                className={cn(
                    styles.overlay,
                    theme ? 'opacity-0' : 'opacity-100',
                    'transition-all ease-in-out duration-500'
                )}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ maxWidth: 'none', width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source
                        src={src}
                        type="video/mp4"
                    />
                </video>
            </div>
        </>
    )
}

const styles = {
    overlay: cn('fixed top-0 left-0 right-0 bottom-0 -z-[100] overflow-hidden'),
    headerContent: cn('flex justify-between items-center pt-[3rem]'),
    stack: cn('flex items-center'),
    link: cn('h4 lg:h3', 'transition', 'border-b-[1px]'),
}
