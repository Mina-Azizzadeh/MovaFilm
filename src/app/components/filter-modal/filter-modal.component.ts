import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, Subject } from 'rxjs';
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
  @Output() filter = new Subject<FilterOptions[]>();

  constructor(
    private filterService: ExploreService,
    private modal: NzModalService) { }

  ngOnInit(): void {
    this.getFilterItem()
  }

  getFilterItem() {
    this.filterService.getFiltersItem().pipe(
      map((filter) => {
        return filter.map(res => {
          return ({
            ...res,
            id: res.id,
            title: res.title,
            items: res.items.map((item) => ({
              ...item,
              checked: false
            }))
          })
        })
      })
    ).subscribe((res) => {
      this.filterOptions = res
      console.log('result in filter:', res)
    })
  }

  onClickFilter(item: FilterOptions) {
    item.checked = !item.checked
    if (item.checked == true) {
      this.selectFilter.push(item)
    }
  }

  onApply() {
    this.filter.next(this.selectFilter)
    this.modal.closeAll()
  }

  onReset() {
    this.filter.next([])
    this.modal.closeAll()
  }
}
