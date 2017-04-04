import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'svl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  
})
export class GridComponent implements OnInit {

  columns: Object = { 'id' : '#' , 'firstName' : 'First Name', 'lastName' : 'Last Name', 'userName' : 'Username'};

  rows = [
                    { id : 1, firstName : 'A Mark', lastName : 'Otto', userName : '@mdo' },
                    { id : 2, firstName : 'B Jacob', lastName : 'Thornton', userName : '@fat' },
                    { id : 3, firstName : 'C Larry', lastName : 'the Bird', userName : '@twitter' },
                    { id : 4, firstName : 'A Mark', lastName : 'Otto', userName : '@mdo' },
                    { id : 5, firstName : 'B Jacob', lastName : 'Thornton', userName : '@fat' },
                    { id : 6, firstName : 'C Larry', lastName : 'the Bird', userName : '@twitter' },
                    { id : 7, firstName : 'A Mark', lastName : 'Otto', userName : '@mdo' },
                    { id : 8, firstName : 'B Jacob', lastName : 'Thornton', userName : '@fat' },
                    { id : 9, firstName : 'C Larry', lastName : 'the Bird', userName : '@twitter' },
                    { id : 10, firstName : 'A Mark', lastName : 'Otto', userName : '@mdo' },
                    { id : 11, firstName : 'B Jacob', lastName : 'Thornton', userName : '@fat' },
                    { id : 12, firstName : 'C Larry', lastName : 'the Bird', userName : '@twitter' }
                  ];

  pagination: any = { current : 1, totalRecords : 12, recordPerPage : 4, pagination : true };
  
  constructor() { }

  ngOnInit() {
  }

}
