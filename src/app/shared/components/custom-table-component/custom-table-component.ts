import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ITableColumn, ITableState } from '../../interfaces/custom-table.interface';
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { EBuildPipe } from '../../enums/pipes.enum';

@Component({
  selector: 'app-custom-table-component',
  imports: [TableModule],
  templateUrl: './custom-table-component.html',
  styleUrl: './custom-table-component.scss',
  providers: [CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe, SlicePipe, TitleCasePipe, LowerCasePipe, UpperCasePipe, AsyncPipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]
})
export class CustomTableComponent {

  // Data de entrada
  @Input() columns: ITableColumn[] = []
  @Input() state!: ITableState

  // Data de salida
  @Output() pageChange = new EventEmitter<{ page: number, perPage: number }>()

  // Configuración de los pipes
  pipeMap!: Record<string, any>;

  constructor(
    private currency: CurrencyPipe,
    private date: DatePipe,
    private decimal: DecimalPipe,
    private jsonPipe: JsonPipe,
    private percent: PercentPipe,
    private slice: SlicePipe,
    private titleCase: TitleCasePipe,
    private lower: LowerCasePipe,
    private upper: UpperCasePipe,
    private asyncPipe: AsyncPipe,
    private i18nPlural: I18nPluralPipe,
    private i18nSelect: I18nSelectPipe,
    private keyValue: KeyValuePipe,) {
    this.pipeMap = {
      [EBuildPipe.Currency]: this.currency,
      [EBuildPipe.Date]: this.date,
      [EBuildPipe.Decimal]: this.decimal,
      [EBuildPipe.Json]: this.jsonPipe,
      [EBuildPipe.Percent]: this.percent,
      [EBuildPipe.Slice]: this.slice,
      [EBuildPipe.TitleCase]: this.titleCase,
      [EBuildPipe.LowerCase]: this.lower,
      [EBuildPipe.UpperCase]: this.upper,
      [EBuildPipe.Async]: this.asyncPipe,
      [EBuildPipe.I18nPlural]: this.i18nPlural,
      [EBuildPipe.I18nSelect]: this.i18nSelect,
      [EBuildPipe.KeyValue]: this.keyValue,
    };
  }

  /**
   * 
   * @param event 
   * 
   * Emite un evento de tipo output, lo cual nos indica al componente padre que hay un cambio en la paginación
   */
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

  /**
   * 
   * @param value - valor como por ejemplo: 1970-05-19T09:46:27.725Z
   * @param pipeName - date
   * @param args - ['longDate']
   * 
   * @returns el valor formateado de acuerdo al pipe que se le haya especificado
   */
  applyPipe(value: any, pipeName?: string, args: any[] = []): any {
    if (!pipeName) return value;
    const pipe = this.pipeMap[pipeName];
    return pipe ? pipe.transform(value, ...args) : value;
  }
}
