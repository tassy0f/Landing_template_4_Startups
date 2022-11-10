import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-personal-cabinet',
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.scss']
})
export class PersonalCabinetComponent implements OnInit {

  constructor(private readonly modalDialog:ModalDialogService) { }

  ngOnInit(): void {
  }


  closePersonalCabinet() {
    this.modalDialog.isSHowPersonalCabinet = false;
  }
}
