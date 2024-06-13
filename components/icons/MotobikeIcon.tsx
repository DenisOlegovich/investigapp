import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MotobikeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 132 132"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M95.802 68.65c1.1-.4 2.3-.6 3.5-.6 6.4 0 11.6 5.3 11.6 11.7 0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-3.1 1.2-5.8 2.9-7.9l1.6 3.4c-.8 1.2-1.3 2.8-1.3 4.4 0 4.6 3.7 8.3 8.3 8.3 4.6 0 8.3-3.7 8.3-8.3 0-4.6-3.7-8.3-8.3-8.3-.7 0-1.4.1-2.1.3l2.9 6.4c.4.8 0 1.8-.8 2.2-.2.2-.5.2-.7.2-.6 0-1.2-.4-1.5-1l-8.6-18.9-11.8 20.3h-42.8c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5h6.8c-.8-3.7-4-6.4-8-6.4-4.6 0-8.3 3.7-8.3 8.3 0 4.6 3.7 8.3 8.3 8.3 3 0 5.6-1.6 7.1-4h3.8c-1.7 4.3-5.9 7.3-10.8 7.3-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 5.8 0 10.6 4.2 11.4 9.8h3.4c-.8-7.4-7-13-14.6-13-.4-.3-4-3.9-7.2-7.1v-5h16.4l10 10h11l11.7-11.3h9.5l-3.5-7.6h-6.8v-3.3h9l12.8 28Zm3.799-10.8h-3.5c-3.1 0-5.6-2.6-5.6-5.7s2.5-5.6 5.6-5.6h3.5v11.3Z"
            clipRule="evenodd"
        />
    </svg>
))

MotobikeIcon.displayName = 'MotobikeIcon'

export default MotobikeIcon
