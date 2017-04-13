import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svl-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() data: any[];
  @Input() size: number;
  @Input() name: string;

  dadosOut : any[];
  sizeOut  : number;
  nameOut  : string;

  constructor() {}

  ngOnInit() {
    this.dadosOut = this.data;
    this.sizeOut  = this.size;
    this.nameOut  = this.name;
  }

}
