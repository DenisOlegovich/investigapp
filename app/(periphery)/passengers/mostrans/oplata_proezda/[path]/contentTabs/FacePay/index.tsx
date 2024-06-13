import Price from '@/components/Price'
import { cn } from '@/utils'
import HowPay from './sections/HowPay'
import HowUse from './sections/HowUse'
import Main from './sections/Main'

export default function FacePay() {
    return (
        <div className={styles.wrapper}>
            <Main />
            <HowUse className="md:col-start-1" />
            <HowPay className="md:col-start-1" />
            <Price
                title="50 ₽"
                description="Стоимость одной поездки при оплате по биометрии"
                className={styles.price}
            />
        </div>
    )
}

const styles = {
    wrapper: cn(
        'body-s md:body',
        'grid',
        // 'grid-cols-1 md:grid-cols-[auto_32%]',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_auto]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-2xl md:gap-y-3xl'
    ),
    price: cn('md:col-start-2', 'md:row-start-1', 'md:row-span-2', 'md:pt-[8rem]', 'max-w-[21.2rem] md:max-w-none'),
}
