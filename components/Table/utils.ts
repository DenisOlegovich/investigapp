import { ColumnDef, GroupColumnDef } from '@tanstack/react-table'

export const prepareColumns = <T extends Record<string, any>>(columns: (GroupColumnDef<T> | ColumnDef<T>)[]) => {
    const preparedColumns = columns

    preparedColumns.forEach((column) => {
        if ((column as GroupColumnDef<T>)?.columns) {
            ;(column as GroupColumnDef<T>).columns = prepareColumns((column as GroupColumnDef<T>).columns ?? [])
        }

        column.enableGrouping = column.enableGrouping ?? false
    })

    return preparedColumns as ColumnDef<T>[]
}
