import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-tab-mobile',
  templateUrl: './menu-tab-mobile.component.html',
  styleUrls: ['./menu-tab-mobile.component.css']
})
export class MenuTabMobileComponent implements OnInit {

  sidebarStatus = '';
  sidebarStatusInv = '';

  constructor() {

  }
  openSidebar = function (): void
  {
    this.sidebarStatus = 'visible';
    this.sidebarStatusInv = 'hidden';
  };

  closeSidebar = function (): void
  {
    this.sidebarStatus = 'hidden';
    this.sidebarStatusInv = 'visible';
  };
  ngOnInit() {
    this.sidebarStatus = 'hidden';
    this.sidebarStatusInv = 'visible';
  }

}
