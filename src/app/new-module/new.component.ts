import {trigger, state, style, transition, animate} from '@angular/animations';
import {Component} from '@angular/core';

@Component({
  selector: 'new-component',
  templateUrl: 'new.component.html',
  styleUrls: ['new.component.css'],
  animations: [
    trigger('background', [
      state('red', style({
        backgroundColor: '#dc3f36',
        color: '#fff'
      })),
      state('green', style({
        backgroundColor: '#20b671',
        color: '#fff'
      })),
      state('blue', style({
        backgroundColor: 'blue',
        color: '#fff'
      })),
      state('white', style({
        backgroundColor: '#fff',
        color: '#7d7d7d'
      })),
      transition('void <=> *', animate('0ms')),
      transition('* <=> *', animate('300ms ease-in')),
    ])
  ]
})
export class NewComponent {
  title = 'new component works!';

  color = "white";

  changeColor(color) {
    this.color = color;
  }
}
