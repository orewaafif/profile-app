import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contacts } from '../contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  contact = this.detailsComponent.selected;

  contactForm = new FormGroup({
    name : new FormControl(this.contact.name, Validators.required),
    email : new FormControl(this.contact.email, Validators.required),
    phone : new FormControl(this.contact.phone, Validators.required),
    company : new FormControl(this.contact.company, Validators.required),
    address : new FormControl(this.contact.address, Validators.required)
  });

  constructor(
    private detailsComponent: DetailsComponent,
    private contactService: ContactsService
  ) { }

  ngOnInit() {
  }

  toggleModal(): void {
    this.detailsComponent.toggleModal();
  }

  saveForm(): void {
    this.contactService.updateContact(
      this.contact.id,
      this.contactForm.value
    );
    this.toggleModal();
  
  }

}
