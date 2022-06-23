import { Component, OnInit } from '@angular/core';
import { Rates } from './models/rates';
import { ModalDialogService } from './services/modal-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Landing_template_for_Startups';
  constructor(public readonly modalService: ModalDialogService) {
  }
  ngOnInit(): Rates[] {
    return this.ratesList;
  }

  ratesList: Rates [] = [
    new Rates(
      'FREE',
      0,
      'LoremIpsum*10',
      [
        '3 layouts to choose from',
        '30 minutes site guide',
        '1 hour of technical support per week',
        '30 minutes help with hosting',
        'domain name with prescription'
      ]
    ),
    new Rates(
      'BASIC',
      23,
      'LoremIpsum*10',
      [
        '7 layouts to choose from',
        '3 hours site guide',
        '5 hour of technical support per week',
        '2 hours help with hosting',
        'domain name without prescription'
      ]
    ),
    new Rates(
      'PREMIUM',
      59,
      'LoremIpsum*10',
      [
        '12 layouts to choose from',
        '7 hours site guide',
        '10 hour of technical support per week',
        '4 hours help with hosting',
        'golden domain name'
      ]
    )
  ]
  
  modalCall() {
    this.modalService.isShowDialog = true
  }
}
