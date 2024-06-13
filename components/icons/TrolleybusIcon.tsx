import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TrolleybusIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M23.875 56.235a11.715 11.715 0 0 0-3.432 8.29c-.001.936.11 1.87.331 2.78H10.5v-39.84h16.642v-3.311h4.402l-9.168-13.337h4.117l9.168 13.337h4.164l-9.177-13.337h4.118l9.178 13.337h3.064v3.31H63.57l6.62 6.62v19.864h3.31v6.62h-3.31v6.624l-29.802.112a8.08 8.08 0 0 1-7.737 5.88h-.486a8.654 8.654 0 0 1 0-17.308v-3.072a11.716 11.716 0 0 0-8.29 3.431Zm39.695-22.15h-6.626v26.484h6.626V34.084Zm-16.562 0h6.626v26.484h-6.626V34.084Zm-14.886 35.7a5.24 5.24 0 0 0 4.454-2.479c.523-.832.8-1.796.797-2.78a5.253 5.253 0 0 0-5.254-5.248 5.256 5.256 0 0 0-4.45 8.028 5.241 5.241 0 0 0 4.453 2.479Zm-1.67-35.7h13.246v9.932H30.452v-9.933Zm-3.31 0H13.897v9.932h13.245v-9.933Z"
            clipRule="evenodd"
        />
    </svg>
))

TrolleybusIcon.displayName = 'TrolleybusIcon'

export default TrolleybusIcon
