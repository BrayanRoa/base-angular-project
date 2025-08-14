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
    super(http, 'users');
  }

  getUsers(): Observable<IUser[]> {
    return this.getAll();
  }
}
