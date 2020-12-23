import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.less']
})
export class MachineComponent implements OnInit {
  alert_message = [1,2,3,4,1,2]

  constructor() { }

  ngOnInit(): void {
  }

}
