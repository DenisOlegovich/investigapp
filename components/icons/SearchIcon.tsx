import { ComponentPropsWithoutRef, forwardRef } from 'react'

const SearchIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 18 18"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m16 14.947-.885.835-.252.251-4.21-4.194a5.457 5.457 0 0 1-3.185 1.018C4.448 12.857 2 10.419 2 7.412s2.447-5.445 5.468-5.445c3.019 0 5.466 2.438 5.466 5.445a5.409 5.409 0 0 1-1.147 3.339L16 14.947Zm-5.408-5.121c.535-.686.83-1.526.83-2.414a3.946 3.946 0 0 0-3.955-3.938 3.946 3.946 0 0 0-3.954 3.938 3.946 3.946 0 0 0 3.954 3.938c.892 0 1.634-.216 2.424-.826.306-.237.7-.698.7-.698Z"
            clipRule="evenodd"
        />
    </svg>
))

SearchIcon.displayName = 'SearchIcon'

export default SearchIcon
