import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Membership } from '../membership';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class EditComponent implements OnInit {
  experation: Date | undefined;

  membershipForm: Membership = {
    id: 0,
    experation: new Date(),
    amount: 0,
    payment: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private membershipService: MembershipService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.membershipService.getMembershipById(id).subscribe((data) => {
      this.membershipForm = data;
    });
  }
 
  update() {
    this.membershipService.updateMembership(this.membershipForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/membership/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
