import { Pages } from '@/constants'
import { freeMusic } from '@/Images'
import { cn } from '@/utils'
import Image from '@/components/Image'
import Link from '@/components/Link'

export default function FreeMusicSection() {
    return (
        <div className={styles.wrapper}>
            <Image
                img={freeMusic}
                alt="Безвозмездное выступление"
                className={styles.img}
            />
            <Link href={Pages.pressTeam}>Расписание выступлений</Link>
        </div>
    )
}

const styles = {
    wrapper: cn('xl:ml-5', 'mt-xl xl:mt-0', 'grid gap-[1.2rem]'),
    img: cn('max-h-[39.8rem] md:max-h-[43.5rem]', 'rounded-[0.8rem]'),
}
