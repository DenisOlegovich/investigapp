import { ComponentPropsWithoutRef, forwardRef } from 'react'

const DocIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1.3em"
        fill="none"
        viewBox="0 0 38 49"
        ref={ref}
        {...props}
    >
        <g
            fillRule="evenodd"
            clipPath="url(#DocIcon)"
            clipRule="evenodd"
        >
            <path
                fill="currentColor"
                d="M26.968 8.207c0 1.593 1.226 2.818 2.82 2.818H38V46.55A2.458 2.458 0 0 1 35.548 49H2.452A2.458 2.458 0 0 1 0 46.55V2.45A2.458 2.458 0 0 1 2.452 0h24.516v8.207ZM30.645 9.8H38L28.194 0v7.35a2.458 2.458 0 0 0 2.451 2.45Z"
            />
        </g>
        <defs>
            <clipPath id="DocIcon">
                <path
                    fill="#fff"
                    d="M0 0h38v49H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

DocIcon.displayName = 'DocIcon'

export default DocIcon
