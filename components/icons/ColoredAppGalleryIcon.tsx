import { ComponentPropsWithoutRef, forwardRef, useId } from 'react'

const ColoredAppGalleryIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => {
    const id = useId()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 19 18"
            ref={ref}
            {...props}
        >
            <g
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path
                    fill={`url(#${id})`}
                    d="M5.55 0C1.854 0 .5 1.352.5 5.05v7.9C.5 16.648 1.853 18 5.55 18h7.897c3.698 0 5.053-1.352 5.053-5.05v-7.9C18.5 1.352 17.147 0 13.45 0h-7.9Z"
                />
                <path
                    fill="#fff"
                    d="M8.352 10.44h.722l-.362-.844-.36.844Zm-.178.425-.215.49h-.488L8.51 9h.422l1.034 2.355h-.501l-.212-.49H8.174Zm7.854.488h.472V9h-.472v2.353Zm-1.877-1.01h.87v-.43h-.87v-.482h1.262v-.43h-1.734v2.354h1.78v-.43H14.15v-.583Zm-1.875.277L11.741 9h-.39l-.535 1.62-.52-1.619h-.51l.822 2.355h.396l.535-1.547.536 1.547h.4l.819-2.355h-.496l-.522 1.62Zm-5.525-.271c0 .383-.19.588-.536.588-.347 0-.538-.21-.538-.604V9.002h-.479v1.347c0 .663.369 1.043 1.01 1.043.649 0 1.02-.388 1.02-1.063V9h-.477v1.349ZM4.058 9h.478v2.357h-.478V10.4h-1.08v.957H2.5V9h.478v.95h1.08V9ZM9.5 6c-1.654 0-3-1.346-3-3h.424A2.58 2.58 0 0 0 9.5 5.576 2.58 2.58 0 0 0 12.076 3h.424c0 1.654-1.346 3-3 3Z"
                />
            </g>
            <defs>
                <linearGradient
                    id={id}
                    x1={9.5}
                    x2={9.5}
                    y1={0}
                    y2={18}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FB6361" />
                    <stop
                        offset={1}
                        stopColor="#ED3E45"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
})

ColoredAppGalleryIcon.displayName = 'ColoredAppGalleryIcon'

export default ColoredAppGalleryIcon
