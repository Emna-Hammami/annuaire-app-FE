import { Component, OnInit } from '@angular/core';
import { Membership } from '../membership';
import { MembershipService } from '../membership.service';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule],
})
export class HomeComponent implements OnInit {
  allMemberships: Membership[] = [];
 
  constructor(private membershipService: MembershipService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.membershipService.getMembership().subscribe((data) => {
      this.allMemberships = data;
    });
  }

}
