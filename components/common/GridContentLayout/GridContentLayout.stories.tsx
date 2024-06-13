import { Meta, StoryObj } from '@storybook/react'

import GridContentLayout, { GridContentLayoutProps } from '.'

const Example = () => (
    <>
        <div className="bg-velobike">
            Межрегиональные автобусы являются удобным и доступным способом передвижения по России и в соседние страны. В
            Москве сегодня действуют 4 современных автовокзала и 2 автостанции: «Центральный», «Саларьево», «Северные
            Ворота», «Южные Ворота», «Орехово» и «Варшавская».{' '}
        </div>
        <div className="w-[30rem] bg-carsharing-orange">около 700</div>
    </>
)

const meta: Meta = {
    title: 'Components/Common/GridContentLayout',
    component: GridContentLayout,
}

export default meta

type Story = StoryObj<GridContentLayoutProps>

export const Default: Story = {
    args: {
        children: <Example />,
    },
}

export const Grid: Story = {
    args: {
        children: <Example />,
        template: 'grid',
    },
}
