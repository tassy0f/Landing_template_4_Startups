import { Component, Input, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates';
import { MessageService } from 'src/app/services/message.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  @Input() rateInfo:any = [];
  constructor(private messageServ:MessageService,public readonly dialog:ModalDialogService) { }

  ngOnInit(): void {
    this.messageServ.getMessage().subscribe((rate: Rates) => {
      this.rateInfo = rate
  })
  }

  checkAuth() {
    
  }

  closeWindow() {
    this.dialog.isShowDialog = false;
    document.body.style.overflowY = 'visible';
  }
}
