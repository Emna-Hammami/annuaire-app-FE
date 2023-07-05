import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>('http://localhost:8085/user');
  }

  createUser(payload: User) {
    console.log("onhhhhhhhhhhhhe");
    console.log(payload);
    return this.http.post<User>('http://localhost:8087/user', payload);
  }

  getById(id: number) {
    return this.http.get<User>(`http://localhost:8087/user/${id}`);
   }
    
   updateUser(payload:User){
    return this.http.put(`http://localhost:8087/user`,payload);
   }
   deleteUser(id:number){
    return this.http.delete<User>(`http://localhost:8087/user/${id}`);
 }
}
