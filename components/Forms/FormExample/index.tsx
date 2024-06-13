'use client'

import {
    testFormData,
    testSelectOptions,
    testRadioGroupOptions,
    testRadioButtonGroupOptions,
    testSwitchBetweenOptions,
} from './consts'
import { useForm } from '@/hooks'
import InputControlled from '@/components/Forms/InputControlled'
import TextareaControlled from '@/components/Forms/TextareaControlled'
import SelectControlled from '@/components/Forms/SelectControlled'
import RadioGroupControlled from '@/components/Forms/RadioGroupControlled'
import CheckboxControlled from '@/components/Forms/CheckboxControlled'
import SwitchControlled from '@/components/Forms/SwitchControlled'

export default function TestClientComponent() {
    const { formFieldsControl, resetForm, clearForm, submitForm } = useForm({
        formData: testFormData,
        onOk: (values) => {
            console.log('values', values)
        },
    })

    return (
        <div className="flex justify-center">
            <form
                onSubmit={submitForm}
                className="grid w-1/2 gap-12"
            >
                <InputControlled
                    {...formFieldsControl['group-1.test-input-1-field-name']}
                    type="text"
                    label="Инпут 1"
                    prefix="A"
                    postfix="B"
                    anatomy={{
                        prefixWrapper: 'text-red',
                        postfixWrapper: 'text-red',
                    }}
                />

                <InputControlled
                    {...formFieldsControl['group.test-input-2-field-name']}
                    type="password"
                    label="Инпут 2"
                />

                <TextareaControlled
                    {...formFieldsControl['group.text-area-field-name']}
                    name="group.text-area-field-name"
                    label="Текстовая область"
                    characterLimit={40}
                />

                <SelectControlled
                    {...formFieldsControl['select-field-name']}
                    options={testSelectOptions}
                    label="Поле с одиночным селектом"
                    isMulti
                    closeMenuOnSelect={false}
                    isClearable
                />

                <RadioGroupControlled
                    {...formFieldsControl['radio-group-field-name']}
                    options={testRadioGroupOptions}
                    variant="default"
                    label="Поле со стандартной Радиогруппой"
                />

                <CheckboxControlled
                    {...formFieldsControl['checkbox-field-name']}
                    label="Поле с Чекбоксом"
                />

                <RadioGroupControlled
                    {...formFieldsControl['radio-button-group-field-name']}
                    options={testRadioButtonGroupOptions}
                    variant="button"
                    label="Поле с Радиогруппой с иконками"
                />

                <SwitchControlled
                    {...formFieldsControl['switch-field-name']}
                    label="Стандартный переключатель true/false"
                />

                <SwitchControlled
                    {...formFieldsControl['switch-between-field-name']}
                    type="between"
                    options={testSwitchBetweenOptions}
                />

                <button
                    type="button"
                    onClick={resetForm}
                >
                    Сбросить
                </button>

                <button
                    type="button"
                    onClick={clearForm}
                >
                    Очистить
                </button>

                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}
