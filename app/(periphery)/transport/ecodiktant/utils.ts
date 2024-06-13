type FormValues = {
    name: string
    phone: string
    mail: string
    picture: string
}

export function formatFormValues(values: FormValues) {
    return {
        ...values,
        phone: values.phone.replace(/[^\d]/g, ''),
    }
}
