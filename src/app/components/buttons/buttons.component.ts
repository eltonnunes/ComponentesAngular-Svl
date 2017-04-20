import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svl-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() format       : string = "";
  @Input() dimension    : string = "";
  @Input() color        : string = "";
  @Input() icon         : string = "";
  @Input() title        : string = "";
  @Input() link         : string = "";
  @Input() smart        : number = 2;
  @Input() tablet       : number = 2;
  @Input() small        : number = 2;
  @Input() large        : number = 2;
  @Input() marginSmart  : number = 0;
  @Input() marginTablet : number = 0;
  @Input() marginSmall  : number = 0;
  @Input() marginLarge  : number = 0;

  formatOut    : string;
  dimensionOut : string;
  colorOut     : string;
  iconOut      : string;
  titleOut     : string;
  sizeOut      : string;
  linkOut      : string;
  percentOut   : string;
  marginOut    : string;

  constructor() { }

  ngOnInit() {
    this.formatOut    = this.formatButton();
    this.dimensionOut = this.dimensionButton();
    this.colorOut     = this.colorButton();
    this.titleOut     = this.title;
    this.iconOut      = this.icon;
    this.sizeOut      = this.sizeButton();
    this.linkOut      = this.link;
    this.percentOut   = this.percentButton();
    this.marginOut    = this.marginButton();
  }

  formatButton(): any {
    let reply;
    switch(this.format) {
      case "quadrado" : reply = ""; break;
      case "redondo"  : reply = "btn-round"; break;
      default : reply = ""; break;
    }
    return reply;
  }

  sizeButton(): any {
    let sizeSmart  = (this.smart <= 12) ? "col-xs-" + this.smart : "col-xs-12";
    let sizeTablet = (this.tablet <= 12) ? "col-sm-" + this.tablet : "col-sm-2";
    let sizeSmall  = (this.small <= 12) ? "col-md-" + this.small : "col-md-2";
    let sizeLarge  = (this.large <= 12) ? "col-lg-" + this.large : "col-lg-2";
    return " " + sizeSmart + " " + sizeTablet + " " + sizeSmall + " " + sizeLarge + " "; 
  }

  dimensionButton(): any {
    let reply;
    switch(this.dimension) {
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

  percentButton(): any {
    let reply;
    if (this.smart == 1 || this.tablet == 1 || this.small == 1 || this.large == 1) {
      reply = "btn-1";
    } else if (this.smart == 2 || this.tablet == 2 || this.small == 2 || this.large == 2) {
      reply = "btn-2";
    } else if (this.smart == 3 || this.tablet == 3 || this.small == 3 || this.large == 3) {
      reply = "btn-3";
    } else if (this.smart == 4 || this.tablet == 4 || this.small == 4 || this.large == 4) {
      reply = "btn-4";
    } else if (this.smart == 5 || this.tablet == 5 || this.small == 5 || this.large == 5) {
      reply = "btn-5";
    } else {
      reply = "btn-all";
    }
    return reply;
  }

  marginButton(): any {
    let marginSmart  = (this.marginSmart != 0) ? "col-xs-offset-" + this.marginSmart : "";
    let marginTablet = (this.marginTablet != 0) ? "col-sm-offset-" + this.marginTablet : "";
    let marginSmall  = (this.marginSmall != 0) ? "col-md-offset-" + this.marginSmall : "";
    let marginLarge  = (this.marginLarge != 0) ? "col-lg-offset-" + this.marginLarge : "";
    return " " + marginSmart + " " + marginTablet + " " + marginSmall + " " + marginLarge + " "; 
  }

}
