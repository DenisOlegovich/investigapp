import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CardStatusIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 74 48"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M56.65 40.5h-4l-10.7-15.1 4.1-2.9 8.7 12.3 18.2-24.6V7.8c0-4.3-3.5-7.8-7.7-7.8H8.75C4.45 0 .95 3.5.95 7.8v32.5c0 4.2 3.5 7.7 7.8 7.7h56.5c4.3 0 7.8-3.5 7.8-7.8V18.6l-16.4 21.9ZM14.95 27h-6v-7h6v7Zm0-10h-6v-7h6v7Zm7 10h-4V10h4v17Zm9 0h-6v-7h6v7Zm0-10h-6v-7h6v7Z"
        />
    </svg>
))

CardStatusIcon.displayName = 'CardStatusIcon'

export default CardStatusIcon
