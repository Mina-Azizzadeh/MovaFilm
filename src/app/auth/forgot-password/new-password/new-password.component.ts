import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ModalService } from '../success-modal/modal.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  providers:[ModalService]
})
export class NewPasswordComponent implements OnInit {
  passwordVisible = true;
  password?: string;
  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }
  AddnewPassword() {
    this.modal.openModal()
  }
}
