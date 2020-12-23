import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontend';
  public toggle;

  constructor(private sidebar: SidebarService, private router: Router, private route: ActivatedRoute) {
    this.sidebar.showNav.subscribe((navStatus) => {
      this.toggle = navStatus
    })
  }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
