import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  expanded = false;

  onExpand() {
    const sidenavContainer = document.querySelector('.sidenav-container');
    this.expanded = !this.expanded;
    sidenavContainer!.classList.toggle('expanded');
  }
}
