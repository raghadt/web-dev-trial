import { Injectable } from '@angular/core';
import { Horse } from './horse';
import { HORSE } from './mock-horses';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()

export class HorseService {

  getHorses(): Observable<Horse[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HorseService: fetched heroes');
    return of(HORSE);
  }

  constructor(private messageService: MessageService) { }

  getHorse(id: number): Observable<Horse> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HorseService: fetched horse id=${id}`);
    return of(HORSE.find(horse => horse.id === id));
  }

}