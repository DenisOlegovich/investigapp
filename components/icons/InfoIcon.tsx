import { ComponentPropsWithoutRef, forwardRef } from 'react'

const InfoIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            d="M8.02 13.882h2.562v7.658H2.04V2.04h19.5v19.5h-7.61V11.091H8.761l-.036.106-.855 2.477-.072.208h.221Zm2.72-9.138h-.158V8.62H13.93V4.744H10.74Z"
        />
    </svg>
))

InfoIcon.displayName = 'InfoIcon'

export default InfoIcon
