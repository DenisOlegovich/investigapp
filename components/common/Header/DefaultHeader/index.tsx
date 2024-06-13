'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import ContentLimiter from '@/components/common/ContentLimiter'
import { cn } from '@/utils'
import { useState } from 'react'
import HeaderContent from './HeaderContent'

enum Animate {
    hidden = 'hidden',
    visible = 'visible',
}

export default function DefaultHeader() {
    const { scrollY } = useScroll()
    const [animate, setAnimate] = useState(Animate.visible)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()

        if (latest > previous && latest > 150) {
            setAnimate(Animate.hidden)
        } else {
            setAnimate(Animate.visible)
        }
    })

    return (
        <motion.header
            className={cn('sticky top-0', 'z-[99]', 'w-full', 'bg-red')}
            variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
            animate={animate}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
            <ContentLimiter>
                <HeaderContent />
            </ContentLimiter>
        </motion.header>
    )
}
