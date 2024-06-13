import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ScooterIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="0.64em"
        fill="none"
        viewBox="0 0 130 82"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M27.027 46.039c-2.566-.693-5.162-.698-6.8-.55l-.453-4.979c2.028-.184 5.253-.19 8.556.701 3.317.895 6.905 2.754 9.273 6.437 3.963 6.165 4.284 12.526 3.868 15.232l-4.942-.76c.25-1.627.105-6.733-3.132-11.768-1.49-2.316-3.818-3.625-6.37-4.313Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M100.485 43.298c-3.141 1.346-7.05 3.985-9.21 8.736-.814 1.794-1.267 3.917-1.446 5.908-.182 2.012-.067 3.684.116 4.534l.648 3.024H18.5a2.5 2.5 0 0 1 0-5h66.244c-.022-.94.01-1.96.105-3.007.213-2.364.76-5.075 1.875-7.528 2.84-6.248 7.932-9.61 11.791-11.263l1.97 4.596Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M80.455 6.5H67v-5h16.545l29.191 58.382a2.5 2.5 0 1 1-4.472 2.236L80.454 6.5ZM19 73.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm0 5c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M110 70.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm0 5c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
            clipRule="evenodd"
        />
    </svg>
))

ScooterIcon.displayName = 'ScooterIcon'

export default ScooterIcon
