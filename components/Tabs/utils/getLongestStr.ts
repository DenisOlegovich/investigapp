import { ITab } from '../types'

export function getLongestStr(tabs: ITab[]) {
    return tabs.reduce((max, tab) => (max.title.length > tab.title.length ? max : tab)).title
}
