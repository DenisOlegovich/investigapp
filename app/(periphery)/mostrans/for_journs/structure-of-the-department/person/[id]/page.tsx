import { Fragment } from 'react'

import { Pages } from '@/constants'
import { PageProps } from '@/types'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import Image from '@/components/Image'
import If from '@/components/If'
import { persons } from '../../constants/persons/index'
import { PersonIds } from '../../constants/persons/personIds'

export async function generateStaticParams() {
    return Object.keys(persons).map((key) => ({ id: key }))
}

type Params = { id: PersonIds }

// TODO: Добавить 404 страницу
export default function Person({ params }: PageProps<Params>) {
    if (!params?.id) {
        return null
    }

    const person = persons[params.id]

    return (
        <ContentLimiter className={cn('body-s md:body pt-[6.4rem] md:pt-[8.8rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <If
                condition={person}
                Else="Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена или введен неверный адрес в адресной строке."
            >
                <Link
                    href={Pages.departmentStructure}
                    variant="simple_gray"
                    className={'body-xs md:body-s'}
                >
                    ← Структура Московского транспорта
                </Link>

                <div className={styles.mainInfo}>
                    <div className="max-w-[75.5rem]">
                        <h1 className={styles.fullName}>{person?.fullName}</h1>
                        <p className={styles.jobTitle}>{person?.jobTitle}</p>
                    </div>
                    {person?.image && (
                        <Image
                            img={person?.image}
                            alt=""
                            className={styles.image}
                        />
                    )}
                </div>

                <div className={styles.detail}>
                    {person?.detail &&
                        person.detail.map(({ title, text, list }, idx) => (
                            <Fragment key={idx}>
                                {title && <h2 className={styles.titleContent}>{title}</h2>}
                                {text && <p>{text}</p>}
                                {list}
                            </Fragment>
                        ))}
                </div>
            </If>
        </ContentLimiter>
    )
}

const styles = {
    mainInfo: cn('flex', 'flex-wrap', 'justify-between', 'gap-2xl', 'mt-2xs md:mt-3xl'),
    fullName: cn('h1', 'mb-2xl md:mb-3xl'),
    jobTitle: cn('lead', 'text-grey-dark'),
    image: cn('size-[28.8rem] md:size-[31rem]', 'object-contain', 'rounded-[50%]'),
    detail: cn('max-w-[75.5rem]', 'flex', 'flex-col', 'gap-xs md:gap-base', 'body-s md:body'),
    titleContent: cn('h2', 'mb-[2rem] md:mb-[1.4rem]', 'mt-2xl md:mt-3xl'),
}
