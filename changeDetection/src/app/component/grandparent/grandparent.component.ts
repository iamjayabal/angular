import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss'],
})
export class GrandparentComponent implements OnInit {
  title = '';

  constructor() {}

  ngOnInit(): void {}

  grandParent() {
    console.log('Grand Parent');
    return 'Grand Parent';
  }
}
