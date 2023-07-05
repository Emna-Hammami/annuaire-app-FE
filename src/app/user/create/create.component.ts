import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speciality } from 'src/app/speciality/speciality';
import { SpecialityService } from 'src/app/speciality/speciality.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  allSpecialities: Speciality[] = [];
  userForm: User = {
    id: 0,
    email: '',
    username: '',
    password:'',
    speciality:{
      id :0,
      name:'',
      description:'',
    }
  };
 
  constructor(private userService:UserService,
    private specialityService: SpecialityService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.get();
    console.log("one");
  }
 
  get() {
    this.specialityService.getSpeciality().subscribe((data) => {
      console.log("two");
      this.allSpecialities = data;
      console.log("three");
    });
  }
 
  create(){
    console.log("four");
    this.userService.createUser(this.userForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/users/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
    console.log("five");
  }

}
