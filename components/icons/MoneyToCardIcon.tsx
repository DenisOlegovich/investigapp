import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MoneyToCardIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 132 132"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M58.425 43.7h49.618c3.438 0 6.318 2.88 6.225 6.318v31.964c0 3.438-2.787 6.318-6.318 6.318H58.425c-3.438 0-6.319-2.787-6.319-6.318V67.858h24.995l-8.92 8.92 3.252 3.253 14.495-14.496L71.433 51.04l-3.252 3.252 8.92 8.92H52.106V50.018c0-3.438 2.88-6.318 6.319-6.318ZM37.89 48.346H23.302v14.867h-5.575v4.645h5.575v4.646h-5.575v4.646h5.575v6.504h4.646V77.15h10.22v-4.646h-10.22v-4.646h9.942a9.557 9.557 0 0 0 9.57-9.57v-.372a9.557 9.557 0 0 0-9.57-9.57Zm4.924 9.942c0 2.694-2.23 4.925-4.924 4.925h-9.942V52.992h9.942c2.694 0 4.924 2.23 4.924 4.924v.372Z"
            clipRule="evenodd"
        />
    </svg>
))

MoneyToCardIcon.displayName = 'MoneyToCardIcon'

export default MoneyToCardIcon
