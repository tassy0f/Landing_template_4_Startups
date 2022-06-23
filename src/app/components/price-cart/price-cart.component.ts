import { Component, Input, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-price-cart',
  templateUrl: './price-cart.component.html',
  styleUrls: ['./price-cart.component.scss']
})
export class PriceCartComponent implements OnInit {
  @Input()
  ratesListik!: Rates;

  constructor(public readonly dialog:ModalDialogService) { }

  ngOnInit() {
  }

  modalCall(){
    this.dialog.isShowDialog = true
  }
}
