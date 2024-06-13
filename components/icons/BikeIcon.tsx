import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BikeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M20.8 7.8c-.1 1-.8 1.7-1.8 1.7s-1.8-.8-1.7-1.8c.1-1 .8-1.7 1.8-1.7 1 .1 1.7.8 1.7 1.8Zm-2 3.5 1.2 2.5 2.6.7-.5 1.2-3-.4-1.6-2.2-2.1 3.1 3.5 2.8.1 6.8h-1.5l-.3-5.7-4.3-2.6c-.7-.4-.9-1.3-.5-2l2.8-4.4c.5-.8 1.4-1 2.2-.6l1.4.8Zm-8.3 9.8c1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2Zm0-1.3c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5Zm17.2 4.5c0-1.8-1.4-3.2-3.2-3.2-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2Zm-7.7 0c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5Z"
            clipRule="evenodd"
        />
    </svg>
))

BikeIcon.displayName = 'BikeIcon'

export default BikeIcon
