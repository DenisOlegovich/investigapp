import { Meta, StoryObj } from '@storybook/react'

import { metroLineIcons } from '@/constants'

import Image from '@/components/Image'
import { getLineIcon } from '@/utils'

const MetroLines = () => (
    <div className="flex gap-sm text-grey">
        <div className="flex flex-col items-center gap-2xs rounded-[8px] bg-grey-extra-light p-[5px]">
            <p>ID</p>
            <p>Icon</p>
        </div>
        {Object.keys(metroLineIcons).map((key, idx) => (
            <div
                key={idx}
                className="flex flex-col items-center gap-2xs rounded-[8px] bg-grey-extra-light p-[5px]"
            >
                <p>{key}</p>
                <Image
                    img={getLineIcon(key as keyof typeof metroLineIcons)}
                    alt="line"
                />
            </div>
        ))}
    </div>
)

const meta: Meta = {
    title: 'Components/MetroLines',
    component: MetroLines,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
