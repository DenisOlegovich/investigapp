import { ComponentPropsWithoutRef } from 'react'

import { ExternalLinks } from '@/constants/externalLinks'
import { list } from './constants'
import { cn } from '@/utils'
import TextAlert from '@/components/TextAlert'
import Link from '@/components/Link'
import List from '@/components/List'
import Image from '@/components/Image'
import { yellowTerminal } from '@/Images'

import { styles } from '../../../styles'

export default function Remote({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <div className="row-span-3 grid grid-cols-1 xl:row-span-2 xl:grid-cols-3">
                <div className={cn('col-span-1 xl:col-span-2', 'max-w-full xl:max-w-[867px]')}>
                    <h4 className={styles.h4}>Удаленное пополнение</h4>
                    <p className={styles.text}>
                        При удаленном пополнении карты «Тройка» перед использованием карты для оплаты проезда,
                        пополнение необходимо записать на карту с помощью желтых информационных терминалов,
                        расположенных в каждом вестибюле Московского метрополитена. Также активировать
                        удаленно-зачисленные денежные средства можно в киосках ООО «Аэроэкспресс», терминалах ОАО
                        «Центральная ППК» и ОАО «Московско-Тверская ППК».
                    </p>
                    <TextAlert
                        className="mb-xl mt-lg md:my-xl"
                        description="На данный момент при удаленном пополнении карты «Тройка» доступна оплата только баланса проездного билета «Кошелек». Средствами, внесенными в счет билета «Кошелек», оплата других видов билетов невозможна."
                    />
                </div>
                <div
                    className={cn(
                        'mb-xl xl:mb-0',
                        'flex items-start justify-center xl:justify-end',
                        'col-span-1 xl:col-span-1 xl:row-span-2'
                    )}
                >
                    <div
                        className={cn(
                            'relative flex flex-col items-center justify-center',
                            'max-w-[288px] md:max-w-[310px]'
                        )}
                    >
                        <Image
                            img={yellowTerminal}
                            alt="Yellow Terminal"
                        />
                        <p className={cn('absolute', 'text-center h4 md:font-bold', 'top-[290px] md:top-[310px]')}>
                            Важно!
                        </p>
                        <p className="text-center">
                            После удалённого пополнения «Тройки» деньги нужно записать (активировать), приложив карту к
                            жёлтому терминалу в метро.
                        </p>
                    </div>
                </div>
                <div className={cn('max-w-full xl:max-w-[867px]', 'col-span-1 xl:col-span-2 ')}>
                    <p className={styles.text}>Комиссия за пополнение не взимается.</p>
                    <List
                        className="mt-xs md:mt-base"
                        {...list}
                    />
                    <h2 className={cn('mt-2xl md:mt-3xl', styles.title)}>Автоплатеж на карту «Тройка»</h2>
                    <p>
                        Можно ограничить средства, которые будут списываться с карты в месяц, а также изменить настройки
                        автоматического пополнения в любой момент.
                    </p>
                    <p className={styles.text}>
                        Для записи баланса на карту «Тройка» её надо приложить к желтому терминалу на любой станции
                        московского метрополитена.
                    </p>
                    <p className={styles.text}>
                        Пополнить карту можно&ensp;
                        <Link
                            href={ExternalLinks.toUpTroika}
                            variant="default"
                            type="external"
                        >
                            здесь
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
