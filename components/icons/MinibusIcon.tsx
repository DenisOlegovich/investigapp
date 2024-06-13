import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MinibusIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m89.95 45.4 12.299 12 12.8 8.3v14.9h-8.6c-1.2 3.4-3.9 6-7.7 6h-.5c-3.7 0-7-2.4-8.1-5.8-.3-.9-.5-1.8-.5-2.8 0-4.7 3.9-8.6 8.6-8.6v-3.1c-1.5 0-3.1.3-4.5.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.9-.9 4.5 0 1 .1 1.8.3 2.7h-42.9c-1.2 3.4-3.9 6-7.7 6h-.5c-3.7 0-7-2.4-8.1-5.8-.3-.9-.5-1.8-.5-2.8 0-4.7 3.9-8.6 8.6-8.6v-3.1c-1.5 0-3.1.3-4.5.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.9-.9 4.5 0 1 .1 1.8.3 2.7h-7.6V51.5l5.5-6.1h67.5Zm-54.1 37.8c1.8 0 3.5-1 4.4-2.5.5-.8.8-1.7.8-2.8 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 1.1.3 2 .8 2.8.9 1.5 2.5 2.5 4.4 2.5Zm35.3-21.3V51.5h-25.8v25.9H71.15V61.9Zm5.2-10.3v10.2h22V59l-7.5-7.4h-14.5Zm22 31.6c1.799 0 3.499-1 4.399-2.5.5-.8.8-1.7.8-2.8 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 1.1.3 2 .8 2.8.9 1.5 2.5 2.5 4.4 2.5Zm-50.4-21.3h20.7v12.9h-20.7V61.9Z"
            clipRule="evenodd"
        />
    </svg>
))

MinibusIcon.displayName = 'MinibusIcon'

export default MinibusIcon
