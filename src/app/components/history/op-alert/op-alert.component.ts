import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Date: string;
  Time: string;
  Name: string;
  Alert: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: '2017-01-01', Time: '12:23', Name: 'G.F. Tank', Alert: 'Low'}
];


@Component({
  selector: 'app-op-alert',
  templateUrl: './op-alert.component.html',
  styleUrls: ['./op-alert.component.less']
})

export class OpAlertComponent implements OnInit {
  displayedColumns: string[] = ['Date', 'Time', 'Name', 'Alert'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
