import { ListProps } from '@/components/List'
import Link from '@/components/Link'
import { Mails, Tels } from '@/constants'

export const websiteTickets: ListProps = {
    items: [
        { title: 'Выбираем оферту, которая отвечает Вашим потребностям.' },
        {
            title: 'После добавления выбранных оферт в корзину, необходимо перейти в раздел «Магазин» далее выбрать «Моя корзина», проставить галочку напротив соответствующих оферт, по которым будет формироваться заявка на прямую закупку, указать требуемое количество продукции и нажать на кнопку «Создать закупку». Контракт формируется автоматически.',
        },
        {
            title: (
                <>
                    Запросить техническое задание к оферте можно написав на почту{' '}
                    <Link href={`mailto:${Mails.portalMosmetro}`}>{Mails.portalMosmetro}</Link>. Получить консультацию
                    по вопросам связанные с «Порталом поставщиков» можно по номеру телефона{' '}
                    <Link href={`tel:${Tels.supplierPortal}`}>{Tels.supplierPortal}</Link>
                </>
            ),
        },
    ],
}
