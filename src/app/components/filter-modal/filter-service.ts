import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FilterModalComponent } from './filter-modal.component';

@Injectable({
    providedIn: 'root',
})
export class FilterModalService {

    constructor(private modal: NzModalService) { }

    openModal() {
        return this.modal.create({
            nzContent: FilterModalComponent,
            nzBodyStyle: {
                'border-radius': '30px', 'height': '35rem',
            },
            nzStyle: {
                'border-radius': '30px', 'width': '100vw', 'max-width': 'none',
                'margin': '0px !important',
                'padding': '0px !important',
            },
            nzFooter: null,
            nzClosable: true,
            nzNoAnimation: true,
        })
    }
}
