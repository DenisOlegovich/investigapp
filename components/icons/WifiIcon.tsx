import { ComponentPropsWithoutRef, forwardRef } from 'react'

const WifiIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M2 9.413c2.354-2.941 5.962-4.83 9.999-4.83 4.042 0 7.647 1.889 10.001 4.83l-2.06 2.063c-1.82-2.42-4.698-3.996-7.941-3.996-3.244 0-6.12 1.575-7.936 3.996L2 9.413Zm10 .68a7.326 7.326 0 0 0-6.076 3.242l2.117 2.118C8.78 14 10.267 12.992 12 12.992c1.735 0 3.224 1.01 3.962 2.463l2.116-2.118A7.322 7.322 0 0 0 12 10.094Zm.001 5.58a2.595 2.595 0 0 0-2.31 1.432L12 19.417l2.308-2.312a2.587 2.587 0 0 0-2.308-1.431Z"
            clipRule="evenodd"
        />
    </svg>
))

WifiIcon.displayName = 'WifiIcon'

export default WifiIcon
