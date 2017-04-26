import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Users } from 'app/interfaces/users';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private usersUrl = 'https://reqres.in/api/users';

  constructor(private http: Http) {
    console.log('UsersService foi inicializado');
  }

  getUsers(pgNumber : number = 1) {
    return this.http.get(this.usersUrl + '?page=' + pgNumber)
                    .map(res => res.json());
  }

}