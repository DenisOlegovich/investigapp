import { CustomImage } from '@/Images'
import { QuoteProps } from '@/components/Quote'

export type ContentDataKeys = 'text' | 'image' | 'video' | 'quote'

export type ContentDataValues = string[] | CustomImage[] | QuoteProps[]

export type ContentData = Partial<Record<ContentDataKeys, ContentDataValues>>
