import { cn, resolvedSrc } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { carsharingFull } from '@/Images'

export default function Pattern({ className, ...props }: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width="952"
            height="323"
            viewBox="0 0 952 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('translate-y-[54.5%]', 'h-[146px] md:h-[315px]', 'w-auto', 'text-white', className)}
            {...props}
        >
            <path
                d="M 404 147 C 403.459 71.7146 464.719 10 540.026 10 C 615.328 10 676.601 71.7146 676.601 147.56"
                stroke="currentColor"
                strokeWidth="20"
                id="2"
            />
            <path
                d="M950.599 10.1836C876 10.1836 813.841 72.4004 813.841 148.844C813.841 187.062 783.153 218.185 745.455 218.185"
                stroke="currentColor"
                strokeWidth="20"
                id="4"
            />
            <path
                d="M951.38 56.6291C900.5 55.4998 860.137 98.2287 860.137 149.351C860.137 213.221 809.022 265.179 746.183 265.26C683.334 265.179 632.245 213.212 632.245 149.351C632.245 98.2201 591.299 56.6161 540.977 56.6161C490.658 56.6161 449.717 98.2158 449.713 149.347C449.717 200.469 490.658 242.056 540.968 242.056"
                stroke="currentColor"
                strokeWidth="20"
                id="5"
            />
            <path
                d="M950.5 103.5C925 103.5 904.041 124.48 904.041 150.043C904.041 239.51 832.699 312.337 745.073 312.337C657.448 312.337 586.173 239.535 586.173 150.069"
                stroke="currentColor"
                strokeWidth="20"
                id="6"
            />
            <path
                d="M540.065 104.053C515.413 104.053 495.361 124.529 495.361 149.712C495.361 174.886 515.413 195.367 540.065 195.367"
                stroke="currentColor"
                strokeWidth="20"
                id="8"
            />
            <mask
                id="patternImageMask"
                y="45.5%"
            >
                <path
                    d="M 404 147 C 403.459 71.7146 464.719 10 540.026 10 C 615.328 10 676.601 71.7146 676.601 147.56"
                    stroke="currentColor"
                    strokeWidth="20"
                    id="2"
                />
                <path
                    d="M950.599 10.1836C876 10.1836 813.841 72.4004 813.841 148.844C813.841 187.062 783.153 218.185 745.455 218.185"
                    stroke="currentColor"
                    strokeWidth="20"
                    id="4"
                />
                <path
                    d="M951.38 56.6291C900.5 55.4998 860.137 98.2287 860.137 149.351C860.137 213.221 809.022 265.179 746.183 265.26C683.334 265.179 632.245 213.212 632.245 149.351C632.245 98.2201 591.299 56.6161 540.977 56.6161C490.658 56.6161 449.717 98.2158 449.713 149.347C449.717 200.469 490.658 242.056 540.968 242.056"
                    stroke="currentColor"
                    strokeWidth="20"
                    id="5"
                />
                <path
                    d="M950.5 103.5C925 103.5 904.041 124.48 904.041 150.043C904.041 239.51 832.699 312.337 745.073 312.337C657.448 312.337 586.173 239.535 586.173 150.069"
                    stroke="currentColor"
                    strokeWidth="20"
                    id="6"
                />
                <path
                    d="M540.065 104.053C515.413 104.053 495.361 124.529 495.361 149.712C495.361 174.886 515.413 195.367 540.065 195.367"
                    stroke="currentColor"
                    strokeWidth="20"
                    id="8"
                />
            </mask>
            <defs>
                <filter
                    id="filterImage"
                    x="0"
                    y="0"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="15"
                    />
                </filter>
            </defs>
            <image
                href={resolvedSrc(carsharingFull.src)}
                mask="url(#patternImageMask)"
                width={carsharingFull.width}
                height={carsharingFull.height}
                preserveAspectRatio="xMinYMin slice"
                filter="url(#filterImage)"
                className="size-full"
            ></image>
        </svg>
    )
}
