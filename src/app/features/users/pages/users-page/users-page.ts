import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ITableColumn, ITableState } from '../../../../shared/interfaces/custom-table.interface';
import { CustomTableComponent } from '../../../../shared/components/custom-table-component/custom-table-component';

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

  columns: ITableColumn[] = [
    { field: 'name.first', header: 'First Name' },
    { field: 'name.last', header: 'Last Name' },
    { field: 'gender', header: 'Gender' },
    { field: 'phone', header: 'Phone' },
    { field: 'email', header: 'Email' },
    { field: 'location.coordinates.latitude', header: 'Location' }
  ];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
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
