import { ReactNode } from 'react'

import { DefaultComponentProps } from '@/types'

interface IIfElse extends DefaultComponentProps {
    condition?: any
    Else?: ReactNode
}

/** Рисует компонент по условию, может рисовать альтернативный
 * @param condition условие для отображения
 * @param children основной рисуемый по условию компонент
 * @param Else опциональный, рисуется как альтернатива основному если условие ложно
 */
export default function If({ children, condition, Else }: IIfElse) {
    const ElseComponent = Else ? <>{Else}</> : null

    return condition ? <>{children}</> : ElseComponent
}
