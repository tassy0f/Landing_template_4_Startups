import { Component } from '@angular/core';
import { ModalDialogService } from './services/modal-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Landing_template_for_Startups';
  constructor(public readonly modalService: ModalDialogService) {
  }

  modalCall() {
    this.modalService.isShowDialog = true
  }
}
