import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalDialogService {

  public isShowDialog: boolean = false

  public isShowModalForm: boolean = false

  public isShowModalGetStartedSendPlan: boolean = false

  public isShowLogin:boolean = false

  public isSHowPersonalCabinet:boolean = false

  constructor() { }
}