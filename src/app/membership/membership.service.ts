import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from './membership';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient) { }

  getMembership() {
    return this.http.get<Membership[]>('http://localhost:8085/membership');
  }

  createMembership(payload: Membership) {
    return this.http.post<Membership>('http://localhost:8085/membership', payload);
  }
  getMembershipById(id: number) {
    return this.http.get<Membership>(`http://localhost:8085/membership/${id}`);
   }
    
   updateMembership(payload:Membership){
    return this.http.put(`http://localhost:8085/membership`,payload);
   }
   deleteMembership(id:number){
    return this.http.delete<Membership>(`http://localhost:8085/membership/${id}`);
 }
}
