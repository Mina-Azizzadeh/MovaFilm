import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit {

  public image = ''

  constructor() { }

  ngOnInit(): void {
  }
  
  onEdit() {
  }

  onChangeProfile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => this.image = String(reader.result);

      reader.readAsDataURL(file);
    }
  }
}
