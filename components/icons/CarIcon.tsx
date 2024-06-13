import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CarIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            fill="currentColor"
            d="M29.298 15h-2.501l-1.8-3.102c-.699-1.2-1.899-1.898-3.299-1.898h-7.6a3.86 3.86 0 0 0-3.302 1.898L8.996 15H6.498c-.4 0-.6.302-.6.6 0 .8.6 1.4 1.4 1.4h.8c-.102.302-.102.698-.102 1v7c0 .6.502 1 1 1h2c.6 0 1-.502 1-1v-2h12v2c0 .6.502 1 1 1h2c.6 0 1-.502 1-1v-7c0-.4-.098-.698-.098-1h.8c.8 0 1.4-.6 1.4-1.4 0-.345-.2-.6-.8-.6Zm-17.2-2.4c.4-.702 1.098-1.102 2-1.102h7.6c.8 0 1.6.4 2 1.102L25.6 16H10.196l1.902-3.4Zm.785 6.733c0 .502-.283.667-.785.667h-1.502c-1 0-1.701-.6-1.701-1.302V18.6c0-.302.2-.6.6-.6h2.702c.4 0 .682.267.682.667v.666h.004Zm14-.635c0 .702-.686 1.302-1.686 1.302h-1.502c-.502 0-.8-.2-.8-.698v-.6c0-.4.298-.702.6-.702h2.701c.502 0 .683.2.683.6v.098h.004Z"
        />
    </svg>
))

CarIcon.displayName = 'CarIcon'

export default CarIcon
