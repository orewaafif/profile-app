import { Injectable } from '@angular/core';
import { Contacts } from './contacts';
import { CONTACTS } from './temp-contacts';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = CONTACTS;

  getContact(id: number): Contacts {
    return this.contacts.find(contact => contact.id === id);
  }

  constructor() { }
}

