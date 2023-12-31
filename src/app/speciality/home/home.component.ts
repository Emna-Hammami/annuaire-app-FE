import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Speciality } from '../speciality';
import { SpecialityService } from '../speciality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule],
})
export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'actions'];

  allSpecialities: Speciality[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private specialityService: SpecialityService) {}
 
  ngOnInit(): void {
    
 
    this.get();
  }
 
  get() {
    this.specialityService.getSpeciality().subscribe((data) => {
      this.allSpecialities = data;
    });
  }

}
