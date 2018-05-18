import { Injectable } from '@angular/core';
import { Horse } from './horse';
import { HORSE } from './mock-horses';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()

export class HorseService {

  constructor(private messageService: MessageService) { }

  getHorses(): Observable<Horse[]> {
    this.messageService.add('HorseService: fetched horses');
    return of(HORSE);
  }

}