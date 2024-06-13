import { cn } from '@/utils'
import { routes } from './constants'
import BusRouteDetail from '../../components/BusRouteDetail'

export default function Old() {
    return (
        <div className={styles.wrapper}>
            {routes.map(({ ...props }, idx) => (
                <BusRouteDetail
                    key={idx}
                    isShowMap={idx === 0}
                    {...props}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-lg md:gap-xl'),
}
