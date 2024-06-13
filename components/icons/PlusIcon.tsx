import { ComponentPropsWithoutRef, forwardRef } from 'react'

const PlusIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 25 24"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.007 4.333h-2L11.014 11H4.348l.002 2h6.667l.008 6.667h2L13.017 13h6.666l-.002-2h-6.667l-.007-6.667Z"
            clipRule="evenodd"
        />
    </svg>
))

PlusIcon.displayName = 'PlusIcon'

export default PlusIcon
