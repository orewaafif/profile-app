import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data: Promise<Contacts[]>;
  contacts: Contacts[];

  getContacts(){
    this.contactService.getContacts().then(
      (result) => {
        this.contacts = this.sortArrayBy(result, 'name');
      });
  }

  constructor(
    private contactService: ContactsService
  ) { }

  sortArrayBy(array: any[], args: string) {
    return array.sort((a, b) => a[args] > b [args] ? 0 : -1 );
  }

  ngOnInit() {
    this.getContacts();
    console.log(this.contactService.getContacts());
  }

}
