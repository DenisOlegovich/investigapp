import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { routesInfo } from './constants'

import InfoAboutRout from '../components/InfoAboutRout'

export default function Yakhromskaya(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={styles.heading}>Яхромская</h2>
            <div className={styles.container}>
                {routesInfo.map((info, idx) => (
                    <InfoAboutRout
                        key={idx}
                        {...info}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    container: cn('flex', 'flex-col', 'gap-sm sm:gap-lg'),
    heading: cn('h2', 'mb-xl'),
}
