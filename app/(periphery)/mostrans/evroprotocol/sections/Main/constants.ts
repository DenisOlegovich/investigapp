import { Docs, DocsDisplayNames } from '@/constants'

import { ListProps } from '@/components/List'

export const list: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: 'Отсутствие пострадавших (не был причинен вред жизни и здоровью водителей, пешеходов, пассажиров).',
        },
        {
            title: 'В ДТП участвовало не более 2 автомобилей.',
        },
        {
            title: 'В ДТП не причинен вред иному имуществу, кроме транспортных средств участников ДТП.',
        },
        {
            title: 'Оба автотранспортных средства имеют полис ОСАГО.',
        },
        {
            title: 'Водители обоих автотранспортных средств вписаны в страховые полисы.',
        },
        {
            title: 'Обе стороны выразили готовность оформить ДТП с помощью Европротокола и в дальнейшем следовать всем обязанностям участников ДТП.',
        },
    ],
}

export const docs = [
    {
        title: DocsDisplayNames[Docs.postanovlenie],
        href: Docs.postanovlenie,
    },
    {
        title: DocsDisplayNames[Docs.evroprotocolForma],
        href: Docs.evroprotocolForma,
    },
    {
        title: DocsDisplayNames[Docs.instrukciaLicevaya],
        href: Docs.instrukciaLicevaya,
    },
    {
        title: DocsDisplayNames[Docs.zayavlenieNekorektirovannoyInf],
        href: Docs.zayavlenieNekorektirovannoyInf,
    },
]
