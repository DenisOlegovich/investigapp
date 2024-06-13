import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import Link from '@/components/Link'
import { ExternalLinks } from '@/constants'
import Image from '@/components/Image'
import { wifiLogo } from '@/Images'

export default function WiFiFree({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <Image
                img={wifiLogo}
                alt="wifiLogo"
                className="mb-xs"
            />
            <Link
                href={ExternalLinks.wifi}
                variant="default"
                type="external"
            >
                Подключить
                <span className="inline xl:hidden">&nbsp;бесплатный Wi-Fi</span>
            </Link>
            <span className="hidden xl:inline">бесплатный Wi-Fi</span>
        </div>
    )
}

const styles = {
    wrapper: cn('text-base', 'mt-xl xl:mt-[0.7rem]', 'xl:ml-base'),
}
