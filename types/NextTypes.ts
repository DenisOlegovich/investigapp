import { ReactNode } from 'react'

export type LayoutProps<Params = undefined> = Params & {
    children: ReactNode
}

export interface PageProps<Params = undefined, SearchParams = undefined> {
    params?: Params
    searchParams?: SearchParams
}
