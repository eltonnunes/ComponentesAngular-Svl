import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
    selector: 'svl-notify',
    templateUrl: './notify.component.html',
    styleUrls: ['./notify.component.css', '../../../assets/css/animate.min.css']
})
export class NotifyComponent implements OnInit {

    @Input() icon: string = "fa fa-info-circle"; // usar só as classes dos icones - http://fontawesome.io/icons/
    @Input() type: string = "success"; // primary - success - info - warning - danger - rose
    @Input() align: string = "right"; // right - left
    @Input() from: string = "top"; // top - bottom
    @Input() title: string = "<strong>Exemplo de notificação do tipo sucesso!</strong>"; // aceita tags html
    @Input() message: string = "<br> Está é uma notificação com link. Clique aqui e visite nosso site. <br><br>"; // aceita tags html
    @Input() url: string = "http://serveloja.com.br"; // url de link ao clicar na notificação
    @Input() target: string = "_blank";
    @Input() element: string = "body";
    @Input() allowDismiss: boolean = true; // Botão de fechar notificação
    @Input() showProgressBar: boolean = true; // Barra de progresso 
    @Input() iconType: string = "class";
    @Input() delay: number = 1000; // Tempo de fechar a notificação
    @Input() offset: number = 20; // Margem da notificação (OFFSET)
    @Input() timer: number = 500; // Velocidade do load (fechar notificação)
    @Input() animateEnter: string = "animated fadeInDown";
    @Input() animateExit: string = "animated fadeOutUp";
    @Input() mouseOver: string = "pause";

    @Input() template: string =
    '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" style="margin:10px;" data-notify="progressbar">' +
    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
    '</div>'

    @Input() onShow: object = null;
    @Input() onShown: object = null;
    @Input() onClose: object = null;
    @Input() onClosed: object = null;

    constructor() { }

    ngOnInit() {
        notify(this.icon, this.type, this.align, this.from, this.title, this.message, this.url, this.target, this.element, this.allowDismiss, this.showProgressBar, this.iconType, this.template, this.delay, this.offset, this.timer, this.animateEnter, this.animateExit, this.mouseOver, this.onShow, this.onShown, this.onClose, this.onClosed);
    }
}

function notify(icon, type, align, from, title, message, url, target, element, allowDismiss, showProgressBar, iconType, template, delay, offset, timer, animateEnter, animateExit, mouseOver, onShow, onShown, onClose, onClosed) {

    $.notify({
        // options
        icon: icon,
        title: title,
        message: message,
        url: url,
        target: target
    }, {
            // settings
            element: element,
            type: type,
            allow_dismiss: allowDismiss,
            showProgressbar: showProgressBar,
            placement: {
                from: from,
                align: align
            },
            offset: offset,
            delay: delay,
            timer: timer,
            mouse_over: mouseOver,
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            onShow: onShow,
            onShown: onShown,
            onClose: onClose,
            onClosed: onClosed,
            icon_type: iconType,
            template: template
        });

}