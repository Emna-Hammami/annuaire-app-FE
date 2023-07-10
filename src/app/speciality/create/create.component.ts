import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Speciality } from '../speciality';
import { SpecialityService } from '../speciality.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone: true,
  imports: [BrowserAnimationsModule, HttpClientModule, MatToolbarModule, FormsModule, 
    MatSidenavModule,MatButtonModule,MatIconModule,MatDividerModule, 
    MatFormFieldModule,MatDialogModule,MatTableModule,
    MatInputModule,ReactiveFormsModule, NgIf,MatSelectModule,]
})
export class CreateComponent implements OnInit {

  emailFormControl = new FormControl();
  hide = false;
  matcher: ErrorStateMatcher= new ErrorStateMatcher();

  specialityForm: Speciality = {
    id: 0,
    name: '',
    description: '',
  };
 
  constructor(private specialityService:SpecialityService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.get();
    console.log("one");
  }
 
  get() {
    this.specialityService.getSpeciality().subscribe((data) => {
      console.log("two");
      //this.specialityForm = data;-
      console.log("three");
    });
  }
 
  create(){
    console.log("four");
    this.specialityService.createSpeciality(this.specialityForm)
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

export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

export class FormFieldOverviewExample {}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
}


