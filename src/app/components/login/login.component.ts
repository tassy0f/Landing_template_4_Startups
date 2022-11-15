import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { MessageService } from 'src/app/services/message.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  usersInfo!: Users;

  constructor(readonly modalDialog:ModalDialogService, private msger:MessageService) { }

  model: any = {}
  userMassive:any
  userPrim: any


  ngOnInit(): void {
  }

  closeLoginWindow() {
    this.modalDialog.isShowLogin = false;
    document.body.style.overflowY = 'visible';
  }

  async login() {
    let connection = fetch('http://localhost:3000/users', {
        method: "GET"
      })
      .then(resp => {return resp.json()})
      .then(resBody => {
        this.userMassive = resBody;
        let userId = this.userMassive.find((user: { name: string; }) => user.name === this.model.username).id
        this.userPrim = this.userMassive[userId - 1]
        
        if(this.userMassive[userId - 1].password == this.model.password) {
          this.modalDialog.isSHowPersonalCabinet = true
        }
        return this.userPrim
    })    

    let finalCon = await connection;    
    this.usersInfo = finalCon  
    // console.log(this.usersInfo);
    
    // this.msger.sendMessageUsers(this.usersInfo)
  }
  
}