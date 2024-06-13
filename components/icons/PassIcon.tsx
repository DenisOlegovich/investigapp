import { ComponentPropsWithoutRef, forwardRef } from 'react'

const PassIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M62.7 58.1h-4L48 43l4.1-2.9 8.7 12.3L78 29.1V18H6v48h72V37.5L62.7 58.1ZM34 55H15v-5h19v5Zm10-10H15v-5h29v5Zm0-10H15v-5h29v5Z"
        />
    </svg>
))

PassIcon.displayName = 'PassIcon'

export default PassIcon
