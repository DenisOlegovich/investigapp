import { usePathname } from 'next/navigation'

import { headerLinks } from '../constants'
import { cn } from '@/utils'
import Button from '@/components/Forms/Button'
import Link from '@/components/Link'
import LoginIcon from '@/components/icons/LoginIcon'
import SearchMenuIcon from '@/components/icons/SearchMenuIcon'
import MosTransportLogo from '@/components/icons/logos/MosTransportLogo'

export default function HeaderContent() {
    const pathname = usePathname()

    return (
        <div className={cn(styles.headerContent)}>
            <div className={cn(styles.stack)}>
                <Link
                    href="/"
                    variant="unstyled"
                >
                    <MosTransportLogo className={cn('text-white mr-[2.4rem] text-[4.3rem]')} />
                </Link>
                {headerLinks.map(({ title, link }, idx) => (
                    <Link
                        key={idx}
                        href={link}
                        variant="unstyled"
                        className={cn(styles.link, {
                            [styles.linkMatchPath]: pathname === link,
                            [styles.linkHasPath]: pathname.startsWith(`${link}/`),
                        })}
                    >
                        {title}
                    </Link>
                ))}
            </div>
            <div className={cn(styles.stack, 'gap-[2.4rem]')}>
                <Button
                    variant="unstyled"
                    className={cn('[:hover&_path]:opacity-[1]', '[&_path]:transition [&_path]:ease [&_path]:delay-100')}
                >
                    <SearchMenuIcon className={cn('text-white w-[6rem] h-[6rem]')} />
                </Button>

                <Button
                    size="s"
                    variant="danger"
                    className={cn('hidden md:block', 'bg-white/[0.1]')}
                >
                    Войти
                </Button>

                <Button
                    variant="unstyled"
                    className="block md:hidden"
                >
                    <LoginIcon className={cn('text-white w-[3.6rem] h-[3.6rem]')} />
                </Button>
            </div>
        </div>
    )
}

const styles = {
    headerContent: cn('flex justify-between items-center'),
    stack: cn('flex items-center'),
    link: cn('body text-white bg-red', 'p-[2rem_1.2rem]', 'hidden md:block', 'hover:opacity-[0.9] hover:bg-[#C4181D]'),
    linkMatchPath: 'bg-[#C4181D]/[0.9]',
    linkHasPath: cn(
        'bg-white/[0.1]',
        'relative',
        'before:block before:absolute before:h-[0.6rem] before:inset-x-0 before:bottom-0 before:bg-[#B20709] before:rounded-t-[0.8rem]'
    ),
}
