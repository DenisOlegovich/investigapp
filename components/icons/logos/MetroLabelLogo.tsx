import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MetroLabelLogo = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 43 32"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M40.046 26.932 29.978.6l-8.48 15.38L13.018.6 2.95 26.932H0V30.9h15.2v-3.968h-2.275l2.215-6.563 6.358 10.83 6.358-10.83 2.219 6.563h-2.28V30.9H43v-3.968h-2.954Z"
            clipRule="evenodd"
        />
    </svg>
))

MetroLabelLogo.displayName = 'MetroLabelLogo'

export default MetroLabelLogo
