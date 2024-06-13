import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MoonIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1.09em"
        fill="none"
        viewBox="0 0 58 63"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M26.109 34.912C19.357 23.65 20.396 10.034 27.771 0c-4.155.512-8.206 1.843-12.05 4.095-15.27 9.01-20.256 28.36-11.219 43.41 9.142 15.05 28.775 19.965 44.045 11.058A31.265 31.265 0 0 0 58 50.065c-12.362 1.638-25.139-3.89-31.891-15.153Z"
        />
    </svg>
))

MoonIcon.displayName = 'MoonIcon'

export default MoonIcon
