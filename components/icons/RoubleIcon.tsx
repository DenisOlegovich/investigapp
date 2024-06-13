import { ComponentPropsWithoutRef, forwardRef } from 'react'

const RoubleIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M6.972 21.333h2.746l-.004-3.626h4.373l.851-2.374H9.711L9.71 13.28h3.147c4.186 0 6.343-2.453 6.34-5.28-.003-2.827-2.166-5.333-6.353-5.333H6.95l.01 8.24H4.825l.003 2.373h2.133l.003 2.053H4.83l.003 2.374h2.133l.005 3.626Zm2.734-10.426L9.7 5.04h2.96c2.187 0 3.708 1.093 3.71 2.96.003 1.867-1.516 2.907-3.703 2.907h-2.96Z"
        />
    </svg>
))

RoubleIcon.displayName = 'RoubleIcon'

export default RoubleIcon
