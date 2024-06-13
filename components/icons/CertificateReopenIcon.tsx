import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CertificateReopenIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M17.5 57V13h49v58h-35V57h-14Zm28.4-17.9-.7 2.9 10 2.5 2.5-10.1-2.9-.7-1.1 4.5c-2.1-3.7-6.2-6.2-10.8-6.2-7 0-12.7 5.6-12.7 12.6s5.7 12.6 12.6 12.6c5.5 0 10.2-3.6 11.9-8.5l-3.9-1.1c-1.2 3.3-4.3 5.6-8 5.6-4.8 0-8.6-3.8-8.6-8.6s3.9-8.6 8.6-8.6c3.2 0 5.9 1.7 7.4 4.2l-4.3-1.1ZM25.5 26h33v-5h-33v5Zm4 33v12l-12-12h12Z"
            clipRule="evenodd"
        />
    </svg>
))

CertificateReopenIcon.displayName = 'CertificateReopenIcon'

export default CertificateReopenIcon
