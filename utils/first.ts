/**
 * Делает первую букву строки заглавной или строчной
 * @param string строка
 * @returns строка
 */
export const first = {
    uc: (string?: string) => (!string ? '' : string[0].toUpperCase() + string.slice(1)),
    lc: (string?: string) => (!string ? '' : string[0].toLowerCase() + string.slice(1)),
}
