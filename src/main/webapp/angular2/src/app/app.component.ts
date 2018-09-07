import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from  '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public submitted:boolean;
  roomSearch : FormGroup;
  rooms : Room[];
  
  ngOnInit(){
    this.roomSearch = new FormGroup({
      checkin: new FormControl(''),
      checkout: new FormControl('')
    });

    this.rooms = ROOMS;
  }
  
  onSubmit({value,valid}:{value:RoomSearch, valid:boolean}){
         console.log(value);
  }

}

export interface RoomSearch{
  checkin:string;
  checkout:string;
}


export interface Room{
  id:string;
  roomNumber:string;
  price:string;
  links:string;
}

var ROOMS:Room[] = [
  {
  "id":"123456",
  "roomNumber":"23",
  "price":"20",
  "links":""
}, {
  "id":"123456",
  "roomNumber":"23",
  "price":"20",
  "links":""
},
{
  "id":"123456",
  "roomNumber":"23",
  "price":"20",
  "links":""
},
{
  "id":"123456",
  "roomNumber":"23",
  "price":"20",
  "links":""
}
];