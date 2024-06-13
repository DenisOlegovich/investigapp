import { pictureTest } from '@/Images'
import { formData } from './constants'
import { cn } from '@/utils'
import { formatFormValues } from './utils'
import { useForm } from '@/hooks'
import Image from '@/components/Image'
import InputControlled from '@/components/Forms/InputControlled'
import Button from '@/components/Forms/Button'

export default function RegistrationForm() {
    const { formFieldsControl, submitForm } = useForm({
        formData,
        onOk: (values) => {
            const formattedValues = formatFormValues(values)
            console.log('ecoDiktant', formattedValues)
        },
    })

    return (
        <form
            onSubmit={submitForm}
            className={styles.wrapper}
        >
            <InputControlled
                {...formFieldsControl.name}
                type="text"
                placeholder="Иванов Иван Иванович"
                label="ФИО"
            />

            <InputControlled
                {...formFieldsControl.phone}
                type="phone"
                placeholder="+7 (999) 999 99-99"
                label="Телефон"
                mask="+7 (999) 999 99-99"
            />

            <InputControlled
                {...formFieldsControl.mail}
                type="email"
                placeholder="ivanov@mail.ru"
                label="Электронная почта"
            />

            <InputControlled
                {...formFieldsControl.picture}
                type="text"
                placeholder=""
                label={
                    <Image
                        img={pictureTest}
                        alt="picture"
                        className={cn('rounded-[0.8rem]', 'w-full')}
                    />
                }
                anatomy={{
                    label: 'flex',
                    container: 'w-full sm:max-w-[25rem]',
                }}
            />

            <Button
                type="submit"
                variant="danger"
                className={styles.button}
            >
                Отправить
            </Button>
        </form>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-sm sm:gap-lg'),
    button: cn('md:self-start', 'md:min-w-[25rem]'),
}
