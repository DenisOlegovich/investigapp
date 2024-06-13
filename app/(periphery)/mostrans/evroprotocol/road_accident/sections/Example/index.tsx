import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

import { exampleOfNotice } from '@/Images'
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function Example(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <div className={styles.containerLink}>
                <Image
                    img={exampleOfNotice}
                    alt="пример"
                />
                <Link
                    href={exampleOfNotice.src}
                    target="_blank"
                    className={styles.link}
                />
            </div>

            <p className={styles.text}>Пример извещения</p>
        </div>
    )
}

const styles = {
    text: cn('signature', 'mt-xs'),
    containerLink: cn('relative'),
    link: cn('block', `before:absolute before:content-[''] before:inset-0`),
}
