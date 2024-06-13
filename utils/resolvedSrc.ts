import { cloudUrl } from '@/constants/general'

export const resolvedSrc = (src?: string) => {
    if (src?.startsWith('@/')) {
        src = `${cloudUrl}/${src.slice(2)}`
    } else if (src?.startsWith('@public')) {
        src = src.replace('@public', '')
    }

    return src
}
