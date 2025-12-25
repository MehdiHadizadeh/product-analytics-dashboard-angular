export interface TableColumn {
    property: string;
    label: string;
    sortable?: boolean;
}

export type AppSortDirection = 'asc' | 'desc' | '';