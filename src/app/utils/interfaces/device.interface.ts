export interface Device {
    id?: number,
    category: string, // MUDAR PARA TIPO category: Category
    color: string,
    partNumber: number | null
}

export interface Category {
    id?: number,
    name: string
}