import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'

declare var $: any;
declare var moment: any;

var _startDate: string = moment().subtract(29, 'days');
var _endDate: string = moment();

@Component({
  selector: 'svl-datepicker',
  styleUrls: ['./datepicker.component.css'],
  templateUrl: './datepicker.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DatepickerComponent implements OnInit {

  @Input() timePicker: boolean = false;
  @Input() singleDatePicker: boolean = false;
  @Input() showWeekNumbers: boolean = false;
  @Input() minDate: string = "01/01/1950";
  @Input() maxDate: string = "01/01/2200";
  @Input() startDate: string = moment().subtract(29, 'days');
  @Input() endDate: string = moment();
  @Input() autoApply: boolean = true;
  @Input() showDropdowns: boolean = false;
  @Input() showCustomRangeLabel: boolean = true;
  @Input() timePicker24Hour: boolean = true;
  @Input() timePickerSeconds: boolean = false;
  @Input() alwaysShowCalendars: boolean = false;
  @Input() ranges: object =
  {
    'Hoje': [moment(), moment()],
    'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
    'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
    'Este Mês': [moment().startOf('month'), moment().endOf('month')],
    'Mês Passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };

  constructor() { }

  ngOnInit() {
    atualizaData(_startDate, _endDate);

    $('#reportrange').daterangepicker({
      timePicker: this.timePicker,
      singleDatePicker: this.singleDatePicker,
      showWeekNumbers: this.showWeekNumbers,
      minDate: this.minDate,
      maxDate: this.maxDate,
      startDate: this.startDate,
      endDate: this.endDate,
      autoApply: this.autoApply,
      showDropdowns: this.showDropdowns,
      showISOWeekNumbers: this.showWeekNumbers,
      showCustomRangeLabel: this.showCustomRangeLabel,
      timePicker24Hour: this.timePicker24Hour,
      timePickerSeconds: this.timePickerSeconds,
      alwaysShowCalendars: this.alwaysShowCalendars,
      ranges: this.ranges
    }, atualizaData);
  }
}

function atualizaData(_startDate, _endDate) {
  $('#reportrange span').html(_startDate.format('DD/MM/YYYY') + ' - ' + _endDate.format('DD/MM/YYYY'));
}