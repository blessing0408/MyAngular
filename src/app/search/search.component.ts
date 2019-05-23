import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  counts = 0;
  constructor() { }
  coutText(key: string) {
    if (key === 'Backspace') {
      if (this.counts > 0) {
        this.counts --;
      }
    } else if (key.length === 1) {
      this.counts ++;
    }
    if (key === 'Escape') {
      this.counts = 0;
      (<HTMLInputElement>document.getElementById('searchkey')).value = '';
    }
  }
}
