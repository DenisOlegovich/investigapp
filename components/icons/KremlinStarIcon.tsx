import { ComponentPropsWithoutRef, forwardRef } from 'react'

const KremlinStarIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m9 3 1.347 4.146h4.36L11.18 9.708l1.347 4.146L9 11.292l-3.527 2.562L6.82 9.708 3.294 7.146h4.359L9 3Z"
        />
    </svg>
))

KremlinStarIcon.displayName = 'KremlinStarIcon'

export default KremlinStarIcon
