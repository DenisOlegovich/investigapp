import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ExchangeVerticalIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m17.495 2.5-1.297 1.414.003.003-4.2 4.589 1.296 1.414 3.282-3.585V19.5h1.834V6.326L21.7 9.908l1.296-1.414L17.495 2.5Zm-10.993 19 1.296-1.414-.003-.003 4.201-4.589L10.7 14.08l-3.283 3.586V4.5H5.584v13.174l-3.287-3.582L1 15.508 6.502 21.5Z"
            clipRule="evenodd"
        />
    </svg>
))

ExchangeVerticalIcon.displayName = 'ExchangeVerticalIcon'

export default ExchangeVerticalIcon
