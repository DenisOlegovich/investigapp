import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TrainIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            fillRule="evenodd"
            d="M12 20.5h48l12 28v8H12v-36Zm3 16h16v-10H15v10Zm19 0h16v-10H34v10Zm19-10v17h13l-7-17h-6Zm-41 33h60v4H12v-4Z"
            clipRule="evenodd"
        />
    </svg>
))

TrainIcon.displayName = 'TrainIcon'

export default TrainIcon
