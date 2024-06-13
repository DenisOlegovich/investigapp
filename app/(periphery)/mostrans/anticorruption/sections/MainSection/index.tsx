import Link from '@/components/Link'
import List from '@/components/List'
import { ExternalLinks, Mails, Tels } from '@/constants'
import { ComponentPropsWithoutRef } from 'react'

export default function MainSection(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <p className="mb-xs md:mb-base">
                Горячая линия по вопросам противодействия коррупции в Департаменте транспорта и развития
                дорожно-транспортной инфраструктуры города Москвы:
            </p>
            <List
                variant="unordered"
                className="mb-xs md:mb-base"
                items={[
                    {
                        title: (
                            <>
                                электронная почта: <Link href={`mailto:${Mails.hotline1}`}>{Mails.hotline1}</Link>;
                            </>
                        ),
                    },
                    {
                        title: (
                            <>
                                общефедеральный круглосуточный бесплатный телефон:&nbsp;
                                <Link href={`tel:${Tels.hotline1}`}>{Tels.hotline1}</Link>.
                            </>
                        ),
                    },
                ]}
            />
            <p>
                С регламентом работы горячей линии по вопросам противодействия коррупции в Департаменте транспорта и
                развития дорожно-транспортной инфраструктуры города Москвы можно ознакомиться&nbsp;
                <Link
                    type="external"
                    href={ExternalLinks.mosDecree13102021}
                >
                    тут
                </Link>
                .
            </p>
        </div>
    )
}
