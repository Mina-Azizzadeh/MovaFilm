import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Filter, FilterOptions } from 'src/app/model/explore';
import { ExploreService } from 'src/app/services/explore.service';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  animations: [
    trigger('fromTheBottom', [
      transition('void => *', [
        style({
          transform: 'translateY(250px)',
        }),
        animate(
          1000,
          style({
            transform: 'translateY(0px)',
          })
        ),
      ]),
    ]),
  ],
})
export class FilterModalComponent implements OnInit {
  public filterOptions: Filter[] = [];

  constructor(private filterService: ExploreService) { }

  ngOnInit(): void {
    this.getFilterItem()
  }

  getFilterItem() {
    this.filterService.getFiltersItem().subscribe((res) => {
      this.filterOptions = res
    })
  }
  onclickInterest(item: FilterOptions) {
console.log(item)
  }

  onApply(){
    
  }
}
