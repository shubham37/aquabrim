import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  public toggle

  constructor(private sidebar: SidebarService) { }

  ngOnInit(): void {
  }

}
