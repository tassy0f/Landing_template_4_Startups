import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(public readonly dialog:ModalDialogService) { }

  ngOnInit(): void {
  }

  modalClose() {
    this.dialog.isShowDialog = false
  }
}
