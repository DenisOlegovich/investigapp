import { ComponentPropsWithoutRef, forwardRef } from 'react'

const PrintIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M18 4.006H6v1.999h12V4.006ZM3 17.996V7.003h18v10.991h-2V13H5v4.996H3Zm3-3.998h12v5.996H6v-5.996Z"
            clipRule="evenodd"
        />
    </svg>
))

PrintIcon.displayName = 'PrintIcon'

export default PrintIcon
