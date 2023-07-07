import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Speciality } from 'src/app/speciality/speciality';
import { User } from '../user';
import { UserService } from '../user.service';


export interface UserList {
  id: number;
  email: string;
  username: string;
  password:string;
  speciality: Speciality;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatTableModule],
})




export class HomeComponent implements OnInit {
  allUsers: User[] = [];
 
  constructor(private userService: UserService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.userService.getUser().subscribe((data) => {
      this.allUsers = data;
    });
  }

}
