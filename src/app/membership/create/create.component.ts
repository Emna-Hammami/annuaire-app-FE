import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { Membership } from '../membership';
import { MembershipService } from '../membership.service';

import { MatDatepickerModule } from '@angular/material/datepicker';




import {
  MatNativeDateModule
} from '@angular/material/core';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [BrowserAnimationsModule,  MatToolbarModule, FormsModule, 
    MatSidenavModule,MatButtonModule,MatIconModule,MatDividerModule, 
    MatFormFieldModule,MatDialogModule,MatTableModule,
    MatInputModule,ReactiveFormsModule, MatSelectModule,
      MatNativeDateModule, MatNativeDateModule, MatDatepickerModule]
})

/*export class DatepickerCustomHeaderExample {
  exampleHeader = ExampleHeader;
}

export class ExampleHeader<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef,
  ) {
    _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}*/

export class CreateComponent implements OnInit {
  experation: Date | undefined;
  membershipForm: Membership = {
    id: 0,
    experation: new Date(),
    amount: 0,
    payment: '',
  };
 
  constructor(private membershipService:MembershipService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  save(){
    this.membershipService.createMembership(this.membershipForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/membership/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
