import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ITableColumn, ITableState } from '../../../../shared/interfaces/custom-table.interface';
import { CustomTableComponent } from '../../../../shared/components/custom-table-component/custom-table-component';
import { DatePipe } from '@angular/common';
import { EBuildPipe, EDatePipeFormat } from '../../../../shared/enums/pipes.enum';

@Component({
  selector: 'app-users-page',
  imports: [CustomTableComponent],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss'
})
export class UsersPage implements OnInit {

  state: ITableState = {
    data: [],
    applyPaginator: true,
    page: 1,
    perPage: 5,
    totalRecords: 100,
    loading: false,
  };


  constructor(
    private userService: UserService,
  ) { }

  columns: ITableColumn[] = [];

  ngOnInit(): void {
    this.columns = [
      { field: 'name.first', header: 'First Name' },
      { field: 'name.last', header: 'Last Name', pipe: EBuildPipe.TitleCase },
      { field: 'gender', header: 'Gender' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' },
      { field: 'location.coordinates.latitude', header: 'Location' },
      { field: 'dob.date', header: 'Date birthday', pipe: EBuildPipe.Date, pipeArgs: [EDatePipeFormat.ShortDate] }
    ]
    this.loadUsers()
  }

  loadUsers() {
    this.state.loading = true;
    this.userService.getUsers(this.state.page, this.state.perPage).subscribe({
      next: (data) => {
        this.state.data = data.results;
        this.state.totalRecords = 100; // ⚠️ aquí deberíamos usar el total real si la API lo soporta
        this.state.loading = false;
      },
      error: () => (this.state.loading = false)
    });
  }

  onPageChange(event: { page: number; perPage: number }) {
    this.state.page = event.page;
    this.state.perPage = event.perPage;
    this.loadUsers();
  }
}
