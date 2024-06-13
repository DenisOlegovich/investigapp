import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MinibusHalfIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m46.65 21.4 12.3 12 12.8 8.3v14.9h-8.6c-1.2 3.4-3.9 6-7.7 6h-.5c-3.7 0-7-2.4-8.1-5.8-.3-.9-.5-1.8-.5-2.8 0-4.7 3.9-8.6 8.6-8.6v-3c-1.5 0-3.1.3-4.5.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.9-.9 4.5 0 1 .1 1.8.3 2.7h-31.4v-3.3h15.6V27.5h-15.6v-6.1h34.4Zm-13.6 6.2v10.2h22V35l-7.5-7.4h-14.5Zm22 31.6c1.8 0 3.5-1 4.4-2.5.5-.8.8-1.7.8-2.8 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 1.1.3 2 .8 2.8.9 1.5 2.5 2.5 4.4 2.5Zm-42.8-21.3h13v12.9h-13V37.9Z"
            clipRule="evenodd"
        />
    </svg>
))

MinibusHalfIcon.displayName = 'MinibusHalfIcon'

export default MinibusHalfIcon
