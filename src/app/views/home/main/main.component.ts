import {AfterViewInit, Component, ElementRef, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";

// declare var bootstrap: any;

//когда установили тайпинг @types/bootstrap, то есть можно сразу использовать TS
// import * as bootstrap from "bootstrap";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  title: string = 'pizza';

  constructor() {
  }

  private modalService = inject(NgbModal);

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngOnInit() {
    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    console.log(environment);
  }

  ngAfterViewInit() {
    // this.modalService.open(this.popup, {});

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main Component';

    this.popupComponent.open();
  }

  // test(popup: TemplateRef<ElementRef>) {
  //   this.modalService.open(popup, {});
  // }
}
