import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dating',
  templateUrl: './add-dating.component.html',
  styleUrls: ['./add-dating.component.css']
})
export class AddDatingComponent implements OnInit {
 
  ListOfDating : FormGroup;
  DataOfDating : any[] = [];

  constructor(private fb: FormBuilder) {
    this.ListOfDating = this.fb.group({
        name: ['',Validators.required],
        date: ['',Validators.required],
        time: ['',Validators.required],
        symptoms: ['',Validators.required],

    })
   }

  ngOnInit(): void {
  }

  SendInfo(){
    this.DataOfDating.push(this.ListOfDating.value);
  }

  removeValue(index:number):void{
    this.DataOfDating.splice(index,1);
  }

}
