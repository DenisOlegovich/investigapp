import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TgIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M18.701 5.153 4.526 10.648c-.57.255-.764.768-.138 1.046l3.637 1.162 8.792-5.463c.48-.342.972-.251.549.126l-7.552 6.873-.237 2.909c.22.449.622.451.879.228l2.089-1.987 3.578 2.693c.831.495 1.284.175 1.462-.731l2.347-11.171c.244-1.116-.171-1.607-1.23-1.18Z"
        />
    </svg>
))

TgIcon.displayName = 'TgIcon'

export default TgIcon
