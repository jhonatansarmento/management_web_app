export interface Device {
    id?: number,
    category: number | null,
    color: string,
    partNumber: number | null
}

export interface Category {
    id?: number,
    name: string
}