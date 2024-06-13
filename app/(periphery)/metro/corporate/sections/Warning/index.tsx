import { ComponentPropsWithoutRef } from 'react'

import { Mails, Tels } from '@/constants'
import TextAlert from '@/components/TextAlert'
import Link from '@/components/Link'

export default function Warning(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <TextAlert
                description="Транспортная карта «Тройка» предоставляется под залог в размере 150 рублей (с возможностью возврата) или приобретается в собственность по договору поставки из расчета 96 рублей за одну транспортную карту."
                className="mb-xl"
            />
            <p>
                По согласованию с Департаментом транспорта и развития дорожно-транспортной инфраструктуры возможно
                изготовление транспортных карт «Тройка», в особом (индивидуальном) дизайне, на которые будут записаны
                проездные билеты.
            </p>
            <br />
            <p>
                По вопросу заключения договора (контракта) необходимо обратиться в Отдел по работе с корпоративными
                клиентами Службы сбора доходов по телефону&nbsp;
                <Link href={`tel:${Tels.mosmetroConsult}`}>{Tels.mosmetroConsult}</Link> или по адресу электронной почты&nbsp;
                <Link href={`mailto:${Mails.b2b}`}>{Mails.b2b}</Link>. Заключение договора (контракта) и получение
                проездных билетов осуществляется по адресу: г. Москва, улица Краснопрудная, д. 9А, стр. 20.
            </p>
        </div>
    )
}
