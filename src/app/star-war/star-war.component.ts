import { Component, OnInit } from '@angular/core';
import { starwar } from "../starwar";
import { STARWARS } from '../mock-starwar';
import { StarwarService } from '../starwar.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

 
@Component({
  selector: 'app-star-war',
  templateUrl: './star-war.component.html',
  styleUrls: ['./star-war.component.css']
})
export class StarWarComponent implements OnInit {
  _STARWARS ;
  constructor(private starwarService: StarwarService, private messageService: MessageService, private router: Router,
    domSanitizer : DomSanitizer) {
  }
 
  ngOnInit() {
    this.getstarwars();
  }
  
  getstarwars ():void{
    this.messageService.add('Star war : fetched star war');
    this.starwarService.getStarwar().subscribe(starwars => this._STARWARS= starwars);
  }
  selectedStar : starwar ;
  onclick( _starwar : starwar) : void {
    this.selectedStar = _starwar;
    alert(this.selectedStar + ' login success');
    this.router.navigateByUrl('/starwarSearch');
  }
}
