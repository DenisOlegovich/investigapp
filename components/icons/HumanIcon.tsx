import { ComponentPropsWithoutRef, forwardRef } from 'react'

const HumanIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 36 36"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.05 8.15c-.1 1-.8 1.7-1.8 1.7s-1.8-.8-1.7-1.8c.1-1 .8-1.7 1.8-1.7 1 .1 1.7.8 1.7 1.8Zm-.3 11.8 3.1 2.3 1.3 7-1.9.4-1.4-6.1-4.1-2.9c-.7-.4-1-1.1-1-1.9v-4.5l-1.6 1.9-.8 3.5h-1.6l.5-4.4 3.6-3.9h2.6c.7 0 1.3.6 1.3 1.3v7.3Zm-7.5 8 1.5 1.2 4.6-5.6-1.4-1.2-4.7 5.6Zm8.9-14v2.5l1.9 1.5 1.2-1.5-3.1-2.5Z"
            clipRule="evenodd"
        />
    </svg>
))

HumanIcon.displayName = 'HumanIcon'

export default HumanIcon
