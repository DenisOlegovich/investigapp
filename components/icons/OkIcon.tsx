import { ComponentPropsWithoutRef, forwardRef } from 'react'

const OkIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M12 12.419a4.204 4.204 0 0 0 4.206-4.205 4.206 4.206 0 1 0-8.412-.008A4.21 4.21 0 0 0 12 12.419Zm0-6.28a2.066 2.066 0 1 1 0 4.133 2.068 2.068 0 0 1-2.075-2.066c0-1.142.933-2.067 2.075-2.067Zm4.849 6.795c-.241-.475-.893-.877-1.77-.185-1.181.932-3.079.932-3.079.932s-1.898 0-3.08-.932c-.876-.692-1.536-.29-1.769.185-.418.828.056 1.23 1.11 1.913.9.58 2.139.796 2.943.877l-.668.667-2.476 2.477a.966.966 0 0 0 0 1.367l.112.113a.966.966 0 0 0 1.367 0l2.477-2.477 2.477 2.477a.966.966 0 0 0 1.367 0l.112-.113a.966.966 0 0 0 0-1.367l-2.484-2.485-.668-.667c.804-.08 2.027-.298 2.92-.877 1.053-.675 1.527-1.077 1.109-1.905Z"
        />
    </svg>
))

OkIcon.displayName = 'OkIcon'

export default OkIcon
