import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CalendarStrokeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeWidth={2}
            d="M24.116 5.87H7.884a3 3 0 0 0-3 3V24a3 3 0 0 0 3 3h16.232a3 3 0 0 0 3-3V8.87a3 3 0 0 0-3-3Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
            d="M10.493 4.869V2.666M6.087 12.578h19.826M21.507 4.869V2.666"
        />
    </svg>
))

CalendarStrokeIcon.displayName = 'CalendarStrokeIcon'

export default CalendarStrokeIcon
