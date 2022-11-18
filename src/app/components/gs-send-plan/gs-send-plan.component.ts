import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-gs-send-plan',
  templateUrl: './gs-send-plan.component.html',
  styleUrls: ['./gs-send-plan.component.scss']
})
export class GsSendPlanComponent implements OnInit {
  public isEmailVisible = true;

  constructor(private readonly modalDialog:ModalDialogService) { }

  ngOnInit(): void {
  }


  closeWindow() {
    this.modalDialog.isShowModalGetStartedSendPlan = false;
    document.body.style.overflowY = 'visible';
  }

  showlogin() {
    this.modalDialog.isShowModalGetStartedSendPlan = false;
    this.modalDialog.isShowLogin = true;
  }
}
