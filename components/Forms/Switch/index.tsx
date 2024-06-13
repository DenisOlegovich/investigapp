import { forwardRef } from 'react'

import { SwitchBetweenProps, SwitchDefaultProps, SwitchProps } from './types'
import SwitchBetween from './SwitchBetween'
import SwitchDefault from './SwitchDefault'

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ options, type = 'default', label, ...props }, ref) => {
    const defaultPops = { label, ...props } as SwitchDefaultProps

    const betweenProps = { options, ...props } as SwitchBetweenProps

    switch (type) {
        case 'between':
            return (
                <SwitchBetween
                    ref={ref}
                    {...betweenProps}
                />
            )

        case 'default':
            return (
                <SwitchDefault
                    ref={ref}
                    {...defaultPops}
                />
            )

        default:
            return null
    }
})

Switch.displayName = 'Switch'

export default Switch
