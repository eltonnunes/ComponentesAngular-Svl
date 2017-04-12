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
  dadosRadio: any[];
  sizeRadio: number;
  nameRadio: string;

  constructor() {}

  ngOnInit() {
    this.dadosRadio = this.data;
    this.sizeRadio = this.size;
    this.nameRadio = this.name;
  }

}
