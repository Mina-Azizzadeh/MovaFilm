import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
          transform: 'translateY(300px)',
        }),
        animate(
          700,
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
  public selectFilter: FilterOptions[] = []

  constructor(private filterService: ExploreService) { }

  ngOnInit(): void {
    this.getFilterItem()
  }

  getFilterItem() {
    this.filterService.getFiltersItem().pipe(
      // map((result) => {
      //   return result.map((res) => {
      //     res,
      //       ({ ...res.items, checked: false })
      //   })
      // })
    ).subscribe((res) => {
      this.filterOptions = res
      console.log(res)
    })
  }
  onClickFilter(item: FilterOptions) {
    this.selectFilter.push(item)
  }

  onApply() {
    console.log(this.selectFilter)
  }
}
