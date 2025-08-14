import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ICustomTable } from '../../../../shared/interfaces/custom-table.interface';
import { CustomTableComponent } from '../../../../shared/components/custom-table-component/custom-table-component';

@Component({
  selector: 'app-users-page',
  imports: [CustomTableComponent],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss'
})
export class UsersPage implements OnInit {

  cols: ICustomTable[] = []
  users: IUser[] = [];
  loading: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nombre' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Telefono' },
    ]

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
        this.loading = false;
      }
    });
  }

}
