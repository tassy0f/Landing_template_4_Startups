import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  usersInfo!: Users;

  constructor(readonly modalDialog:ModalDialogService) { }

  model: any = {}
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
        let userId = resBody.find((user: { name: string; }) => user.name === this.model.username).id
        this.userPrim = resBody[userId - 1]
        
        if(this.userPrim.password == this.model.password) {
          this.modalDialog.isSHowPersonalCabinet = true
        }
        return this.userPrim
    })    

    let finalCon = await connection;    
    this.usersInfo = finalCon 
  }
  
}