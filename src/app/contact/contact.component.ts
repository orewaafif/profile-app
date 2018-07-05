import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts = this.sortArrayBy(this.contactService.getContacts(), 'name');

  constructor(
    private contactService: ContactsService
  ) { }

  sortArrayBy(array: any[], args: string) {
    return array.sort((a, b) => a[args] > b [args] ? 1 : -1 );
  }

  ngOnInit() {

  }

}
