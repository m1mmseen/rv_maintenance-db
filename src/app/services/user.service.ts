import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = '';

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    this.http.get<User>(this.API_URL, {
      params: new HttpParams().set('id', id)
    })
  }


}
