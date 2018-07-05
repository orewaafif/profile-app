import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contacts';
import { CONTACTS } from '../temp-contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  conData = this.sortArrayBy(CONTACTS, 'name');

  constructor() { }

  sortArrayBy(array: any[], args: string) {
    return array.sort((a, b) => a[args] > b [args] ? 1 : -1 );
  }

  ngOnInit() {

  }

}
