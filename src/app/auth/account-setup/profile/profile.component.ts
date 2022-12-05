import { Component, OnInit } from '@angular/core';
import { AuthRoutes } from '../../auth-routes';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NzMessageService],
})
export class ProfileComponent implements OnInit {
  public isVisible = false;
  public formGroup!: FormGroup

  get authRoutes() {
    return AuthRoutes;
  }

  constructor() { }
  ngOnInit(): void { 

    this.formGroup = new FormGroup ({
      fullName : new FormControl (null , Validators.required),
      // nickName : new FormControl (null , Validators.required),
      email : new FormControl (null , [Validators.required , Validators.email]),
      phoneNumber : new FormControl (null , Validators.required ),
      gender : new FormControl (null , Validators.required)
    })
    
  }

  showModal(): void {
    this.isVisible = true;
  }

  onSubmit(){
    console.log(this.formGroup.value)
  }
}
