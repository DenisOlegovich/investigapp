import { Meta, StoryObj } from '@storybook/react'

import InfoAboutRout, { InfoAboutRoutProps } from '.'
import BusRoute from '@/components/BusRoute'
import { fizteh1 } from '@/Images'

const meta: Meta<InfoAboutRoutProps> = {
    title: 'Components/InfoAboutRout',
    component: InfoAboutRout,
}

export default meta

type Story = StoryObj<InfoAboutRoutProps>

export const Default: Story = {
    args: {
        busRoutes: [
            {
                variant: 'white',
                number: '200',
                isDisabled: true,
            },
            'arrow',
            {
                variant: 'blueLight',
                number: '22',
            },
            {
                variant: 'pink',
                number: '103',
            },
        ],
        date: 'С 7 сентября',
        title: (
            <>
                <BusRoute
                    isDisabled
                    number="200"
                />
                &nbsp; объединяется с&nbsp;
                <BusRoute
                    variant="blueLight"
                    number="270"
                />
            </>
        ),
        description: 'Hello',
        imgScheme: fizteh1,
        className: 'max-w-[755px]',
        // isMain: true,
    },
}
