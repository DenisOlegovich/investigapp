import { ReactNode } from 'react'

import { LayoutProps } from '@/types'

import '@/styles/global.scss'

interface Params {
    modal: ReactNode
}

export default function RootLayout({ children, modal }: LayoutProps<Params>) {
    return (
        <html lang="ru">
            <head>
                {/* MoscowSans Font */}
                <link
                    rel="stylesheet"
                    href="https://mosmetro.ru/static/shared/fonts/MoscowSans/import.css"
                />
            </head>
            <body>
                {modal}
                {children}
                <div id="modal-root" />
            </body>
        </html>
    )
}
