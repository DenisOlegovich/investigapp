import { ExternalLinks, Mails, Tels } from '@/constants'
import { cn } from '@/utils'

import Button from '@/components/Forms/Button'
import Link from '@/components/Link'
import { ListProps } from '@/components/List'

export const actionList: ListProps = {
    variant: 'ordered',
    markerSpacing: 0.8,
    anatomy: {
        item: 'md:my-[2.4rem]',
    },
    items: [
        {
            title: (
                <>
                    Запросить проект договора, в соответствии с выбранным тарифом, по адресу электронной почты&ensp;
                    <Link href={`mailto:${Mails.b2b}`}>{Mails.b2b}</Link>.
                </>
            ),
        },
        {
            title: (
                <>
                    После согласования договора за 1 рабочий день до визита закажите пропуск.
                    <div
                        className={cn(
                            'p-sm md:p-xl',
                            'bg-grey-extra-light',
                            'rounded-[0.8rem]',
                            'mt-sm md:mt-lg',
                            'mb-[1.2rem] md:mb-0'
                        )}
                    >
                        <p className="h3">Заказать пропуск в офис</p>
                        <p className={cn('text-[1.6rem]', 'mt-lg')}>Через электронную почту {Mails.b2b}</p>
                        <Button
                            as="link"
                            href={`mailto:${Mails.b2b}`}
                            variant="danger"
                            size="l"
                            className={cn('mt-sm md:mt-xl', 'w-full md:w-auto')}
                        >
                            Написать
                        </Button>
                    </div>
                </>
            ),
        },
        {
            title: (
                <>
                    Направьте оригинал договора в 2-х экземплярах по адресу: ул. Краснопрудная, д. 9А, стр. 20, эт. 3,
                    кабинет 303.
                    <br />
                    <br />
                    Часы приема Отдела по работе с корпоративными клиентами: Понедельник-четверг: с 9:00 до 16:30;
                    Пятница: с 9:00 до 15:00;
                    <br />
                    <Link
                        type="new-window"
                        href="/mostrans/build_route?to=ул.%20Краснопрудная,%207/9"
                    >
                        Построить маршрут до офиса
                    </Link>
                </>
            ),
        },
        {
            title: (
                <>
                    Через 5 рабочих дней уточните номер договора и дату регистрации по телефону:&ensp;
                    <Link href={`tel:${Tels.mosmetroConsult}`}>{Tels.mosmetroConsult}</Link>, или по адресу электронной
                    почты: <Link href={`mailto:${Mails.b2b}`}>{Mails.b2b}</Link>
                    <br />
                    <br />
                    Заполните заявку на выставление счета и направьте на электронную почту&ensp;
                    <Link href={`mailto:${Mails.shetamm}`}>{Mails.shetamm}</Link>
                </>
            ),
        },
        {
            title: (
                <>
                    После оплаты счета получите проездные билеты на складе Службы сбора доходов по адресу: ул.
                    Краснопрудная, д. 9А, стр. 20, 6 этаж, «окно выдачи».
                    <br />
                    <br />
                    За 1 рабочий день закажите пропуск:
                    <br />
                    <br />
                    Адрес электронной почты: <Link href={`mailto:${Mails.b2b}`}>{Mails.b2b}</Link>
                    <br />
                    <br />
                    Часы приема: Понедельник-четверг: с 9:00 до 16:30; Пятница: с 9:00 до 15:00; Без перерыва.
                    <br />
                    <br />
                    <Link
                        type="new-window"
                        href="/mostrans/build_route?to=ул.%20Краснопрудная,%209А,%20стр.%2020"
                    >
                        Построить маршрут до склада
                    </Link>
                </>
            ),
        },
    ],
}

export const neededDocList: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'паспорт,',
        },
        {
            title: 'доверенность формы М-2,',
        },
        {
            title: 'копию платежного поручения с отметкой банка,',
        },
        {
            title: 'копию счета на оплату',
        },
    ],
}

export const orderingWithDelivery: ListProps = {
    variant: 'ordered',
    markerSpacing: 0.8,
    anatomy: {
        item: 'md:my-[2.4rem]',
    },
    items: [
        {
            title: (
                <>
                    Оформите заказ на сайте&ensp;
                    <Link
                        type="external"
                        href={ExternalLinks.troykaBusiness}
                    >
                        troika.business
                    </Link>
                </>
            ),
        },
        {
            title: 'Оплатите по безналичному расчету.',
        },
        {
            title: 'Дождитесь курьера и получите транспортные карты с проездными билетами.',
        },
    ],
}
