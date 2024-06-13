import { ComponentPropsWithoutRef, forwardRef } from 'react'

const NewWindowLinkIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 18 18"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M7.5 3h6a1.516 1.516 0 0 1 1.09.456 1.445 1.445 0 0 1 .41.998v5.092c0 .234-.059.456-.16.652A1.504 1.504 0 0 1 13.5 11H13v-1h.61c.214 0 .39-.168.39-.375v-5.25A.384.384 0 0 0 13.61 4H7.39a.384.384 0 0 0-.39.375V5H6v-.546C6 3.651 6.672 3 7.5 3Z"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.5 6c.828 0 1.5.651 1.5 1.455v5.09c0 .344-.121.658-.324.907A1.52 1.52 0 0 1 10.5 14h-6c-.828 0-1.5-.65-1.5-1.454V7.455C3 6.65 3.672 6 4.5 6h6ZM4 7.375C4 7.168 4.176 7 4.39 7h6.22c.214 0 .39.168.39.375v5.25a.384.384 0 0 1-.39.376H4.39a.384.384 0 0 1-.39-.375v-5.25Z"
            clipRule="evenodd"
        />
    </svg>
))

NewWindowLinkIcon.displayName = 'NewWindowLinkIcon'

export default NewWindowLinkIcon
