import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svl-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() format: string = "";
  @Input() size: string   = "";
  @Input() color: string  = "";
  @Input() icon: string   = "";
  @Input() title: string  = "Ok";

  formatOut : string;
  sizeOut   : string;
  colorOut  : string;
  iconOut   : string;
  titleOut  : string;

  constructor() { }

  ngOnInit() {
    this.formatOut = this.formatButton();
    this.sizeOut   = this.sizeButton();
    this.colorOut  = this.colorButton();
    this.titleOut  = this.title;
    this.iconOut   = this.icon;
  }

  formatButton(): any {
    let reply;
    switch(this.format) {
      case "quadrado" : reply = ""; break;
      case "redondo"  : reply = "bt-round"; break;
      default : reply = ""; break;
    }
    return reply;
  }

  sizeButton(): any {
    let reply;
    switch(this.size) {
      case "mini"    : reply = "btn-xs"; break;
      case "pequeno" : reply = "btn-sm"; break;
      case "medio"   : reply = ""; break;
      case "grande"  : reply = "btn-lg"; break;
      default : reply = ""; break;
    }
    return reply;
  }

  colorButton(): any {
    let reply;
    switch(this.color) {
      case "padrao"   : reply = "btn-primary"; break;
      case "verde"    : reply = "btn-success"; break;
      case "laranja"  : reply = "btn-warning"; break;
      case "vermelho" : reply = "btn-danger"; break;
      default : reply = "btn-primary"; break;
    }
    return reply;
  }

}
