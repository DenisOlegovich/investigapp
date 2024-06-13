import { ComponentPropsWithoutRef, forwardRef } from 'react'

const PermissionCheckIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 84 84"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M47 65.1h4l15.5-20.9V71h-35V57h-14V13h49v22.8L49.1 59.4l-8.7-12.3-4.1 2.9L47 65.1ZM58.5 21h-33v5h33v-5Zm-33 9v5h33v-5h-33Zm4 29v12l-12-12h12Z"
            clipRule="evenodd"
        />
    </svg>
))

PermissionCheckIcon.displayName = 'PermissionCheckIcon'

export default PermissionCheckIcon
