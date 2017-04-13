import { Component, Input } from '@angular/core';

@Component({
  selector: 'svl-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  @Input() type    : string = "informacao";
  @Input() message : string = "Você está usando o sistema da Serveloja";
  
  typeOut    : string;
  titleOut   : string;
  iconOut    : string;
  messageOut : string;

  constructor() {}

  ngOnInit() {
    this.typeOut    = this.textAlert();
    this.iconOut    = this.textIcon();
    this.titleOut   = this.textTitle();
    this.messageOut = this.message;
  }

  // classe do CSS
  textAlert(): any {
    let reply;
    switch (this.type) {
      case "informacao" : reply = "info"; break;
      case "sucesso"    : reply = "success"; break;
      case "alerta"     : reply = "warning"; break;
      case "erro"       : reply = "danger"; break;
      default           : reply = "info"; break;
    }
    return reply;
  }

  // título alert
  textTitle(): any {
    let reply;
    switch (this.type) {
      case "informacao" : reply = "Informação:"; break;
      case "sucesso"    : reply = "Sucesso:"; break; 
      case "alerta"     : reply = "Alerta:"; break;
      case "erro"       : reply = "Perigo:"; break;
      default           : reply = "Informação:"; break;
    }
    return reply;
  }

  // ícone do alert que será exibido
  textIcon(): any {
    let reply;
    switch (this.type) {
      case "informacao" : reply = "info_outline"; break;
      case "sucesso"    : reply = "check"; break;
      case "alerta"     : reply = "warning"; break;
      case "erro"       : reply = "error_outline"; break;
      default           : reply = "info_outline"; break;
    }
    return reply;
  }

}