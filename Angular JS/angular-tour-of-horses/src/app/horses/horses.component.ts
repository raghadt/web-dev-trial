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
  selectedHorse: Horse;
  constructor(private horseService: HorseService) { }
  
  ngOnInit() {
    this.getHorses();
  }
  
  onSelect(horse: Horse): void {
  this.selectedHorse = horse;
  }

  getHorses(): void{
  this.horseService.getHorses().subscribe(horses=>this.horses = horses);    
  }

}
