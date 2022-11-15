import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public readonly modalDialog:ModalDialogService) { }

  ngOnInit(): void {
  }

  showLogin() {
    // this.modalDialog.isSHowPersonalCabinet = true;
    this.modalDialog.isShowLogin = true;
    document.body.style.overflow = 'hidden';
  }

}
