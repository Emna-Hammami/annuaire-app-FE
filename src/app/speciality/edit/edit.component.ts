import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Speciality } from '../speciality';
import { SpecialityService } from '../speciality.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class EditComponent implements OnInit {
  specialityForm: Speciality = {
    id: 0,
    name: '',
    description: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private specialityService: SpecialityService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.specialityService.getById(id).subscribe((data) => {
      this.specialityForm = data;
    });
  }
 
  update() {
    this.specialityService.updateSpeciality(this.specialityForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/speciality/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
