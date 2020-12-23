import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  code: number;
  error: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', code: 1.0079, error: 'H'},
  {position: 2, name: 'Helium', code: 4.0026, error: 'He'},
  {position: 3, name: 'Lithium', code: 6.941, error: 'Li'},
  {position: 4, name: 'Beryllium', code: 9.0122, error: 'Be'},
  {position: 5, name: 'Boron', code: 10.811, error: 'B'},
  {position: 6, name: 'Carbon', code: 12.0107, error: 'C'},
  {position: 7, name: 'Nitrogen', code: 14.0067, error: 'N'},
  {position: 8, name: 'Oxygen', code: 15.9994, error: 'O'},
  {position: 9, name: 'Fluorine', code: 18.9984, error: 'F'},
  {position: 10, name: 'Neon', code: 20.1797, error: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['#', 'Name', 'Code', 'Error'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatSort) sort: MatSort;
  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.dataSource);
    // this.dataSource.sort = this.sort;
  }
  

}
