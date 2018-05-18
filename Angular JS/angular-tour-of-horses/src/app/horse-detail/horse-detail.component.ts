import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HorseService }  from '../horse.service';
import {Horse} from '../horse';

@Component({
  selector: 'app-horse-detail',
  templateUrl: './horse-detail.component.html',
  styleUrls: ['./horse-detail.component.css']
  
})
export class HorseDetailComponent implements OnInit {
  @Input() horse: Horse;

  constructor(
    private route: ActivatedRoute,
    private horseService: HorseService,
    private location: Location
  ) {}
  ngOnInit() {
    this.getHorse();
  }
  
  getHorse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.horseService.getHorse(id)
      .subscribe(horse => this.horse = horse);
  }

}
