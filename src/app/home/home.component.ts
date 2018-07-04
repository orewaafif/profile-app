import { Component, OnInit } from '@angular/core';

import { PROFILE } from '../profile-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile = PROFILE;

  constructor() { }

  ngOnInit() {
  }

}
