import { ColumnMeta, Header, flexRender } from '@tanstack/react-table'
import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import If from '@/components/If'

interface SortControl<T> {
    header: Header<T, unknown>
    mode?: 'header' | 'footer'
}

type ThProps<T> = SortControl<T> & ComponentPropsWithoutRef<'th'>

export default function Th<T>({ header, mode = 'header', className, ...props }: ThProps<T>) {
    const thClassName =
        mode === 'header'
            ? header.column.columnDef.meta?.headerCellCassName
            : header.column.columnDef.meta?.footerCellCassName

    return (
        <th
            colSpan={header.colSpan}
            onClick={header.column.getToggleSortingHandler()}
            className={cn(thClassName ?? '', 'text-left')}
            {...props}
        >
            <If condition={!header.isPlaceholder}>
                {flexRender(header.column.columnDef[mode], header.getContext())}

                {/* {mode === 'header' && <SortControl<T> header={header} />} */}
            </If>
        </th>
    )
}
