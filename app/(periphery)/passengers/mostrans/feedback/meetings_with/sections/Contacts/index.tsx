import { Tels } from '@/constants'
import { cn } from '@/utils'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { phone } from '@/Images'

import { styles } from '../../styles'

export default function Contacts() {
    return (
        <div className={cn('text-base', 'mt-xl xl:mt-[0.7rem]', 'xl:ml-base')}>
            <Image
                img={phone}
                alt="Телефон"
                className="mb-xs"
            />
            <p>Звоните:</p>
            <Link
                href={`tel:${Tels.mosmetroContactCenter}`}
                variant="default"
                className={styles.link}
            >
                {Tels.mosmetroContactCenter}
            </Link>
            <br />
            <Link
                href={`tel:${Tels.mosmetroContactCenterMobile}`}
                variant="default"
                className={styles.link}
            >
                {Tels.mosmetroContactCenterMobile}
            </Link>
            &ensp;(с мобильного)
        </div>
    )
}
