import DefaultHeader from './DefaultHeader'
import MainPageHeader from './MainPageHeader'

interface HeaderProps {
    type?: 'main' | 'default'
}

export default function Header({ type = 'default' }: HeaderProps) {
    switch (type) {
        case 'main':
            return <MainPageHeader />
        case 'default':
            return <DefaultHeader />
    }
}
