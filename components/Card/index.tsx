import { CardProps, CardType } from './types'
import If from '@/components/If'
import CardBox from './components/CardBox'
import CardLink from './components/CardLink'

export default function Card<T extends CardType>({ type, href, isExternal, ...restProps }: CardProps<T>) {
    const cardBoxProps = restProps as Omit<CardProps<'box'>, 'type' | 'href' | 'isExternal'>

    const cardLinkProps = { href, isExternal, ...restProps } as Omit<CardProps<'link'>, 'type'>

    return (
        <If
            condition={type === 'link'}
            Else={<CardBox {...cardBoxProps} />}
        >
            <CardLink {...cardLinkProps} />
        </If>
    )
}
