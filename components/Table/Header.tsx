import { ComponentPropsWithoutRef } from 'react'
import { Table } from '@tanstack/react-table'

import Tr from './Tr'
import Th from './Th'

interface HeaderProps<T> extends ComponentPropsWithoutRef<'thead'> {
    table: Table<T>
}

export default function Header<T>({ table, ...props }: HeaderProps<T>) {
    return (
        <thead {...props}>
            {table.getHeaderGroups().map((headerGroup) => (
                <Tr
                    key={headerGroup.id}
                    className={table.options.meta?.headerRowClassName}
                >
                    {headerGroup.headers.map((header) => (
                        <Th<T>
                            key={header.id}
                            header={header}
                        />
                    ))}
                </Tr>
            ))}
        </thead>
    )
}
