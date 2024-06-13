import Link, { ILinkProps } from '@/components/Link'
import { ListProps } from '@/components/List'
import { Docs, DocsDisplayNames } from '@/constants'

const commonLinkProps: Pick<ILinkProps, 'type'> = {
    type: 'new-window',
}

export const list: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw40}
                >
                    {DocsDisplayNames[Docs.federallaw40]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw125}
                >
                    {DocsDisplayNames[Docs.federallaw125]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw273}
                >
                    {DocsDisplayNames[Docs.federallaw273]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw172}
                >
                    {DocsDisplayNames[Docs.federallaw172]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw3}
                >
                    {DocsDisplayNames[Docs.federallaw3]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw230}
                >
                    {DocsDisplayNames[Docs.federallaw230]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw79}
                >
                    {DocsDisplayNames[Docs.federallaw79]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw5}
                >
                    {DocsDisplayNames[Docs.federallaw5]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.federallaw432}
                >
                    {DocsDisplayNames[Docs.federallaw432]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree568}
                >
                    {DocsDisplayNames[Docs.governmentDecree568]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree613}
                >
                    {DocsDisplayNames[Docs.governmentDecree613]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree10}
                >
                    {DocsDisplayNames[Docs.governmentDecree10]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree29}
                >
                    {DocsDisplayNames[Docs.governmentDecree29]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree594}
                >
                    {DocsDisplayNames[Docs.governmentDecree594]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.governmentDecree228}
                >
                    {DocsDisplayNames[Docs.governmentDecree228]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree560}
                >
                    {DocsDisplayNames[Docs.presidentialDecree560]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree309}
                >
                    {DocsDisplayNames[Docs.presidentialDecree309]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree310}
                >
                    {DocsDisplayNames[Docs.presidentialDecree310]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree613}
                >
                    {DocsDisplayNames[Docs.presidentialDecree613]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree460}
                >
                    {DocsDisplayNames[Docs.presidentialDecree460]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree120}
                >
                    {DocsDisplayNames[Docs.presidentialDecree120]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree650}
                >
                    {DocsDisplayNames[Docs.presidentialDecree650]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.presidentialDecree478}
                >
                    {DocsDisplayNames[Docs.presidentialDecree478]}
                </Link>
            ),
        },
        {
            title: (
                <>
                    Уголовный кодекс Российской Федерации (ст.ст.&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st159}
                    >
                        {DocsDisplayNames[Docs.st159]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st201}
                    >
                        {DocsDisplayNames[Docs.st201]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st204}
                    >
                        {DocsDisplayNames[Docs.st204]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st204_1}
                    >
                        {DocsDisplayNames[Docs.st204_1]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st204_2}
                    >
                        {DocsDisplayNames[Docs.st204_2]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st285}
                    >
                        {DocsDisplayNames[Docs.st285]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st286}
                    >
                        {DocsDisplayNames[Docs.st286]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st290}
                    >
                        {DocsDisplayNames[Docs.st290]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st291}
                    >
                        {DocsDisplayNames[Docs.st291]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st291_1}
                    >
                        {DocsDisplayNames[Docs.st291_1]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st291_2}
                    >
                        {DocsDisplayNames[Docs.st291_2]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st292}
                    >
                        {DocsDisplayNames[Docs.st292]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st304}
                    >
                        {DocsDisplayNames[Docs.st304]}
                    </Link>
                    );
                </>
            ),
        },
        {
            title: (
                <>
                    Кодекс Российской Федерации об административных правонарушениях (ст.ст.&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st19_28}
                    >
                        {DocsDisplayNames[Docs.st19_28]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st19_29}
                    >
                        {DocsDisplayNames[Docs.st19_29]}
                    </Link>
                    );
                </>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.civilCode60}
                >
                    {DocsDisplayNames[Docs.civilCode60]}
                </Link>
            ),
        },
        {
            title: (
                <Link
                    {...commonLinkProps}
                    href={Docs.civilCode575}
                >
                    {DocsDisplayNames[Docs.civilCode575]}
                </Link>
            ),
        },
        {
            title: (
                <>
                    Трудовой кодекс Российской Федерации (&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st192}
                    >
                        {DocsDisplayNames[Docs.st192]}
                    </Link>
                    ,&nbsp;
                    <Link
                        {...commonLinkProps}
                        href={Docs.st81_7_1}
                    >
                        {DocsDisplayNames[Docs.st81_7_1]}
                    </Link>
                    ).
                </>
            ),
        },
    ],
}
