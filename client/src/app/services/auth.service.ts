import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
  register(user: User) {    
    return this.http.post(this.registerUrl, user);
  }
}
