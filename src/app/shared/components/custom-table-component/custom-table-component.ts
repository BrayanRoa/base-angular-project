import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ITableColumn, ITableState } from '../../interfaces/custom-table.interface';

@Component({
  selector: 'app-custom-table-component',
  imports: [TableModule],
  templateUrl: './custom-table-component.html',
  styleUrl: './custom-table-component.scss'
})
export class CustomTableComponent {

  @Input() columns: ITableColumn[] = []
  @Input() state!: ITableState

  @Output() pageChange = new EventEmitter<{ page: number, perPage: number }>()

  onPage(event: any) {
    const page = event.first / event.rows + 1;
    const perPage = event.rows;
    this.pageChange.emit({ page, perPage });
  }


  /**
   * Obtiene el valor de una propiedad de un objeto, incluso si está anidada.
   *
   * @param item - Objeto desde el cual se quiere obtener el valor.
   * @param field - Ruta de la propiedad en formato "dot notation", 
   *                por ejemplo "name.first" o "address.city".
   *
   * @returns El valor encontrado en la ruta indicada, o undefined si no existe.
   *
   * @example
   * const user = { name: { first: 'Brayan', last: 'Roa' } };
   * getValue(user, 'name.first'); // 'Brayan'
   * getValue(user, 'name.middle'); // undefined
  */
  getValue(item: any, field: string): any {
    return field.split('.').reduce((obj, key) => obj && obj[key], item);
  }
}
