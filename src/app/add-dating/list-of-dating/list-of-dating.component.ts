import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-list-of-dating',
  templateUrl: './list-of-dating.component.html',
  styleUrls: ['./list-of-dating.component.css']
})
export class ListOfDatingComponent implements OnInit {
  @Input() List : any[] = [];
  @Output() index = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  Eliminate(index:number):void{
    this.index.emit(index);
  }
}
