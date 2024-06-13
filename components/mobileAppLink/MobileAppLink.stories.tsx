import { Meta, StoryObj } from '@storybook/react'

import { appStoreLink, googlePlayLink } from '@/utils'
import MobileAppLink, { MobileAppLinkProps } from '.'

const meta: Meta = {
    title: 'Components/MobileAppLink',
    component: MobileAppLink,
    // tags: ['autodocs'],
    // argTypes: {},
}

export default meta

type Story = StoryObj<MobileAppLinkProps>

export const Default: Story = {
    args: {
        variant: 'stroke',
        ...appStoreLink(),
    },
}

export const Fill: Story = {
    args: {
        variant: 'fill',
        ...googlePlayLink(),
    },
}
