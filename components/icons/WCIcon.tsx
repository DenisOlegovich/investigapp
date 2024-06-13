import { ComponentPropsWithoutRef, forwardRef } from 'react'

const WCIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 60 60"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M44.85 10.802c-.1 1.9-1.6 3.4-3.5 3.3-1.9-.1-3.4-1.6-3.3-3.5.1-1.9 1.6-3.4 3.5-3.3 1.9.1 3.4 1.6 3.3 3.5Zm-25.1 0c0 1.8-1.6 3.2-3.4 3.2-1.8-.1-3.3-1.6-3.2-3.4 0-1.9 1.6-3.3 3.4-3.3 1.8.1 3.3 1.6 3.2 3.5Zm-8.3 6.1h10c1.4 0 2.5 1.1 2.5 2.4v15.6h-8.8v17.8h-3.7v-17.8h-2.5v-15.6c0-1.3 1.1-2.4 2.5-2.4Zm9.999 19.9h-3.7v15.8h3.7v-15.8Zm24.9 7h-3.5v8.8h3.5v-8.8Zm-2.5-26.6c1.2 0 2.2.9 2.4 2.1l4.8 22.6h-11.1v10.8h-3.5v-10.8h-4.6l5-22.6c.1-1.2 1.1-2.1 2.4-2.1h4.6Z"
            clipRule="evenodd"
        />
    </svg>
))

WCIcon.displayName = 'WCIcon'

export default WCIcon
