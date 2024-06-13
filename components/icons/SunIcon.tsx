import { ComponentPropsWithoutRef, forwardRef } from 'react'

const SunIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            fill="#F7CD30"
            stroke="#E5AE44"
            strokeWidth={0.5}
            d="M16.404 26.25h4.192L18.5 30.44l-2.096-4.19ZM24.75 18a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Zm-8.346-8.25L18.5 5.559l2.096 4.19h-4.192Zm14.037 7.75-4.191 2.095v-4.19l4.191 2.095ZM9.75 15.404v4.191L5.559 17.5l4.191-2.096Zm12.955-4.366 4.446-1.482-1.482 4.445-2.964-2.963ZM11.038 22.705l2.964 2.964-4.446 1.481 1.482-4.445Zm14.63-.707 1.483 4.445-4.445-1.482 2.963-2.963ZM14.003 10.331l-2.964 2.963L9.556 8.85l4.446 1.482Z"
        />
    </svg>
))

SunIcon.displayName = 'SunIcon'

export default SunIcon
