import List from '@/components/List'
import { ComponentPropsWithoutRef } from 'react'
import { listParticipants } from './constants'
import H2 from '@/components/common/typography/H2'

export default function ListParticipants(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <H2>Список участников научного совета</H2>
            <List {...listParticipants} />
        </div>
    )
}
