import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'svl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() current: number = 11;
  @Input() totalRecords: number = 50;
  @Input() recordPerPage: number = 4;
  @Input() pagination: boolean = true;
  @Input() typePagination: number = 1;
  @Output() currentUpdate = new EventEmitter();

  prev: boolean = false;
  next: boolean = false;
  arrayPages:any = [];
  init: number = 1;
  finish: number = 1;

  constructor() {
  }

  ngOnInit() {
        this.arrayPages = this.getPaginationNumberBegin();
        this.setPrevious(false);
        this.setNext(false);
        this.init = 1;
        this.finish = Math.round(this.totalRecords / this.recordPerPage);
  }

  ngOnChange(){
  }

  getPaginationNumberBegin(): any{
    let res = [];
    let init = (this.current >= 3 && this.current <= Math.round(this.totalRecords / this.recordPerPage)) ? this.current - 2 : 1;
    let finish = (this.current >= 3 && this.current <= Math.round(this.totalRecords / this.recordPerPage)) ? this.current + 2 : this.current + 2;

    if (finish > Math.round(this.totalRecords / this.recordPerPage)) {
      finish = Math.round(this.totalRecords / this.recordPerPage); 
    }

    if (finish == Math.round(this.totalRecords / this.recordPerPage) && (this.typePagination == 1)) {
      finish = Math.round(this.totalRecords / this.recordPerPage) - 1; 
      this.next = true;
    }

    if(this.typePagination == 1){
      init = 2;
    }
                                            
    for (let i = init; i <= finish; i++) {
      res.push(i);
    }
    return res;
  }

  setCurrent(currentValue){
    this.current = currentValue;
    
    this.currentUpdate.emit({current: this.current});

    if(this.current > 1)
      this.prev = true;
    if(this.current == 1)
      this.prev = false;

    if(this.current > 1 && this.current < (Math.round(this.totalRecords / this.recordPerPage))){
      this.next = true;
      this.prev = true;
    }else{
      this.next = true;
      this.prev = false;
    }

    if( this.current == (Math.round(this.totalRecords / this.recordPerPage))){
      this.next = false;
      this.prev = true;
    }

    if( (this.current+1) == (Math.round(this.totalRecords / this.recordPerPage)) && (this.typePagination == 1)){
      this.next = false;
    }

    this.arrayPages = this.getPaginationNumberBegin();

  }

  setPrevious(event: Boolean = true){
    if(this.current > 1){
      this.prev = true;
      this.current--;
      if(event)
        this.currentUpdate.emit({current: this.current});

      this.arrayPages = this.getPaginationNumberBegin();

      if(this.current == 1){
        this.prev = false;
      }
    }else{
      this.prev = false;
    }

    if( (this.current + 1) <= (Math.round(this.totalRecords / this.recordPerPage))){
      this.next = true;
    }

  }

  setNext(event: Boolean = true){
    this.current++;
    if(event)
      this.currentUpdate.emit({current: this.current});

    this.arrayPages = this.getPaginationNumberBegin();

    if(this.current > 1){
      this.prev = true;
    }

    if( this.current == (Math.round(this.totalRecords / this.recordPerPage))){
      this.next = false;
    }
    
  }

}
