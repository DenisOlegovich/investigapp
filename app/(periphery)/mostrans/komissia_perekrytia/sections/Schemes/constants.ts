import { Docs } from '@/constants'

import { ListProps } from '@/components/List'

export const standardSchemes = Docs.standardSchemes

export const list: ListProps = {
    variant: 'ordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'Магистралях общегородского значения I класса;',
        },
        {
            title: 'Магистралях Третьего транспортного кольца;',
        },
        {
            title: 'Магистралях районного и общегородского значения II класса;',
        },
        {
            title: 'МКАД;',
        },
        {
            title: 'Магистральных улицах с 1 реверсивной полосой;',
        },
        {
            title: 'Магистральных улицах в тоннелях;',
        },
        {
            title: 'Съездах с МКАД;',
        },
        {
            title: 'Мостах, путепроводах;',
        },
        {
            title: 'Магистральных улицах с 2-мя реверсивными полосами;',
        },
        {
            title: 'Магистралях районного и общегородского значения II класса;',
        },
        {
            title: 'Магистралях районного значения.',
        },
    ],
}
