import { Component, Input } from '@angular/core';

@Component({
  selector: 'svl-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  @Input() typeAlert: number;
  @Input() messageText: string;
  alert: string;
  title: string;
  icon: string;
  message: string;
  response: string;

  constructor() {}

  ngOnInit() {
    this.alert = this.textAlert();
    this.icon = this.textIcon();
    this.title = this.textTitle();
    this.message = this.messageText;
  }

  // classe do CSS
  textAlert(): any {
    switch (this.typeAlert) {
      case 0 : this.response = "info"; break;
      case 1 : this.response = "success"; break;
      case 2 : this.response = "warning"; break;
      case 3 : this.response = "danger"; break;
      default : this.response = "info"; break;
    }
    return this.response;
  }

  // título alert
  textTitle(): any {
    switch (this.typeAlert) {
      case 0 : this.response = "Informação:"; break;
      case 1 : this.response = "Sucesso:"; break; 
      case 2 : this.response = "Alerta:"; break;
      case 3 : this.response = "Perigo:"; break;
      default : this.response = "Informação:"; break;
    }
    return this.response;
  }

  // ícone do alert que será exibido
  textIcon(): any {
    switch (this.typeAlert) {
      case 0 : this.response = "info_outline"; break;
      case 1 : this.response = "check"; break;
      case 2 : this.response = "warning"; break;
      case 3 : this.response = "error_outline"; break;
      default : this.response = "info_outline"; break;
    }
    return this.response;
  }

}