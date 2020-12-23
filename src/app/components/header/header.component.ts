import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public toggle: any = false

  constructor(private sidebar: SidebarService) { 
    this.sidebar.showNav.subscribe((navStatus) => {
      this.toggle = navStatus
    })

  }

  ngOnInit(): void {
  }

  toggleNav() {
    this.toggle = !this.toggle
    this.sidebar.toggleNav(this.toggle)
  }

}
