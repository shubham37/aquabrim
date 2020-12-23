import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Date: string;
  Time: string;
  Name: string;
  Info: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: '2017-01-01', Time: '12:23', Name: 'G.F. Tank', Info: 'Low'}
];

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.less']
})
export class ErrorsComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Time', 'Name', 'Info'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
