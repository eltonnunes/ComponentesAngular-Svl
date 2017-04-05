import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core'

declare var $: any;
declare var moment: any;

// var _timePicker: boolean = false;
// var _singleDatePicker: boolean = false;
// var _showWeekNumbers: boolean = false;
// var _autoApply: Boolean = false;

// var _minDate: string = moment().startOf('day');;
// var _maxDate: string = moment().endOf('day');;

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
  @Input() autoApply: boolean = false;
  @Input() showDropdowns: boolean = false;
  @Input() showISOWeekNumbers: boolean = false;
  @Input() showCustomRangeLabel: boolean = true;
  @Input() timePicker24Hour: boolean = false;
  @Input() timePickerSeconds: boolean = false;
  @Input() linkedCalendars: boolean = true;
  @Input() autoUpdateInput: boolean = true;
  @Input() alwaysShowCalendars: boolean = true;
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

    cb(_startDate, _endDate);

    $('#reportrange').daterangepicker({

      startDate: this.startDate,
      endDate: this.endDate,
      singleDatePicker: this.singleDatePicker,
      timePicker: this.timePicker,
      minDate: this.minDate,
      maxDate: this.maxDate,
      showWeekNumbers: this.showWeekNumbers,
      autoApply: this.autoApply,
      showDropdowns: this.timePicker24Hour,
      showISOWeekNumbers: this.timePicker24Hour,
      showCustomRangeLabel: this.timePicker24Hour,
      timePicker24Hour: this.timePicker24Hour,
      timePickerSeconds: this.timePickerSeconds,
      linkedCalendars: this.linkedCalendars,
      autoUpdateInput: this.autoUpdateInput,
      alwaysShowCalendars: this.alwaysShowCalendars,
      ranges: this.ranges
    });

  }
}

function cb(_startDate, _endDate) {
  $('#reportrange span').html(_startDate.format('DD/MM/YYYY') + ' - ' + _endDate.format('DD/MM/YYYY'));
}