import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ClimateControl = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 60 60"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M31.85 26v16.2l5.8 6.4-1.9 2-3.9-3.6-.2 6h-3.3l-.2-6-3.9 3.6-2-2 5.9-6.4v-9l-3.3 1.9-4.5 2.6-2.6 8.3-2.7-.7 1.1-5.2-5.3 2.8-1.6-2.8 5.1-3.2-5.1-1.6.8-2.7 8.4 1.9 4.5-2.6 3.4-1.9-.8-.4-7.1-4.1-8.4 1.9-.8-2.7 5.1-1.6-5.1-3.2 1.6-2.8 5.3 2.8-1.1-5.2 2.7-.7 2.6 8.3 7.1 4.1.7.4v-9l-5.9-6.4 2-2 3.9 3.6.2-6h3.3l.2 6 3.9-3.6 1.9 2-5.8 6.4V26Zm2.3 3.8.2-.2 7.2-4.1 8.4 1.9.7-2.7-5-1.6 5.1-3.2-1.7-2.8-5.3 2.8 1.1-5.2-2.7-.7-2.5 8.3-5.5 3.2v4.3Zm16.5 5.5-.7-2.7-8.4 1.9-4.6-2.6-2.8-1.7v4.3l1 .6 4.5 2.6 2.5 8.3 2.7-.7-1.1-5.2 5.3 2.8 1.7-2.8-5.1-3.2 5-1.6Z"
            clipRule="evenodd"
        />
    </svg>
))

ClimateControl.displayName = 'ClimateControl'

export default ClimateControl
