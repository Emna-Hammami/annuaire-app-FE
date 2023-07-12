import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
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
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MembershipModule } from './membership/membership.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { Speciality } from './speciality/speciality';
import { UserModule } from './user/user.module';


export interface User {
  id: number;
  email: string;
  username: string;
  password:string;
  speciality: Speciality;
}

@NgModule({
  declarations: [
    AppComponent, 
    
    ProfileComponent,
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule, NgIf,
    MatSelectModule,
    UserModule, MembershipModule
  ],
  providers: [authInterceptorProviders, NgForm, FormGroupDirective, ErrorStateMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }

