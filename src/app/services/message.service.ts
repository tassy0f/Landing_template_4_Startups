import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Rates } from '../models/rates';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject:any = new Subject()

  constructor() { }

  sendMessage(rate: Rates) {
    this.subject.next(rate)   
  }

  getMessage() {
    return this.subject.asObservable()
  }
}
