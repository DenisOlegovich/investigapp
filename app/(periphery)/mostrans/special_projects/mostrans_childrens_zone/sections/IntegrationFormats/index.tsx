import { ComponentPropsWithoutRef } from 'react'

import { integrationFormatList } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

export default function IntegrationFormats(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h3 className={styles.heading}>
                Форматы интеграции Департамента транспорта в детские обучающие развлекательные центры и тематические
                детские зоны по тематике Транспортного комплекса города Москвы:
            </h3>
            <List {...integrationFormatList} />
        </div>
    )
}

const styles = {
    heading: cn('h3', 'mb-lg md:mb-xl'),
}
