import { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'

import { Table, TableProps } from '.'

const columns: ColumnDef<Record<'period' | 'changes' | 'someone' | 'else', string>>[] = [
    {
        accessorKey: 'period',
        header: 'Период',
    },
    {
        accessorKey: 'changes',
        header: 'Изменения',
    },
    {
        accessorKey: 'someone',
        header: 'Еще один',
    },
    {
        accessorKey: 'else',
        header: 'Еще',
    },
]

const data: Record<'period' | 'changes' | 'someone' | 'else', string>[] = [
    { period: 'period-1', changes: 'changes-1-1', someone: 'somoone-1-1', else: 'else-1-1' },
    { period: 'period-1', changes: 'changes-1-2', someone: 'somoone-1-2', else: 'else-1-2' },
    { period: 'period-1', changes: 'changes-1-3', someone: 'somoone-1-3', else: 'else-1-3' },
    { period: 'period-2', changes: 'changes-2-1', someone: 'somoone-2-1', else: 'else-2-1' },
    { period: 'period-2', changes: 'changes-2-2', someone: 'somoone-2-2', else: 'else-2-2' },
    { period: 'period-2', changes: 'changes-2-3', someone: 'somoone-2-3', else: 'else-2-3' },
]

const meta: Meta = {
    title: 'Components/Table',
    component: Table,
}

export default meta

type Story = StoryObj<TableProps<(typeof data)[number]>>

export const Default: Story = {
    args: {
        columns,
        data,
        isMergeCells: true,
    },
}
