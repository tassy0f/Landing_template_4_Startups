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

  startDate:any = new Date
  model: any = {
    "rate": 1,
    "startDate": this.startDate.toISOString().slice(0,10),
  }
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
        let userId = resBody.find((user: { email: string; }) => user.email === this.model.email).id
        this.userPrim = resBody[userId - 1]
        
        if(this.userPrim.password == this.model.password && this.userPrim.email == this.model.email) {
          this.modalDialog.isSHowPersonalCabinet = true
        }
        return this.userPrim
    })    

    let finalCon = await connection;    
    this.usersInfo = finalCon 
  }
  

  async register() {
    let connection = await fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(this.model)
    })

      this.login();
  }


  active() {
    let activeElem:any = document.querySelector(".nonactive");
    let nonactiveElem:any = document.querySelector(".active");
    let visibleForm:any = document.querySelector(".disabled");
    let hiddenForm:any = document.querySelector(".visible");
    
    activeElem.classList.add("active");
    activeElem.classList.remove("nonactive");
    nonactiveElem.classList.add("nonactive");
    nonactiveElem.classList.remove("active");

    visibleForm.classList.add("visible");
    visibleForm.classList.remove("disabled");
    hiddenForm.classList.add("disabled");
    hiddenForm.classList.remove("visible");

    

  }
}
