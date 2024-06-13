import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CalendarIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 4H4v4h4V4Zm6 0h-4v4h4V4Zm2 0h4v4h-4V4Zm-8 6H4v4h4v-4Zm2 0h4v4h-4v-4Zm-2 6H4v4h4v-4Zm2 0h4v4h-4v-4Zm10-6h-4v4h4v-4Z"
            clipRule="evenodd"
        />
    </svg>
))

CalendarIcon.displayName = 'CalendarIcon'

export default CalendarIcon
