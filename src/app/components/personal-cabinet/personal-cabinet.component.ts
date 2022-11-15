import { Component, Input, OnInit } from '@angular/core';
import { Rates } from 'src/app/models/rates';
import { Users } from 'src/app/models/users';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss']
})
export class PersonalCabinetComponent implements OnInit {

  @Input() usersInfo!: Users;
  rateUserInfo!: Rates
  constructor(private readonly modalDialog:ModalDialogService) { }

  ngOnInit(): void {
    this.rateload()
  }

  async rateload() {
    let connection = fetch('http://localhost:3000/rates', {
      method: 'GET',
    })
    .then(resp => {return resp.json()})
    .then(resBody => {return resBody[this.usersInfo.rate - 1]})

    let finalCon = await connection;    
    this.rateUserInfo = finalCon
    console.log(this.rateUserInfo);
    
  }

  closePersonalCabinet() {
    this.modalDialog.isSHowPersonalCabinet = false;
    this.modalDialog.isShowLogin = false;
    document.body.style.overflowY = 'visible';
  }

  updateInfo() {
    console.log(this.rateUserInfo);
  }
}
