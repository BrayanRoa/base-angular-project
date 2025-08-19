export interface ITableColumn {
    field: string
    header: string
}

export interface ITableState {
    data: any[];
    applyPaginator: boolean,
    page?: number;
    perPage?: number;
    totalRecords: number;
    loading?: boolean;
}