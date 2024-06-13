import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BusFrontIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M26 12v-1c0-1.7-3-3-8-3s-8 1.4-8 3v1c-.6 0-1 .4-1 1v4.1c0 .6.4 1 1 1V27c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-1h10v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1v-8.9c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1ZM15 23.3c0 .5-.3.7-.8.7h-1.5c-1 0-1.7-.6-1.7-1.3v-.1c0-.4.2-.6.6-.6h2.7c.4 0 .7.3.7.7v.6Zm-2.7-5c-.5-.1-.8-.5-.8-.9v-5.5c0-.5.4-.9.9-.9h11.1c.5 0 .9.4.9.9V17.3c0 .4-.3.8-.8.9-1.4.5-3.3.8-5.6.8-2.2 0-4.2-.3-5.7-.7Zm12.715 4.4c0 .7-.715 1.3-1.715 1.3h-1.5c-.5 0-.8-.2-.8-.7v-.6c0-.4.3-.7.6-.7h2.826c.5 0 .589.2.589.6v.1Z"
        />
    </svg>
))

BusFrontIcon.displayName = 'BusFrontIcon'

export default BusFrontIcon
