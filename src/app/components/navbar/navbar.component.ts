import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface NavOption {
  title: string,
  icon: string,
  routerLink: string | null,
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fromTheBottom', [
      transition('void => *', [
        style({
          transform: 'translateY(50px)',
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

export class NavbarComponent implements OnInit {
  public current = 0
  public navOption: NavOption[] = [
    {
      title: 'Home',
      icon: 'home',
      routerLink: './',
    },
    {
      title: 'Explore',
      icon: 'compass',
      routerLink: './',
    },
    {
      title: 'My List',
      icon: 'inbox',
      routerLink: './',
    },
    {
      title: 'Download',
      icon: 'import',
      routerLink: './',
    },
    {
      title: 'Profile',
      icon: 'user',
      routerLink: './',
    }
  ]

  constructor() { }

  ngOnInit(): void { }

  onClickNav(navItem: NavOption) {
    console.log(navItem)
  }

  onRouterLinkActive(e: any) {
  }
}
