import { Meta, StoryObj } from '@storybook/react'
import SocialLink, { SocialLinkProps } from '.'
import VkIcon from '@/components/icons/VkIcon'

const meta: Meta = {
    title: 'Components/SocialLink',
    component: SocialLink,
    // tags: ['autodocs'],
    // argTypes: {},
}

export default meta

type Story = StoryObj<SocialLinkProps>

export const Default: Story = {
    args: {
        href: 'https://reactjs.org',
        Icon: VkIcon,
    },
}
