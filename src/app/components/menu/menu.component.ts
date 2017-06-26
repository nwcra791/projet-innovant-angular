import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  styleUrls: [
    "../../../assets/dist/semantic.min.css"
  ],
  templateUrl: './menu.template.html'
})

export class MenuComponent  {
  @Input() logging: boolean;
  @Output() changedLogging: EventEmitter<boolean> = new EventEmitter<boolean>();
  title = 'Travel Skills';
}
