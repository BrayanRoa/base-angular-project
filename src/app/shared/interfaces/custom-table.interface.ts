import { PipeTransform } from "@angular/core";

export interface ITableColumn {
    field: string
    header: string
    pipe?: string;  // Aquí puedes inyectar un pipe de Angular
    pipeArgs?: any[];
}

export interface ITableState {
    data: any[];
    applyPaginator: boolean,
    page: number;
    perPage: number;
    totalRecords: number;
    loading?: boolean;
}