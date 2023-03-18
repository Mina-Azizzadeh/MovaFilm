import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Notification } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public notifications: Notification[] = []
  constructor(private notifService: MoviesAlbumService) { }

  ngOnInit(): void {
    this.getNotifications()
  }

  getNotifications() {
    this.notifService.getNotificationData().pipe(
      // tap(console.log),
      // map((result) => {
      //   return result.map((notif: { episode: any; }) => ({
      //     ...notif,
      //     episode: `${notif.episode} Episode`
      //   }));
      // }),
      // tap(console.log)
    ).subscribe(
      (result) => {
        this.notifications = result
      })
  }
}
