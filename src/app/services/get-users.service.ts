import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../Interfaces/user';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getUser(): void {

  }

}
