import { cn } from '@/utils'
import { Meta, StoryObj } from '@storybook/react'
import H1 from './H1'
import H2 from './H2'
import Hero from './Hero'
import H3 from './H3'
import H4 from './H4'
import Lead from './Lead'
import Signature from './Signature'
import H5 from './H5'

const list = [Hero, H1, H2, H3, H4, H5, Lead, Signature]

const meta: Meta = {
    title: 'Components/Common/Typography',
    component: TypographyStories,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}

function TypographyStories({ className }: { className: string }) {
    return (
        <div className={cn('grid', className)}>
            {list.map((El, idx) => (
                <El
                    key={idx}
                    // className="my-0"
                >
                    {El.name}. Московский транспорт
                </El>
            ))}
        </div>
    )
}
