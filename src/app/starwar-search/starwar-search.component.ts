import { Component, OnInit , EventEmitter ,Output } from '@angular/core';
import { starwar } from "../starwar";
import { MessageService } from '../message.service';
import { StarwarService } from '../starwar.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-starwar-search',
  templateUrl: './starwar-search.component.html',
  styleUrls: ['./starwar-search.component.css']
})
export class StarwarSearchComponent implements OnInit {
  _STARWARS  ;
  results ;
  searchTerm$ = new Subject<string>();

  constructor(private messageService: MessageService, public starwarService: StarwarService) {
  }

  ngOnInit() {
    this.getstarwars();
  } 

  getstarwars ():void{
    this.messageService.add('Star war : fetched star war');
    this.starwarService.getStarwar().subscribe(starwars => this._STARWARS= starwars);
  }
}
