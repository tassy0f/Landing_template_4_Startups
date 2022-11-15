import { Component, Input, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates';
import { MessageService } from 'src/app/services/message.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-price-cart',
  templateUrl: './price-cart.component.html',
  styleUrls: ['./price-cart.component.scss'],
  providers: [ModalDialogService]
})
export class PriceCartComponent implements OnInit {
  @Input()
  ratesListik!: Rates;

  constructor(public readonly dialog:ModalDialogService,private msge:MessageService) { }

  ngOnInit() {
  }
 
  modalCall(){
    this.dialog.isShowDialog = true
    this.msge.sendMessage(this.ratesListik)
    document.body.style.overflow = 'hidden';
  }
}
