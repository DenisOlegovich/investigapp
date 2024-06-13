import { ComponentPropsWithoutRef, forwardRef } from 'react'

const GooglePlayIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 17 18"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M.84.11a.73.73 0 0 0-.492-.1l9.356 8.963 2.623-2.5L8.42 4.31.84.109ZM0 .505C0 .459.004.415.01.376l9.333 8.94L.232 18C.09 17.95 0 17.81 0 17.61V.505Zm11.863 11.224-1.937 1.073-1.506.834-7.057 3.91 8.33-7.895 2.17 2.078Zm.487-.27-.031.018-2.264-2.168 2.725-2.584c.933.52 3.082 1.716 3.374 1.867.373.193.416.53-.027.776L12.35 11.46Z"
            clipRule="evenodd"
        />
    </svg>
))

GooglePlayIcon.displayName = 'GooglePlayIcon'

export default GooglePlayIcon
