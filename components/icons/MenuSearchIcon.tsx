import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MenuSearchIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m33.182 41.79-1.748 1.654-.498.498-8.32-8.315a10.754 10.754 0 0 1-6.29 2.019c-5.968 0-10.803-4.833-10.803-10.794 0-5.962 4.835-10.794 10.803-10.794 5.964 0 10.799 4.832 10.799 10.794 0 2.494-.845 4.79-2.266 6.619l8.323 8.319ZM22.497 31.636a7.755 7.755 0 0 0 1.64-4.785 7.81 7.81 0 0 0-7.812-7.807 7.81 7.81 0 0 0-7.812 7.807 7.81 7.81 0 0 0 7.812 7.806c1.762 0 3.227-.427 4.788-1.638.604-.468 1.384-1.383 1.384-1.383Z"
            clipRule="evenodd"
        />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M43.06 41.5h11.416v-3H40.059l3.001 3Zm-7.59-10h19.006v-3H36.028a14.747 14.747 0 0 1-.558 3Zm-.571-10h19.577v-3H33.18c.684.924 1.263 1.93 1.719 3Z"
            clipRule="evenodd"
            opacity={0.5}
        />
    </svg>
))

MenuSearchIcon.displayName = 'MenuSearchIcon'

export default MenuSearchIcon
