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
  show = false;

  ngOnInit() {
    this.getContact();
  }

  getContact(): void  {
    const id = +this.routes.snapshot.paramMap.get('id');
    console.warn('id', id);
    this.contactService.getContact(id).then((con)=>{
     this.selected = con;
   })
    console.warn('contact', this.contactService.getContact(id));
  }

  goBack(): void {
    this.location.back();
  }

  toggleModal(): void {
    this.show = !this.show;
  }

}
