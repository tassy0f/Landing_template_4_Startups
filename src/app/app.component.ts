import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Rates } from './models/rates';
import { ModalDialogService } from './services/modal-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Landing_template_for_Startups';
  constructor(public readonly modalService: ModalDialogService) {
  }

  ngOnInit(): Rates[] {
    return this.ratesList;
  }

  ngAfterViewInit(): void {
    this.loader = document.getElementById('startLoader');
    this.dashboardMessage = document.getElementById('dashboardMessage');
    this.percents = document.getElementById('out');
    this.startLoaders();
    this.animetedProgress(76, this.percents);
  }

  loader: any;
  dashboardMessage: any;
  percents: any;

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

  callSendPlan() {
    this.modalService.isShowModalGetStartedSendPlan = true;
    document.body.style.overflow = 'hidden';
  }

  startLoaders () {
    let start = Date.now();

    let timer = setInterval(() => {
      let timePassed = Date.now() - start;
      this.loader.style.opacity = 0.01 + (timePassed / 900);
      this.loader.style.right = 85 + (timePassed / 200) + '%';
      this.dashboardMessage.style.opacity = 0.01 + (timePassed / 900);
      this.dashboardMessage.style.left = 25 + (timePassed / 200) + '%';

      if(timePassed > 800) clearInterval(timer);
    }, 50);
  }

  animetedProgress(num: number, elem: string) {
    const time = 1500;
    const step = 2;

    
    let e = document.querySelector("#out");let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      this.percents.innerHTML = n + '%';
    }, t);
  }

}