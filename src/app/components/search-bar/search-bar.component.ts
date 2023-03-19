import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
public search = ''

  constructor() { }

  ngOnInit(): void {
  }
  onKeyup(letter: any) {
    const search = letter.target.value
    console.log(search)
    //u must use switch map 
  }
}
