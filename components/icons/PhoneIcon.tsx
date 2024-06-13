import { ComponentPropsWithoutRef, forwardRef } from 'react'

const PhoneIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.5 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C8.02 3 8.58 3 9.7 3h4.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v11.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C15.98 21 15.42 21 14.3 21H9.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C6.5 19.48 6.5 18.92 6.5 17.8V6.2Zm9-1.2v12h-7V5h7ZM13 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
))

PhoneIcon.displayName = 'PhoneIcon'

export default PhoneIcon
