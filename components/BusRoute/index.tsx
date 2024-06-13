import { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/utils'
import If from '@/components/If'
import Button from '@/components/Forms/Button'

export type BusRouteVariant = keyof typeof variants | 'unstyled'

export type BusRouteProps = {
    number: string
    variant?: BusRouteVariant
    isDisabled?: boolean
    onClick?: () => void
} & Partial<Pick<ComponentPropsWithoutRef<ElementType>, 'className'>>
export default function BusRoute({ number, variant = 'blueLight', isDisabled, onClick, className }: BusRouteProps) {
    const busRouteClassName =
        variant === 'unstyled'
            ? className
            : cn(styles.base, variants[variant], isDisabled && styles.disabled, className)

    return (
        <If
            condition={onClick}
            Else={
                <div
                    className={cn(busRouteClassName)}
                    aria-disabled={isDisabled}
                >
                    {number}
                </div>
            }
        >
            <Button
                variant="unstyled"
                className={cn(
                    styles.button,
                    busRouteClassName,
                    `aria-[disabled=true]:bg-opacity-100`,
                    `aria-[disabled=true]:cursor-not-allowed`
                )}
                aria-disabled={isDisabled}
            >
                {number}
            </Button>
        </If>
    )
}

const variants = {
    white: cn('bg-white', 'outline-black/[0.5]', 'text-black'),
    blue: cn('bg-blue', 'outline-blue', 'text-white'),
    blueLight: cn('bg-[#B5DBF1]', 'outline-[#B5DBF1]', 'text-black'),
    pink: cn('bg-[#F7BFD9]', 'outline-[#F7BFD9]', 'text-white'),
    red: cn('bg-[#E7333B]', 'outline-[#E7333B]', 'text-white'),
    orange: cn('bg-[#F08100]', 'outline-[#F08100]', 'text-white'),
    violet: cn('bg-[#943E90]', 'outline-[#943E90]', 'text-white'),
    brown: cn('bg-[#9E584D]', 'outline-[#9E584D]', 'text-white'),
}

const styles = {
    base: cn(
        'relative',
        'inline-flex',
        'justify-center',
        'items-center',
        'p-[0.37rem] md:p-[0.5rem]',
        'min-w-[2.85em] md:min-w-[2.7em]',
        'text-[1.4rem] md:text-[2rem]',
        'leading-[1]',
        'outline outline-1 outline-offset-[-1px] outline-none',
        'rounded-[0.2rem]',
        'overflow-hidden'
    ),
    disabled: cn(
        'text-white',
        'bg-[#9D9C9C]',
        'outline-[#9D9C9C]',
        'before:absolute',
        'before:bottom-[44%]',
        'before:left-[-50%]',
        'before:w-[200%]',
        'before:h-[0.13rem]',
        'before:bg-red',
        'before:rotate-[-25deg]',
        'before:origin-center'
    ),
    button: cn('bg-opacity-50', 'hover:bg-opacity-100', 'active:bg-opacity-100'),
}
