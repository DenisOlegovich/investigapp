import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MetroLandMarkIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 36 44"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#MetroLandMarkIcon)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m17.808 43.7-2.053-2.053L28.39 29.012a14.764 14.764 0 0 0 4.383-10.543c0-8.253-6.712-14.926-14.925-14.926-8.253 0-14.926 6.713-14.926 14.926a14.8 14.8 0 0 0 4.343 10.503c.277.276.435.671.435 1.066 0 .83-.672 1.461-1.461 1.461-.395 0-.75-.158-1.027-.434A17.761 17.761 0 0 1 0 18.508C0 8.676 7.976.7 17.808.7s17.808 7.976 17.808 17.808c0 4.936-2.014 9.358-5.212 12.596L17.808 43.7Zm3.83-33.207 4.58 11.53h1.304v1.737h-6.87v-1.738h1.026l-.988-2.882-2.882 4.738-2.882-4.738-.988 2.882h1.027v1.738h-6.87v-1.738h1.303l4.58-11.53 3.83 6.753 3.83-6.752Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="MetroLandMarkIcon">
                <path
                    fill="#fff"
                    d="M0 .7h36v43H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

MetroLandMarkIcon.displayName = 'MetroLandMarkIcon'

export default MetroLandMarkIcon
