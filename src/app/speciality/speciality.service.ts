import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speciality } from './speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private http: HttpClient) { }

  getSpeciality() {
    return this.http.get<Speciality[]>('http://localhost:8085/speciality');
  }
  createSpeciality(payload: Speciality) {
    console.log(payload);
    return this.http.post<Speciality>('http://localhost:8085/speciality', payload);
  }
  getById(id: number) {
    return this.http.get<Speciality>(`http://localhost:8085/speciality/${id}`);
   }
    
   updateSpeciality(payload:Speciality){
    return this.http.put(`http://localhost:8085/speciality`,payload);
   }
   deleteSpeciality(id:number){
    console.log(id);
    return this.http.delete<Speciality>(`http://localhost:8085/speciality/${id}`);
 }
}
