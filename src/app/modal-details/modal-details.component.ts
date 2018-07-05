import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Contacts } from '../contacts';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  contact = this.detailsComponent.selected;

  contactForm = new FormGroup({
    name : new FormControl(this.contact.name),
    email : new FormControl(this.contact.email),
    phone : new FormControl(this.contact.phone),
    company : new FormControl(this.contact.company),
    address : new FormControl(this.contact.address),
  });

  constructor(
    private detailsComponent: DetailsComponent
  ) { }

  ngOnInit() {
  }

  toggleModal(): void {
    this.detailsComponent.toggleModal();
  }

  saveForm(): void {
    this.detailsComponent.selected = this.contactForm.value;
    this.toggleModal();
  }

}
