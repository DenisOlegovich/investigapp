import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import Image from '@/components/Image'
import { nightRoutes } from '@/Images'
import Button from '@/components/Forms/Button'

export default function Schema({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <Image
                img={nightRoutes}
                alt="Схема"
                className="mb-xs h-[183px] rounded-[0.8rem] object-cover object-center sm:h-[85px] lg:h-[172px]"
            />
            <Button
                as="link"
                variant="danger"
                className="h-3xl w-full sm:h-xl sm:p-[7px] md:p-[7px] lg:h-3xl"
                href={nightRoutes.src ?? '#'}
                download={true}
            >
                Скачать схему
            </Button>
        </div>
    )
}

const styles = {
    wrapper: cn(
        'text-base',
        'sm:mt-[0.7rem]',
        'sm:ml-[1rem] xl:ml-[1.7rem]',
        'mb-[1.6rem]',
        'sm:max-w-[154px] lg:max-w-[310px]',
        'sm:justify-self-end xl:justify-self-start'
    ),
}
