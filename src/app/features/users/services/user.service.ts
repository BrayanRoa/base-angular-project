import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../../core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<IUser> {
  constructor(http: HttpClient) {
    super(http, '');
  }

  // getUsers(): Observable<IUser[]> {
  //   return this.getAll();
  // }

  getUsers(page: number = 1, per_page: number = 5): Observable<IUser> {
    const testUtl = 'https://randomuser.me/api'
    return this.http.get<IUser>(`${testUtl}?page=${page}&results=${per_page}`)
  }
}
