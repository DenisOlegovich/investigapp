export interface ErrorInfo {
    error?: string | { sector_errors: string[] }
    message?: string
    status?: number | string
    code?: number
    timestamp?: string
}
