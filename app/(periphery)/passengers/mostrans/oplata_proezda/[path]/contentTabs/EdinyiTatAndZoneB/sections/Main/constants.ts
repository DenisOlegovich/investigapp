import { cardBus, cardEdiniy, cardTat } from '@/Images'
import { ImageProps } from '@/components/Image'
import { TextAlertProps } from '@/components/TextAlert'

export const cards = [cardEdiniy, cardTat, cardBus]

export const alert: TextAlertProps = {
    title: 'Важно!',
    description:
        'Проездные билеты «Единый» на 1 и 2 поездки записываются на бумажный бланк билета и не предоставляют права проезда на МЦД. «Единый» проездной билет на 60 поездок не предоставляет права проезда в зоне «Пригород» МЦД',
}
