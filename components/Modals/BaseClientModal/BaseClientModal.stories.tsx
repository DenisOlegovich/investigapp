import { Meta, StoryObj } from '@storybook/react'

import { useTrigger } from '@/hooks/useTrigger'
import Modal from '.'

const ComponentWithBaseClientModal = () => {
    const [isOpen, { onHandler: openModal, offHandler: hideModal }] = useTrigger()

    return (
        <div className="h-[100vh] w-[100vw]">
            <button onClick={openModal}>Триггер модалки</button>

            <Modal
                isOpen={isOpen}
                onClose={hideModal}
            >
                <div>Базовое кдиентское модальное окно</div>

                <button onClick={hideModal}>Закрыть</button>
            </Modal>

            <div id="modal-root" />
        </div>
    )
}

const meta: Meta = {
    title: 'Components/Modals/BaseClientModal',
    component: ComponentWithBaseClientModal,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
