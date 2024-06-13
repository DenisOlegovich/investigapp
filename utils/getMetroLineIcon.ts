import { metroLineIcons } from '@/constants'

export function getLineIcon(id: keyof typeof metroLineIcons) {
    return {
        src: metroLineIcons[id] ?? '',
    }
}
