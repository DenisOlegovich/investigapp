import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import RadioGroup from '.'
import { RadioGroupOption } from './types'
import BusFrontIcon from '@/components/icons/BusFrontIcon'
import CarIcon from '@/components/icons/CarIcon'
import HumanIcon from '@/components/icons/HumanIcon'
import BikeIcon from '@/components/icons/BikeIcon'

const optionsLabels: RadioGroupOption[] = [
    {
        label: '1-ая',
        value: '1',
    },
    {
        label: '2-ая',
        value: '2',
        // isDisabled: true,
    },
    {
        label: '3-я',
        value: '3',
    },
]

const optionsIcons = [
    {
        value: 'bus',
        icon: (
            <BusFrontIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'car',
        icon: (
            <CarIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'men',
        icon: (
            <HumanIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'bike',
        icon: (
            <BikeIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
]

const ComponentWithRadioGroup = () => {
    const [valueWhiteDefault, setValueWhiteDefault] = useState<string | undefined>('1')
    const [valueGreyDefault, setValueGreyDefault] = useState<string | undefined>('1')
    const [valueWhiteButton, setValueWhiteButton] = useState<string | undefined>('1')
    const [valueGreyButton, setValueGreyButton] = useState<string | undefined>('1')
    const [valueIcon, setValueIcon] = useState<string | undefined>('bus')

    return (
        <div className="grid grid-cols-2 grid-rows-5 gap-[2rem]">
            <div className="col-span-1 p-5">
                <RadioGroup
                    options={optionsLabels}
                    onChange={setValueWhiteDefault}
                    value={valueWhiteDefault}
                    label="Поле с радиокнопками"
                    // isDisabled
                />
            </div>

            <div className="bg-grey/[0.5] p-5">
                <RadioGroup
                    options={optionsLabels}
                    onChange={setValueGreyDefault}
                    value={valueGreyDefault}
                    label="Поле с радиокнопками"
                    colorScheme="grey"
                    // isDisabled
                />
            </div>

            <div className="p-5">
                <RadioGroup
                    variant="button"
                    options={optionsLabels}
                    onChange={setValueWhiteButton}
                    value={valueWhiteButton}
                    label="Поле с радиокнопками"
                    // isDisabled
                />
            </div>

            <div className="bg-grey/[0.5] p-5">
                <RadioGroup
                    variant="button"
                    options={optionsLabels}
                    onChange={setValueGreyButton}
                    value={valueGreyButton}
                    label="Поле с радиокнопками"
                    colorScheme="grey"
                    // isDisabled
                />
            </div>

            <div className="p-5">
                <RadioGroup
                    variant="button"
                    options={optionsIcons}
                    onChange={setValueIcon}
                    value={valueIcon}
                    label="Поле с радиокнопками"
                    // isDisabled
                />
            </div>
        </div>
    )
}

const meta: Meta = {
    title: 'Components/Forms/RadoiGroup',
    component: ComponentWithRadioGroup,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
