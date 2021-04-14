import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';

  totalCount = 0;

  data1 = [{
    name : 'Sam Johnson',
    dept : 'Electrical'
  },{
    name : 'Roy Thomas',
    dept : 'Mechanical'
  },{
    name : 'Jim Lasker',
    dept : 'Medical'
  }];

  data2 = [{
    name : 'Johnson',
    dept : 'Physics'
  },{
    name : 'Thomas',
    dept : 'Chemistry'
  },{
    name : 'Lasker',
    dept : 'Biology'
  }];

  calCount(count){
    this.totalCount = this.totalCount + count;
  }


}
