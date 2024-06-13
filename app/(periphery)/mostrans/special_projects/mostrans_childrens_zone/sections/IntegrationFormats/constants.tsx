import { cn } from '@/utils'
import {
    busStop,
    busStopFront,
    childrenBike,
    childrenBikeBack,
    interactiveBus,
    interactiveBusFront,
    interactiveBusFrontWithPassenger,
    interactiveDriverCabin,
    interactiveTrain,
    interactiveTrainFront,
    interactiveСarriage,
    motorTown,
    parkingMeter,
    parkingMeterFront,
} from '@/Images'
import { ListProps } from '@/components/List'
import Image from '@/components/Image'
import { styles } from './styles'

const integrationFormatItems = [
    {
        titleItem:
            'Московский метрополитен: создана интерактивная кабина машиниста и один вагон поезда по аналогии с реальным поездом метро, где проходит обучение ребят профессии машиниста и правилам поведения в подземном транспорте.',
        images: [interactiveСarriage, interactiveDriverCabin],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-2',
        imageStyle: 'h-[14.2rem] sm:h-[25rem]',
    },
    {
        titleItem:
            'Наземный городской пассажирский транспорт: создана брендированная интерактивная кабина водителя автобуса, где ребенок сможет почувствовать себя едущим по реальной московской дороге, и остановка наземного транспорта по аналогии с реально существующими объектами.',
        images: [interactiveBus, interactiveBusFront, interactiveBusFrontWithPassenger],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-3',
        imageStyle: 'h-[14.2rem] sm:h-[20rem]',
    },
    {
        titleItem:
            'Московский прокат: созданы и размещены станции велопроката, с возможностью взять напрокат велосипед и проехать по велотреку, а также созданы аналоги веломастерских, где проводятся регулярные занятия по ремонту велосипедов и инструктажи по правилам пользования велотранспортом.',
        images: [childrenBikeBack, childrenBike],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-2',
        imageStyle: 'h-[14.2rem] sm:h-[25rem]',
    },
    {
        titleItem:
            'Московский паркинг: создана брендированная зона с паркоматами и парковками в зоне передвижения на маленьких машинках, мотоциклах, велосипедах.',
        images: [parkingMeterFront, parkingMeter],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-2',
        imageStyle: 'h-[20rem] sm:h-[35rem] md:h-[50rem]',
    },
    {
        titleItem: 'Московские центральные диаметры: создана брендированная зона и макет вагона поезда «Иволга».',
        images: [interactiveTrain, interactiveTrainFront],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-2',
        imageStyle: 'h-[14.2rem] sm:h-[20rem]',
    },
    {
        titleItem:
            'Карта «Тройка»: на всех детских площадках ребятам выдается аналог карты «Тройка» и рассказывают про удобства и преимущества пользования картой «Тройка» в Москве.',
        images: [busStop, busStopFront, motorTown],
        wrapperImagesStyle: 'grid-cols-1 sm:grid-cols-3',
        imageStyle: 'h-[14.2rem] sm:h-[20rem]',
    },
]

export const integrationFormatList: ListProps = {
    variant: 'unordered',
    items: integrationFormatItems.map(({ titleItem, images, wrapperImagesStyle, imageStyle }) => ({
        title: (
            <>
                <span>{titleItem}</span>
                <span className={cn(styles.wrapperImages, wrapperImagesStyle)}>
                    {images.map((image, idx) => (
                        <Image
                            key={idx}
                            img={image}
                            alt=""
                            className={cn(styles.image, imageStyle)}
                        />
                    ))}
                </span>
            </>
        ),
    })),
}
