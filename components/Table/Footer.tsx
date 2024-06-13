import { ComponentPropsWithoutRef } from 'react'
import { Table } from '@tanstack/react-table'
import Tr from './Tr'
import Th from './Th'

interface FooterProps<T> extends ComponentPropsWithoutRef<'tfoot'> {
    table: Table<T>
}

export default function Footer<T>({ table }: FooterProps<T>) {
    return (
        <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
                <Tr
                    key={footerGroup.id}
                    className={table.options.meta?.footerRowClassName ?? ''}
                >
                    {footerGroup.headers.map((header) => (
                        <Th<T>
                            key={header.id}
                            header={header}
                            mode="footer"
                        />
                    ))}
                </Tr>
            ))}
        </tfoot>
    )
}
