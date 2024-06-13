import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CoinIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="0.7em"
        viewBox="0 0 87 60"
        fill="none"
        {...props}
    >
        <g clipPath="url(#CoinIcon)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M87 19.89 84.463 15.7l-6.711 4.027C70.222 7.89 57.127 0 42.15 0 18.906 0 0 18.986 0 42.329A42.264 42.264 0 0 0 3.847 60H9.33c-2.782-5.26-4.42-11.26-4.42-17.671 0-20.63 16.697-37.397 37.24-37.397 13.176 0 24.716 6.904 31.346 17.26l-6.302 3.78C61.874 17.754 52.626 12.33 42.15 12.33c-16.533 0-29.873 13.397-29.873 30 0 6.575 2.128 12.74 5.729 17.671h15.55v-8.22h-4.91v-4.93h4.91v-3.288h-4.91V38.63h4.91V23.014h12.686c5.647 0 10.23 4.602 10.23 10.274 0 5.67-4.583 10.274-10.23 10.274h-7.775v3.287h15.55v4.932h-15.55V60h27.826c3.602-4.931 5.73-11.096 5.73-17.671 0-4.274-.9-8.302-2.456-11.918L87 19.891ZM77.67 31.07c1.145 3.534 1.718 7.315 1.718 11.26 0 6.41-1.637 12.41-4.42 17.671h5.484A42.265 42.265 0 0 0 84.3 42.33c0-4.85-.819-9.452-2.292-13.808l-4.338 2.548Zm-26.108 2.219a5.32 5.32 0 0 1-5.32 5.342h-7.775V27.945h7.775a5.32 5.32 0 0 1 5.32 5.343Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="CoinIcon">
                <path
                    fill="#fff"
                    d="M0 0h87v60H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

CoinIcon.displayName = 'CoinIcon'

export default CoinIcon
