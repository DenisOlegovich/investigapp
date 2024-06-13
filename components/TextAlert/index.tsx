import { ReactNode, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils'

export interface TextAlertProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
    title?: ReactNode
    description: ReactNode
}

export default function TextAlert({ title = 'Важно!', description, className, ...props }: TextAlertProps) {
    return (
        <div
            className={cn(styles.alert, className)}
            {...props}
        >
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

const styles = {
    alert: 'border-[4px] border-solid border-yellow-warning rounded-[0.8rem] relative',
    title: 'h4 bg-white px-[0.4rem] absolute left-[2.8rem] -top-[1.9rem]',
    description: 'body-s md:body p-[2.4rem] pb-[1.2rem]',
}
