import { Component, Input } from '@angular/core';
import { ICustomTable } from '../../interfaces/custom-table.interface';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-custom-table-component',
  imports: [TableModule],
  templateUrl: './custom-table-component.html',
  styleUrl: './custom-table-component.scss'
})
export class CustomTableComponent {

  @Input() columns: ICustomTable[] = []
  @Input() data: any
  @Input() loading: boolean = false


  onPage(event:any){
    console.log(event)
  }
}
