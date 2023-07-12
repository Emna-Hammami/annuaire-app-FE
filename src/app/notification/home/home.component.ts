import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatIconModule,MatTableModule],
})

export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'title', 'description'];

  allNotifications: Notification[] = [];
  
 
  constructor(private notificationService: NotificationService) {}
 
  ngOnInit(): void {
    
 
    this.get();
  }
 
  get() {
    this.notificationService.getNotification().subscribe((data) => {
      this.allNotifications = data;
    });
  }

}
