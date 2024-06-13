import { ComponentPropsWithoutRef } from 'react'

import { Docs, DocsDisplayNames, ExternalLinks } from '@/constants'
import { docBlankApplication, docs } from './constants'
import { cn } from '@/utils'

import DownloadDoc from '@/components/DownloadDoc'
import Link from '@/components/Link'
import TextAlert from '@/components/TextAlert'

export default function Ways({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <h2 className="h2">Порядок обжалования штрафов</h2>
            <div>
                <p className={cn(styles.container, 'mb-lg', 'font-medium')}>
                    Жалоба на постановление по делу об административном правонарушении в течение десяти суток со дня
                    вручения или получения копии постановления подается лицом, в отношении которого вынесено
                    постановление, вышестоящему должностному лицу, либо в канцелярию районного суда по месту совершения
                    административного правонарушения, адрес которого можно уточнить на сайте&ensp;
                    <Link
                        type="external"
                        href={ExternalLinks.mosGorSug}
                    >
                        Московского городского суда
                    </Link>
                    .
                </p>
                <h4 className={styles.heading}>Пояснения по обжалованию штрафов</h4>
                <div className={styles.containerWithDocs}>
                    <div className={styles.container}>
                        <p className={styles.text}>
                            Подать жалобу на постановление об административном правонарушении имеет право лицо, в
                            отношении которого ведётся производство по делу об административном правонарушении, законный
                            представитель физического лица, защитник, имеющий оформленный надлежащим образом документ,
                            подтверждающий его полномочия или иные лица, указанные в ст. 25.1-25.5.1 Кодекса Российской
                            Федерации об административных правонарушениях от 30.12.2001 № 195-ФЗ (далее – КоАП РФ).
                        </p>
                        <p className={styles.text}>
                            Жалоба на постановление по делу об административном правонарушении подаётся в течение 10
                            суток (часть 1, 2 статьи 30.3 КоАП РФ) со дня вручения или получения копии постановления. В
                            случае пропуска предусмотренного срока обжалования, по ходатайству лица, подающего жалобу,
                            указанный срок может быть восстановлен судьей или должностным лицом, правомочными
                            рассматривать жалобу&nbsp;
                            <Link
                                type="new-window"
                                href={docBlankApplication ?? '#'}
                            >
                                {DocsDisplayNames[Docs.blankApplication]}
                            </Link>
                            .
                        </p>
                        <p className={styles.text}>
                            Статьей 30.2 КоАП РФ порядок подачи жалобы на постановление по делу об административном
                            правонарушении в электронном виде, то есть в формате обращения, не предусмотрен, поскольку
                            не содержится подпись лица, отправившего документ.
                        </p>
                    </div>

                    <div className={styles.docs}>
                        {docs.map((doc, idx) => (
                            <DownloadDoc
                                key={idx}
                                {...doc}
                            />
                        ))}
                    </div>
                </div>

                <TextAlert
                    className={cn(styles.container, 'mt-xl')}
                    description="При подаче жалобы на постановление по делу об административном правонарушении необходима собственноручная подпись!"
                />
            </div>
            <div className={cn(styles.container, styles.lastBlock)}>
                <h3 className="h3">
                    Подать жалобу на постановление по делу об административном правонарушении можно одним из следующих
                    способов:
                </h3>
                <div>
                    <h4 className={styles.heading}>Через портал Московский Транспорт</h4>
                    <p>
                        В электронную приемную через форму&nbsp;
                        <Link
                            type="external"
                            href={ExternalLinks.appealDecision}
                        >
                            «Обжалование постановления»
                        </Link>
                        &nbsp;необходимо загрузить скан жалобы.
                    </p>
                </div>

                <div>
                    <h4 className={styles.heading}>При личном посещении Учреждения</h4>
                    <p className={styles.text}>
                        По адресу: г. Москва, 2-й Южнопортовый проезд, д.27А, стр. 1 (ящик для писем)
                    </p>
                    <p className={styles.text}>
                        Приемные дни: понедельник-четверг с 8:00 до 17:00; пятница с 8:00 до 15:45.
                    </p>
                </div>

                <div>
                    <h4 className={styles.heading}>По почте</h4>
                    <p>
                        Вышеуказанный комплект документов необходимо направить по адресу: 127994, г. Москва, ул.
                        Садовая-Самотечная, д. 1, Государственному казенному учреждению города Москвы «Организатор
                        перевозок».
                    </p>
                    <p className={cn(styles.text, 'font-medium')}>
                        Заявитель вправе приложить дополнительные материалы:документ удостоверяющий личность, копию
                        постановления, проездной документ (билет), социальную карту (если гражданин имеет льготный
                        проездной документ).
                    </p>
                    <p className={styles.text}>
                        Жалоба на постановление по делу об административном правонарушении&nbsp;
                        <b>
                            подлежит рассмотрению в десятидневный срок со дня ее поступления со всеми материалами дела
                        </b>
                        &nbsp;в орган, должностному лицу, правомочным рассматривать жалобу (статья 30.5 КоАП РФ). Копия
                        решения по жалобе на постановление по делу об административном правонарушении в срок до трех
                        суток после его вынесения вручается или высылается лицу, в отношении которого было вынесено
                        постановление по делу.
                    </p>
                </div>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'gap-xl'),
    text: 'mt-xs md:mt-base first:mt-0',
    heading: cn('h4', 'mb-sm md:mb-lg'),
    alert: 'mt-lg md:mt-xl',
    docs: cn('flex flex-col', 'gap-sm md:gap-[4rem]', 'xl:max-w-[32rem]', 'xl:mt-[2.6rem]'),
    container: cn('max-w-[755px]'),
    containerWithDocs: cn('flex flex-col xl:flex-row', 'gap-x-[10%]', 'gap-y-lg'),
    lastBlock: cn('flex flex-col gap-lg'),
}
