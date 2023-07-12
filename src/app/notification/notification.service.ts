import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotification() {
    return this.http.get<Notification[]>('http://localhost:8085/notification');
  }
  createNotification(payload: Notification) {
    console.log(payload);
    return this.http.post<Notification>('http://localhost:8085/notification', payload);
  }
  getNotificationById(id: number) {
    return this.http.get<Notification>(`http://localhost:8085/notification/${id}`);
   }
    
   updateNotification(payload:Notification){
    return this.http.put(`http://localhost:8085/notification`,payload);
   }
   deleteNotification(id:number){
    console.log(id);
    return this.http.delete<Notification>(`http://localhost:8085/notification/${id}`);
 }
}
