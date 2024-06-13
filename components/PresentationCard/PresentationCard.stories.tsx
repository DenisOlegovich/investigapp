import { Meta, StoryObj } from '@storybook/react'

import PresentationCard from '.'
import { roadAccidentFirst } from '@/Images'

const CardComponent = () => (
    <PresentationCard
        href="https://transport.mos.ru/common/upload/public/prezentacii/87/2021-taksomotornye-perevozki-v-moskve-itogi-2020-goda.pdf"
        img={roadAccidentFirst}
        extra="МУФ - 2021"
        className="w-[420px]"
    />
)

const meta: Meta = {
    title: 'Components/PresentationCard',
    component: CardComponent,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
