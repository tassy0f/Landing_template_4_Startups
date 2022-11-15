import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { MessageService } from 'src/app/services/message.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss']
})
export class PersonalCabinetComponent implements OnInit {

  @Input() usersInfo!: Users;
  constructor(private readonly modalDialog:ModalDialogService, private messageServ:MessageService) { }

  ngOnInit(): void {
    // this.usersInfo = this.messageServ.getMessage().subscribe()
}



  closePersonalCabinet() {
    this.modalDialog.isSHowPersonalCabinet = false;
  }

  updateInfo() {
    console.log(this.usersInfo);
  }
}
