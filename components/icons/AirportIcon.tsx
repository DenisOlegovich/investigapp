import { ComponentPropsWithoutRef, forwardRef } from 'react'

const AirportIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m14.04 10.16 5.963 2.65v2.06l-5.963-.875V10.16Zm-2.038 8.75-2.995 1.081v-2.084l2.013-1.004V13.84L4 14.87v-2.06l7.02-3.19V5.037c0-.566.428-1.03.982-1.03.528 0 1.006.464 1.006 1.03v11.865l1.988 1.004v2.084l-2.994-1.08Z"
            clipRule="evenodd"
        />
    </svg>
))

AirportIcon.displayName = 'AirportIcon'

export default AirportIcon
