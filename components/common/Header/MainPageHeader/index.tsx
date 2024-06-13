'use client'

import ContentLimiter from '@/components/common/ContentLimiter'
import { cn } from '@/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import HeaderContent from '../DefaultHeader/HeaderContent'
import HeaderContentMainPage from './HeaderContentMainPage'

enum Animate {
    hidden = 'hidden',
    visible = 'visible',
}

export default function MainPageHeader() {
    const { scrollY } = useScroll()
    const [animate, setAnimate] = useState(Animate.hidden)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()

        if (latest > previous || latest < 300) {
            setAnimate(Animate.hidden)
        } else {
            setAnimate(Animate.visible)
        }
    })

    return (
        <>
            <motion.header
                className={cn('fixed', 'z-[99]', 'w-full', 'bg-red')}
                style={{
                    y: '-100%',
                }}
                variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: '-100%', opacity: 0 } }}
                animate={animate}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
                <ContentLimiter>
                    <HeaderContent />
                </ContentLimiter>
            </motion.header>
            <HeaderContentMainPage />
        </>
    )
}
