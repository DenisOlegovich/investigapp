import { ComponentPropsWithoutRef, forwardRef } from 'react'

const DzenIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M22.51 11.515h.005a.48.48 0 0 0 .478-.524 11.023 11.023 0 0 0-9.98-9.982.48.48 0 0 0-.524.484c.084 7.045 1.013 9.923 10.02 10.022Zm0 .973c-9.008.098-9.937 2.977-10.02 10.021a.48.48 0 0 0 .524.484 11.022 11.022 0 0 0 9.979-9.981.48.48 0 0 0-.484-.524ZM10.954 1.012a11.027 11.027 0 0 0-9.947 9.98.48.48 0 0 0 .478.523h.006c8.977-.103 9.904-2.98 9.989-10.02a.482.482 0 0 0-.526-.483ZM1.492 12.488c-.15-.017-.267.054-.358.154a.481.481 0 0 0-.126.369A11.028 11.028 0 0 0 11 22.993a.48.48 0 0 0 .48-.486c-.084-7.04-1.01-9.916-9.988-10.02Z"
        />
    </svg>
))

DzenIcon.displayName = 'DzenIcon'

export default DzenIcon
