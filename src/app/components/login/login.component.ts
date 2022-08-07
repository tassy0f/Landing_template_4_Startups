import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(readonly modalDialog:ModalDialogService) { }

  model: any = {}


  ngOnInit(): void {
  }

  closeLoginWindow() {
    this.modalDialog.isShowLogin = false
  }

  login() {
    console.log(this.model);
  }
}
