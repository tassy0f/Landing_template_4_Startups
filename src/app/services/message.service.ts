import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Rates } from '../models/rates';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject:any = new Subject()

  constructor() { }

  sendMessage(rate: Rates) {
    this.subject.next(rate)   
  }

  sendMessageUsers(info: Users) {
    this.subject.next(info)   
  }

  getMessage() {
    return this.subject.asObservable()
  }
}
