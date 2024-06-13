import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ClockStrokeIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 71 71"
        fill="none"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#ClockStrokeIcon)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M.5 35.5c0 19.3 15.7 35 35 35s35-15.7 35-35-15.7-35-35-35-35 15.7-35 35Zm5 0c0-16.5 13.5-30 30-30s30 13.5 30 30-13.5 30-30 30-30-13.5-30-30ZM38 33V11.1c12.4 1.3 22 11.7 22 24.4C60 49 49 60 35.5 60S11 49 11 35.5c0-12.7 9.6-23.1 22-24.4V38h20v-5H38Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="ClockStrokeIcon">
                <path
                    fill="#fff"
                    d="M0 0h71v71H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

ClockStrokeIcon.displayName = 'ClockStrokeIcon'

export default ClockStrokeIcon
