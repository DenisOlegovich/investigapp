import { LayoutProps } from '@/types'
import Header from '@/components/common/Header'

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
