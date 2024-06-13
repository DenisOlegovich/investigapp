import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ColoredRuStoreIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 19 18"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#ColoredRuStoreIcon)">
            <path
                fill="#07F"
                fillRule="evenodd"
                d="M8.64 18.01c-4.07 0-6.115 0-7.384-1.266C-.01 15.478-.01 13.451-.01 9.36v-.72c0-4.07 0-6.116 1.266-7.384C2.523-.01 4.55-.01 8.64-.01h.72c4.07 0 6.116 0 7.385 1.266C18.01 2.522 18.01 4.549 18.01 8.64v.72c0 4.07 0 6.116-1.266 7.384-1.267 1.268-3.294 1.266-7.385 1.266h-.72Z"
                clipRule="evenodd"
            />
            <path
                fill="#fff"
                d="M10.473 3.293a.872.872 0 0 0-.88.87V5.22l-2.209-.55a.872.872 0 0 0-1.084.843v1.053L4.111 6.02a.872.872 0 0 0-1.084.843v5.87c0 .5.34.933.825 1.053l3.497.872a.872.872 0 0 0 1.084-.843v-5.87c0-.358-.175-.682-.452-.88a.05.05 0 0 1 .006-.044.062.062 0 0 1 .069-.025c.46.14.898.61.943 1.203l.151 4.48c.004.15.105.278.246.325l1.227.305a.872.872 0 0 0 1.084-.843c.015-1.937.01-3.907.011-5.85a1.072 1.072 0 0 0-.24-.686 1.118 1.118 0 0 0-.189-.188c-.018-.018-.023-.045-.009-.065a.062.062 0 0 1 .069-.026c.46.14.9.61.943 1.203l.152 4.48a.348.348 0 0 0 .243.32l1.23.308A.872.872 0 0 0 15 11.119v-5.87c0-.5-.34-.933-.824-1.054l-3.498-.871a.878.878 0 0 0-.204-.027l-.001-.004Z"
            />
        </g>
        <defs>
            <clipPath id="ColoredRuStoreIcon">
                <path
                    fill="#fff"
                    d="M0 0h18v18H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

ColoredRuStoreIcon.displayName = 'ColoredRuStoreIcon'

export default ColoredRuStoreIcon
