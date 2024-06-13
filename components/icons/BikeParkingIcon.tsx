import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BikeParkingIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M17.948 10.702c0 1.8-1.6 3.2-3.4 3.2-1.8 0-3.3-1.5-3.2-3.4 0-1.8 1.6-3.3 3.4-3.2 1.8.1 3.3 1.6 3.2 3.4Zm-8.3 6.1h10c1.4 0 2.5 1.2 2.5 2.5v15.6h-8.8v17.8h-3.7v-17.8h-2.5v-15.6c0-1.3 1.1-2.5 2.5-2.5Zm10 20h-3.7v15.8h3.7v-15.8Zm21.9-1.6c.8-.2 1.6-.3 2.4-.3 4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9c0-2.4 1-4.7 2.7-6.4l.4-.4 1.1 2.8-.2.2c-.9 1.1-1.4 2.5-1.4 3.9 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2-.4 0-.8 0-1.2.1l2.5 5.5c.3.7 0 1.5-.7 1.8-.7.3-1.5 0-1.8-.7l-2.5-5.6-.2-.4-1-2.1-1.4-3.1-15.4 15v-3.9l3.8-3.7-1.8-1.8v-4l3.8 3.9 7-6.8h-10.8v-2.8h11.6l-2.2-4.8h-4.3v-2.7h6.1l6.2 13.6Z"
            clipRule="evenodd"
        />
    </svg>
))

BikeParkingIcon.displayName = 'BikeParkingIcon'

export default BikeParkingIcon
