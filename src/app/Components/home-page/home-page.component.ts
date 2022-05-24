import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/_service/my-data.service';
export interface userElemt {
  first_name: string;
  email: string;
  
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
   public userNames: any;
   displayedColumns: string[] = ['first_name', 'email'];
  constructor(public MyData : MyDataService) { }

  ngOnInit(): void {
    this.MyData.getUsersNames().subscribe(us=>{
   this.userNames = us;
console.log(this.userNames.data)
   });

  }

}
