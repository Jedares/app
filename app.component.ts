import { Component } from '@angular/core';
import { Kot } from './kot';
import { KOTS } from './kots';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kots = KOTS;

  selectedKot: Kot;

  constructor() { }

  ngOnInit() {
  }

  onSelect(kot: Kot): void {
    this.selectedKot = kot;
  }
}