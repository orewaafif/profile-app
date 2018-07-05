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

  updateContact(id: number, update: Contacts): void{
    this.getContact(id).name = update.name;
    this.getContact(id).email = update.email;
    this.getContact(id).phone = update.phone;
    this.getContact(id).company = update.company;
    this.getContact(id).address = update.address;
  }

  constructor() { }
}

