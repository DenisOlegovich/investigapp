import { ComponentPropsWithoutRef } from 'react'
import { Cell, flexRender } from '@tanstack/react-table'

import { cn } from '@/utils'

interface TdProps<T> extends ComponentPropsWithoutRef<'td'> {
    cell: Cell<T, unknown>
    isPlaceholder?: boolean
}

export default function Td<T>({ cell, isPlaceholder, ...props }: TdProps<T>) {
    return (
        <td
            {...props}
            className={cn('[&>*]:align-middle h-12', cell.column.columnDef.meta?.getCellClassName(cell.row) ?? '')}
        >
            {!isPlaceholder && cell.column.columnDef.cell
                ? flexRender(cell.column.columnDef.cell, cell.getContext())
                : ''}
        </td>
    )
}
