import { ComponentPropsWithoutRef } from 'react'

export default function Tr({ children, ...props }: ComponentPropsWithoutRef<'tr'>) {
    return <tr {...props}>{children}</tr>
}
