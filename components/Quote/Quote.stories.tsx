import { Meta, StoryObj } from '@storybook/react'

import Quote from '.'
import { MSLiksutov } from '@/Images'

const data = {
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quis reiciendis eum excepturi necessitatibus alias at cum id quidem rem veniam, sapiente quam ratione sequi doloribus tenetur deserunt? Corporis earum temporibus voluptatem. Cumque voluptate qui iusto quia aspernatur, quas ad?',
    human: {
        img: MSLiksutov,
        name: 'Иванов Иван Иванович',
        description: 'Руководитель Департамента Департаментов',
    },
}

const meta: Meta = {
    title: 'Components/Quote',
    component: Quote,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quis reiciendis eum excepturi necessitatibus alias at cum id quidem rem veniam, sapiente quam ratione sequi doloribus tenetur deserunt? Corporis earum temporibus voluptatem. Cumque voluptate qui iusto quia aspernatur, quas ad?',
        human: {
            img: MSLiksutov,
            name: 'Иванов Иван Иванович',
            description: 'Руководитель Департамента Департаментов',
        },
    },
}

export const WithoutHuman: Story = {
    args: {
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quis reiciendis eum excepturi necessitatibus alias at cum id quidem rem veniam, sapiente quam ratione sequi doloribus tenetur deserunt? Corporis earum temporibus voluptatem. Cumque voluptate qui iusto quia aspernatur, quas ad?',
    },
}
