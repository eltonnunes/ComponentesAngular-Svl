import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'svl-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type      : string;
  @Input() size      : number;
  @Input() name      : string;
  @Input() typeInput : string;

  tipoOut  : string;
  sizeOut  : number;
  nameOut  : string;
  titleOut : string;
  iconOut  : string;
  inputOut : string;

  constructor() { }

  ngOnInit() {
    this.tipoOut  = this.typeFinal();
    this.iconOut  = this.icon();
    this.sizeOut  = this.size;
    this.titleOut = this.name;
    this.nameOut  = this.retiraAcentos(this.name);
    this.inputOut = this.typeInput;
  }

  // Adiciona classe conforme informado
  typeFinal(): any {
    let reply;
    switch(this.type) {
        case "success" : reply = "has-" + this.type; break;
        case "error"   : reply = "has-" + this.type; break;
        case "empty"   : reply = this.type; break;
        default : reply = this.type; break;
    }
    return reply;
  }

  // Ícone que aparece ao lado do input
  icon(): any {
    let reply;
    switch(this.type) {
        case "success" : reply = "done"; break;
        case "error"   : reply = "error"; break;
        case "empty"   : reply = ""; break;
        default : reply = ""; break;
    }
    return reply;
  }

  // Gera nome do input para ser utilizado no envio dos dados
  retiraAcentos(palavra): any {
    let comAcento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ ";
    let semAcento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC-";
    let nova = "";
    for (let i = 0; i < palavra.length; i++) {
      if (comAcento.search(palavra.substr(i,1)) >= 0) {
        nova += semAcento.substr(comAcento.search(palavra.substr(i,1)), 1);
      }
      else {
        nova += palavra.substr(i,1);
      }
    }
    return nova.toLowerCase();
  }
}