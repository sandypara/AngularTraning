import { Component, OnInit , NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 public name : string = "Sandeep Parashar & Divyansh kumar"
 public Phone : string ='';
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  savemyform(){
this.toastr.warning('Your Phone Number is :'+ this.Phone);
   // alert('Your Phone Number is :'+ this.Phone);
  }
}
