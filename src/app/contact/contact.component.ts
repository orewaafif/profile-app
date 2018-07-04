import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';
import { CONTACTS } from '../temp-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  conData = CONTACTS;

  constructor() { }

  ngOnInit() {

  }

}
