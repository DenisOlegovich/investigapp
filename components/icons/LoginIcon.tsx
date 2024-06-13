import { ComponentPropsWithoutRef, forwardRef } from 'react'

const LoginIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M25 11.5c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7Zm-2.8 0c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            d="M5 31.5c.914-6.2 6.398-11 13-11s12.086 4.8 13 11h-2.844c-.914-4.7-5.18-8.2-10.156-8.2-4.977 0-9.242 3.5-10.156 8.2H5Z"
        />
    </svg>
))

LoginIcon.displayName = 'LoginIcon'

export default LoginIcon
