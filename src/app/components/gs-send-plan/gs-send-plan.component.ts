import { Component, OnInit } from '@angular/core';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-gs-send-plan',
  templateUrl: './gs-send-plan.component.html',
  styleUrls: ['./gs-send-plan.component.scss']
})
export class GsSendPlanComponent implements OnInit {
  public isEmailVisible = false;

  constructor(private readonly modalDialog:ModalDialogService) { }

  ngOnInit(): void {
  }


  closeWindow() {
    this.modalDialog.isShowModalGetStartedSendPlan = false
  }
}
