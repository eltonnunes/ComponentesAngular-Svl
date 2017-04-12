import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }


// function iniciarData() {
//   $(function () {
//     var start = moment().subtract(29, 'days');
//     var end = moment();

//     function cb(start, end) {
//       $('#reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
//     }

//     $('#reportrange').daterangepicker({
//       startDate: start,
//       endDate: end,
//       ranges: {
//         'Hoje': [moment(), moment()],
//         'Ontem': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//         'Últimos 7 Dias': [moment().subtract(6, 'days'), moment()],
//         'Últimos 30 Dias': [moment().subtract(29, 'days'), moment()],
//         'Este Mês': [moment().startOf('month'), moment().endOf('month')],
//         'Mês Passado': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//       }
//     }, cb);

//     cb(start, end);
//   });
// }

 ngOnInit() {
 }


// $(function () {
//   $('input[name="daterange"]').daterangepicker({
//     timePicker: true,
//     timePickerIncrement: 30,
//     locale: {
//       format: 'DD/MM/YYYY hh:mm A'
//     }
//   });
// });



}
