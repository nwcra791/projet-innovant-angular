/**
 * Created by pointu_l on 17/07/2017.
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-mobile',
  styleUrls: [
    "../../../assets/dist/semantic.min.css"
  ],
  templateUrl: './menu-mobile.template.html'
})

export class MenuMobileComponent  {
  @Input() logging: boolean;
  @Output() changedLogging: EventEmitter<boolean> = new EventEmitter<boolean>();
  title = 'Travel Skills';
  isMenuShow = false;
}
