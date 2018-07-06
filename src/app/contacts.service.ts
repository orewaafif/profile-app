import { Injectable } from '@angular/core';
import { Contacts } from './contacts';
import { CONTACTS } from './temp-contacts';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contacts[] = CONTACTS;

  getContact(id: number): Contacts {
    return this.contacts.find(contact => contact.id === id);
  }

  getContacts(): Contacts[] {
    return this.contacts;
  }

  updateContact(id: number, update: Contacts){
    
    this.contacts.map( c => {
      if ( c.id === id ) {
        Object.assign(c, update)
        return c
      }
    })
  }

  constructor() { }
}

