import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MotobikeHalfIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M56.297 44.7c1.1-.4 2.3-.6 3.5-.6 6.4 0 11.6 5.2 11.4 11.7 0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-3.1 1.2-5.8 3.1-7.9l1.6 3.4c-.8 1.2-1.3 2.8-1.3 4.4 0 4.6 3.7 8.3 8.3 8.3 4.6 0 8.3-3.7 8.3-8.3 0-4.6-3.7-8.3-8.3-8.3-.7 0-1.4.1-2.1.3l2.9 6.4c.4.8 0 1.8-.8 2.2-.2.2-.5.2-.7.2-.6 0-1.2-.4-1.5-1l-8.6-18.9-11.1 20h-25V38.8h10.8l11.7-11.2h9.5l-3.5-7.6h-6.8v-3.4h9l12.8 28.1Zm3.8-10.9h-3.5c-3.1 0-5.7-2.5-5.6-5.7 0-3.1 2.5-5.6 5.6-5.6h3.5v11.3Z"
            clipRule="evenodd"
        />
    </svg>
))

MotobikeHalfIcon.displayName = 'MotobikeHalfIcon'

export default MotobikeHalfIcon
