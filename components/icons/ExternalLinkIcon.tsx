import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ExternalLinkIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M12.514 4H7.788a.686.686 0 0 0 0 1.373h3.146L4.2 12.108a.686.686 0 0 0 .97.97l6.657-6.659v2.995a.686.686 0 1 0 1.372 0V4.686A.686.686 0 0 0 12.514 4Z"
        />
    </svg>
))

ExternalLinkIcon.displayName = 'ExternalLinkIcon'

export default ExternalLinkIcon
