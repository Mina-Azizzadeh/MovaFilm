export interface Filter {
    id: number,
    title: string,
    items: FilterOptions[]
}

export interface FilterOptions {
    id: number,
    name: string,
    checked: boolean
}