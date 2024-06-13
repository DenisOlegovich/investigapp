import { LayoutProps } from '@/types'
import LayoutContent from '@/components/common/LayoutContent'
import TanstackProvider from '@/app/providers/TanstackProvider'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'

export default function Layout({ children }: LayoutProps) {
    return (
        <TanstackProvider>
            <LayoutContent>
                <Header />
                {children}
                <Footer className="mt-12 md:mt-40" />
            </LayoutContent>
        </TanstackProvider>
    )
}
