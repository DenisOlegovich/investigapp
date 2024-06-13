import { ComponentPropsWithoutRef, forwardRef } from 'react'

const FamilyIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 60 60"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.15 13.902c1.8 0 3.4-1.4 3.4-3.2.1-1.8-1.4-3.4-3.2-3.4-1.8-.1-3.4 1.4-3.4 3.2 0 1.9 1.4 3.4 3.2 3.4Zm13.399-1.1c-.1 1.9-1.6 3.4-3.5 3.3-1.9-.1-3.3-1.6-3.3-3.5.1-1.9 1.6-3.4 3.5-3.3 1.9.1 3.4 1.6 3.3 3.5Zm11.1 12c.1 1.8-1.4 3.4-3.2 3.4-1.9 0-3.4-1.4-3.4-3.2-.1-1.8 1.4-3.4 3.2-3.4 1.8-.1 3.3 1.4 3.4 3.2Zm-32.6-1.8c0 1.8-1.6 3.2-3.4 3.2-1.9-.1-3.3-1.6-3.2-3.4 0-1.9 1.5-3.3 3.4-3.2 1.8 0 3.3 1.6 3.2 3.4Zm32.1 7.2h-7.2l-1.9-9c-.2-1.2-1.2-2.1-2.4-2.1h-4.8c-.1-1.3-1.2-2.3-2.5-2.3h-10c-1.4 0-2.5 1.1-2.5 2.5v8.9h-6.9c-1.4 0-2.5 1.1-2.5 2.5v22h3.7v-10.4h2.5v10.4h10.2v-6.3h-2.7l2.7-12.3c.2-1.2 1.2-2.1 2.4-2.1h4.6c1.2 0 2.2.9 2.4 2.1l2.6 12.3h-2.4v6.3h10.9v-8.3h2.5v8.2h3.7v-19.9c0-1.4-1.1-2.5-2.4-2.5Zm-19.7.1c-1.8 0-3.4-1.4-3.4-3.2-.1-1.8 1.4-3.4 3.2-3.4 1.8-.1 3.4 1.4 3.4 3.2.1 1.9-1.4 3.4-3.2 3.4Zm-1.1 16.1h2.5v6.3h-2.5v-6.3Z"
            clipRule="evenodd"
        />
    </svg>
))

FamilyIcon.displayName = 'FamilyIcon'

export default FamilyIcon
