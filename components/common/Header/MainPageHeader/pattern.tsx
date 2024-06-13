import themes from '@/themes/tailwind/tokens'
import { SVGMotionProps, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

export default function Pattern(props: SVGMotionProps<SVGSVGElement>) {
    const { scrollY } = useScroll()
    const [animate, setAnimate] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 75) {
            setAnimate(true)
        } else {
            setAnimate(false)
        }
    })

    const anime = {
        hidden: { pathLength: 1, pathOffset: 1, display: 'none' },
        visible: (i: number) => {
            const delay = i * 0.5

            return {
                pathLength: 0,
                pathOffset: 0,
                display: 'block',
                transition: {
                    pathLength: {
                        delay,
                        duration: 0.75,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 5,
                    },
                    pathOffset: {
                        delay,
                        duration: 0.75,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: 5,
                    },
                },
            }
        },
    }

    return (
        <motion.svg
            style={{
                width: 'auto',
                height: '100%',
            }}
            width="952"
            height="323"
            viewBox="0 0 952 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate={animate ? 'visible' : 'hidden'}
            {...props}
        >
            <path
                d="M242.195 33.4357C304.744 33.4357 355.631 85.4329 355.631 149.355C355.631 213.265 304.744 265.258 242.203 265.258C179.658 265.258 128.784 213.26 128.784 149.36C128.784 75.1679 73 10.4482 0 10.4482"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M0 56.0932C49 56.0932 84.796 99.1179 84.796 147.577C84.796 236.055 156.252 308.056 244.121 308.056C331.974 308.056 403.459 236.038 403.459 147.56C403.459 71.7146 464.719 10 540.026 10C615.328 10 676.601 71.7146 676.601 147.56"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M37.8989 143.5C37.8989 121.478 20 101 0 101"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M950.599 10.1836C876 10.1836 813.841 72.4004 813.841 148.844C813.841 187.062 783.153 218.185 745.455 218.185"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M951.38 56.6291C900.5 55.4998 860.137 98.2287 860.137 149.351C860.137 213.221 809.022 265.179 746.183 265.26C683.334 265.179 632.245 213.212 632.245 149.351C632.245 98.2201 591.299 56.6161 540.977 56.6161C490.658 56.6161 449.717 98.2158 449.713 149.347C449.717 200.469 490.658 242.056 540.968 242.056"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M950.5 103.5C925 103.5 904.041 124.48 904.041 150.043C904.041 239.51 832.699 312.337 745.073 312.337C657.448 312.337 586.173 239.535 586.173 150.069"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M175.392 149.731C175.392 187.464 205.477 218.171 242.451 218.171C279.437 218.184 309.526 187.473 309.526 149.731C309.53 111.976 279.441 81.2358 242.451 81.2358"
                stroke="white"
                strokeWidth="20"
            />
            <path
                d="M540.065 104.053C515.413 104.053 495.361 124.529 495.361 149.712C495.361 174.886 515.413 195.367 540.065 195.367"
                stroke="white"
                strokeWidth="20"
            />
            <motion.path
                d="M540.065 104.053C515.413 104.053 495.361 124.529 495.361 149.712C495.361 174.886 515.413 195.367 540.065 195.367"
                stroke={themes.colors.troika}
                strokeWidth="20"
                variants={anime}
                custom={8}
            />
            <motion.path
                d="M950.5 103.5C925 103.5 904.041 124.48 904.041 150.043C904.041 239.51 832.699 312.337 745.073 312.337C657.448 312.337 586.173 239.535 586.173 150.069"
                stroke={themes.colors['drivers-green']}
                strokeWidth="20"
                variants={anime}
                custom={2}
            />
            <motion.path
                d="M242.195 33.4357C304.744 33.4357 355.631 85.4329 355.631 149.355C355.631 213.265 304.744 265.258 242.203 265.258C179.658 265.258 128.784 213.26 128.784 149.36C128.784 75.1679 73 10.4482 0 10.4482"
                stroke={themes.colors.velobike}
                strokeWidth="20"
                variants={anime}
                custom={7}
            />
            <motion.path
                d="M0 56.0932C49 56.0932 84.796 99.1179 84.796 147.577C84.796 236.055 156.252 308.056 244.121 308.056C331.974 308.056 403.459 236.038 403.459 147.56C403.459 71.7146 464.719 10 540.026 10C615.328 10 676.601 71.7146 676.601 147.56"
                stroke={themes.colors.violet.dark}
                strokeWidth="20"
                variants={anime}
                custom={6}
            />
            <motion.path
                d="M175.392 149.731C175.392 187.464 205.477 218.171 242.451 218.171C279.437 218.184 309.526 187.473 309.526 149.731C309.53 111.976 279.441 81.2358 242.451 81.2358"
                stroke={themes.colors.yellow.taxi}
                strokeWidth="20"
                variants={anime}
                custom={1}
            />
            <motion.path
                d="M37.8989 143.5C37.8989 121.478 20 101 0 101"
                stroke={themes.colors.red.DEFAULT}
                strokeWidth="20"
                variants={anime}
                custom={0}
            />
        </motion.svg>
    )
}
