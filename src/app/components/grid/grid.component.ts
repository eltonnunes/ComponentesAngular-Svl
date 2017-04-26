import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/providers/users.service';
import { Users } from 'app/interfaces/Users';

@Component({
  selector: 'svl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [UsersService]
})
export class GridComponent implements OnInit {

  columns: Object = { 'id' : '#' , 'first_name' : 'First Name', 'last_name' : 'Last Name', 'avatar' : 'Avatar'};

  pagination: any = { current : 1, totalRecords : 12, recordPerPage : 4, pagination : true };
  
  arrayObject: any = {};

  constructor(
    private usersService: UsersService
  ) { 
      this.listData();
  }

  ngOnInit() {

  }

  currentUpdate(event){
    this.listData(event.current);
  }

  listData(pginit : number = 1){
      this.arrayObject = this.usersService.getUsers(pginit).subscribe(users => {
        this.pagination.current = users.page;
        this.pagination.totalRecords = users.total;
        this.pagination.recordPerPage = users.per_page;
        this.arrayObject = users;
      });
  }

}
