import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterOptions } from 'src/app/model/explore';
import { FilterModalService } from '../filter-modal/filter-service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [FilterModalService]
})
export class SearchBarComponent implements OnInit {
  public search = ''
  @Output() searchValue = new EventEmitter<string>()
  public filterList: FilterOptions[] = []

  constructor(private modalService: FilterModalService) { }

  ngOnInit(): void {
    this.modalService.openModal()
  }

  onKeyup(letter: any) {
    const search = letter.target.value
    this.searchValue.emit(search)
  }

  onClickFilter() {
    const modal = this.modalService.openModal()
    modal.getContentComponent().filter.subscribe((res) => {
      this.filterList = res
    })
  }
}
