import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
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
import { NotificationService } from '../notification.service';



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

  /*notificationForm: Notification = {
    id: 0,
    title: '',
    description: '',
  };*/
 
  constructor(private notificationService:NotificationService,
    private router:Router) {}
 
  ngOnInit(): void {
    this.get();
    console.log("one");
  }
 
  get() {
    this.notificationService.getNotification().subscribe((data) => {
      console.log("two");
      //this.notificationForm = data;
      console.log("three");
    });
  }
 
 /* create(){
    console.log("four");
    this.notificationService.createNotification(this.notificationForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/notification/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
    console.log("five");
  }*/

}


export class FormFieldOverviewExample {}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


