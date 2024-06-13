'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { DefaultComponentProps } from '@/types'

export default function TanstackProvider({ children }: DefaultComponentProps) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: true,
                    },
                },
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            {children}

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
