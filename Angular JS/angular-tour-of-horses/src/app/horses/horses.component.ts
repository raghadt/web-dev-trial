import { Component, OnInit } from '@angular/core';
import {Horse} from '../horse';
import {HorseService} from '../horse.service';


@Component({
  selector: 'name1',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {
  horses: Horse[];
  constructor(private horseService: HorseService) { }
  
  ngOnInit() {
    this.getHorses();
  }
  
  getHorses(): void{
  this.horseService.getHorses().subscribe(horses=>this.horses = horses);    
  }

}
