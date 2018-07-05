import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContactsService } from '../contacts.service';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute,
    private contactService: ContactsService,
    private location: Location
  ) { }

  selected: Contacts;
  public show = false;

  ngOnInit() {
    this.getContact();
  }

  getContact(): void  {
    const id = +this.routes.snapshot.paramMap.get('id');
    this.selected = this.contactService.getContact(id);
  }

  goBack(): void {
    this.location.back();
  }

  showModal(): void {
    this.show = true;
  }

  hideModal(): void {
    console.log('Show: ' , this.show);
    this.show = false;
  }

}
