import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public search = ''
  public isShowFilterModal = false
  @Output() searchValue = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(letter: any) {
    const search = letter.target.value
    this.searchValue.emit(search)
  }

  onClickFilter() {
    this.isShowFilterModal = true
  }
}
