import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SuccessModalComponent } from './success-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modal: NzModalService) { }

  openModal() {
    const modal = this.modal.create({
      nzContent: SuccessModalComponent,
      nzWidth: '20rem',
      nzBodyStyle: {'border-radius': '30px' },
      nzStyle:{'border-radius': '30px' },
      nzFooter: null,
      nzClosable: false
    })
    return modal
  }
}
