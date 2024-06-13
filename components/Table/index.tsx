'use client'

import {
    ColumnDef,
    getCoreRowModel,
    getExpandedRowModel,
    getGroupedRowModel,
    GroupingState,
    Row,
    RowData,
    useReactTable,
} from '@tanstack/react-table'
import { prepareColumns } from './utils'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { cn } from '@/utils'
import { useState } from 'react'

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        headerRowClassName: string
        getRowClassName: (row: Row<TData>) => string
        footerRowClassName: string
    }

    interface ColumnMeta<TData extends RowData, TValue> {
        headerCellCassName: string
        getCellClassName: (row: Row<TData>) => string
        footerCellCassName: string
    }
}

export interface TableProps<T extends RowData> {
    /** обязательный, массив, данные для отрисовки таблицы */
    data: T[]
    /** обязательный, массив с объектами по образцу tanstack с данными для колонок */
    columns: ColumnDef<T>[]
    /** опциональный, флаг для слияния одинаковых значений в ячейках столбцов */
    isMergeCells?: boolean
    /** опциональный, класс строки заголовка таблицы */
    headerRowClassName?: string
    /** опциональный, функция для получения класса строки таблицы на основе опциональных условий (row) */
    getRowClassName?: (row: Row<T>) => string
    /** опциональный, класс строки футера таблицы */
    footerRowClassName?: string
}

/** основная таблица, рисуется через @tanstack, в качестве аргумента может получать интерфейс с данными */
export const Table = <T extends Record<string, any>>({
    data,
    columns,
    isMergeCells = false,
    headerRowClassName = '',
    footerRowClassName = '',
    getRowClassName = () => '',
}: TableProps<T>) => {
    const [grouping, setGrouping] = useState<GroupingState>([])

    const table = useReactTable({
        data,
        state: {
            grouping,
        },
        columns: prepareColumns(columns),
        onGroupingChange: setGrouping,
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getCoreRowModel: getCoreRowModel(),
        meta: {
            headerRowClassName,
            getRowClassName,
            footerRowClassName,
        },
    })

    return (
        <table className={cn('w-full border-collapse')}>
            <Header table={table} />

            <Body
                table={table}
                isMergeCells={isMergeCells}
            />

            <Footer table={table} />
        </table>
    )
}
