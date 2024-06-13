import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TramIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 84 84"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M13.79 60.122a7.119 7.119 0 0 1 6.633-6.632h16.59a7.554 7.554 0 0 1 6.632 6.632v3.319h26.539v-6.635H73.5v-6.632h-3.316V30.275l-6.632-6.632h-22.13l5.54-3.316v-3.316l-10.69-6.398h-1.82L23.744 17.01v3.316l5.55 3.316H10.5v39.798h3.29v-3.319Zm43.127-29.848h6.637v26.53h-6.637v-26.53Zm-3.316 0h-6.637v26.53H53.6v-26.53Zm-9.957 0v9.95h-13.27v-9.95h13.27Zm-8.282-16.231-7.236 4.626 7.236 4.626 7.236-4.626-7.236-4.626Zm-21.57 16.23H27.06v9.951H13.79v-9.95Zm4.775 27.971a4.986 4.986 0 0 1 8.5 3.183 4.988 4.988 0 0 1-9.858 1.362 5.151 5.151 0 0 1-.1-1.017 4.986 4.986 0 0 1 1.458-3.528Zm13.28 0a4.986 4.986 0 0 1 8.501 3.183 4.988 4.988 0 0 1-9.858 1.362 5.144 5.144 0 0 1-.1-1.017 4.986 4.986 0 0 1 1.458-3.528ZM10.5 70.072h59.684v3.316H10.5V70.07Z"
            clipRule="evenodd"
        />
    </svg>
))

TramIcon.displayName = 'TramIcon'

export default TramIcon
