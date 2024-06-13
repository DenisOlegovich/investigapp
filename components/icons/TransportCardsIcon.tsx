import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TransportCardsIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="0.8em"
        viewBox="0 0 87 67"
        fill="none"
        {...props}
    >
        <g clipPath="url(#TransportCardsIcon)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M83.179 0H38.703a3.826 3.826 0 0 0-3.821 3.84v1.062h47.24v31.866h1.057A3.827 3.827 0 0 0 87 32.928V3.84A3.826 3.826 0 0 0 83.18 0Zm-9.595 8.988H21.547a4.47 4.47 0 0 0-4.472 4.494v.408h56.103v38.403h.406a4.47 4.47 0 0 0 4.472-4.494V13.482c0-2.533-1.951-4.494-4.472-4.494ZM5.041 17.976h59.03c2.764 0 5.041 2.287 5.041 5.066v38.892c0 2.778-2.276 5.066-5.041 5.066H5.041C2.277 67 0 64.712 0 61.934V23.042c0-2.779 2.277-5.066 5.041-5.066Zm59.03 44.122c.081 0 .163-.082.163-.164V23.042c0-.082-.082-.164-.163-.164H5.041c-.081 0-.163.082-.163.163v38.893c0 .082.082.164.163.164h59.03ZM30.897 29.415H11.383v15.524h19.514V29.415ZM11.383 50.658H57.73v5.72H11.383v-5.72Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="TransportCardsIcon">
                <path
                    fill="#fff"
                    d="M0 0h87v67H0z"
                />
            </clipPath>
        </defs>
    </svg>
))

TransportCardsIcon.displayName = 'TransportCardsIcon'

export default TransportCardsIcon
