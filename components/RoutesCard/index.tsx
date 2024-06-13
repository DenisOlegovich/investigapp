import Card from '@/components/Card'
import { ComponentProps } from 'react'

const defaultNewsCardTitle = 'Построить маршрут'

export interface RoutesCardProps extends ComponentProps<'div'> {}

export default function RoutesCard({ className, ...props }: RoutesCardProps) {
    return (
        <Card
            type="box"
            title={defaultNewsCardTitle}
            className={className}
            {...props}
        />
    )
}
