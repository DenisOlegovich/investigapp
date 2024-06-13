import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ExchangeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            fillRule="evenodd"
            d="m15.5 5.252-.968.884-.002-.002L11.39 9l-.967-.884 2.454-2.238H3.867v-1.25h9.014l-2.45-2.242.967-.884L15.5 5.252Zm-13 7.496.967-.884.002.002L6.61 9l.968.884-2.454 2.238h9.009v1.25H5.118l2.45 2.242-.967.883-4.101-3.75Z"
            clipRule="evenodd"
        />
    </svg>
))

ExchangeIcon.displayName = 'ExchangeIcon'

export default ExchangeIcon
