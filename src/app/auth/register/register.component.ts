import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public passwordVisible = false;
  public password?: string;
  public login = true;
  constructor() {}

  ngOnInit(): void {}
}
