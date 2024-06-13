import { ComponentPropsWithoutRef } from 'react'
import { Table } from '@tanstack/react-table'
import Tr from './Tr'
import Td from './Td'

interface BodyProps<T> extends ComponentPropsWithoutRef<'tbody'> {
    table: Table<T>
    isMergeCells?: boolean
}

export default function Body<T>({ table, isMergeCells = false }: BodyProps<T>) {
    return (
        <tbody>
            {table.getRowModel().rows.map((row, indx, rows) => {
                return (
                    <Tr
                        key={row.id}
                        className={table.options.meta?.getRowClassName(row)}
                    >
                        {row.getVisibleCells().map((cell) => {
                            let isPlaceholder

                            if (isMergeCells) {
                                const currentColumnId = cell.column.id
                                const currentRowCellValue = cell.getValue()
                                const prevRowCellValue = indx ? rows[indx - 1].original[currentColumnId as keyof T] : ''

                                isPlaceholder = currentRowCellValue === prevRowCellValue
                            }

                            return (
                                <Td
                                    key={cell.id}
                                    isPlaceholder={isPlaceholder}
                                    cell={cell}
                                />
                            )
                        })}
                    </Tr>
                )
            })}
        </tbody>
    )
}
