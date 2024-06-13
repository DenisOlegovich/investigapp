export function getExt(name: string) {
    return name.match(/\.([^.]+)$/)?.[1]
}
