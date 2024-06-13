// import sanitizeHtml from 'sanitize-html'

import { FAQContainerProps } from '@/app/containers/FAQContainer/types'
import { AccordionProps } from '@/components/Accordion'

import { questions } from '@/app/containers/FAQContainer/constants'

import FAQ from '@/components/FAQ'

function FAQContainer({ title, params, ...props }: FAQContainerProps) {
    const data: AccordionProps['items'] = questions.map(({ question, answer }) => ({
        title: question,
        content: answer,
        // content: (
        //     <div
        //         dangerouslySetInnerHTML={{
        //             __html: sanitizeHtml(answer),
        //         }}
        //     />
        // ),
    }))

    return (
        <FAQ
            title={title}
            data={data}
            {...props}
        />
    )
}

export default FAQContainer
