import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css']
})
export class ModalDetailsComponent implements OnInit {

  constructor(
    private detailsComponent: DetailsComponent
  ) { }

  ngOnInit() {
  }

  toggleModal(): void {
    this.detailsComponent.toggleModal();
  }

}
