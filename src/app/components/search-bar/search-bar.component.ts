import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() usernameSearch = new EventEmitter<string>();
  username: string = '';

  constructor() { }


  onSearch() {
    this.usernameSearch.emit(this.username);
  }

}
