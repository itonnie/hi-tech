import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import {} from "@angular"

import { AppdataService } from "../appdata.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  category: String;
  sub: String;
  name: String;
  counties: String[];

  from: Date;
  to: Date;
  fullname: String;
  town: String;
  select: String;
  street: String;
  phone: Number;

  fromerr: String;
  toerr: String;
  fullerr: String;
  twnerr: String;
  selerr: String;
  sterr: String;
  pherr: String;

  constructor(public ar: ActivatedRoute, public router: Router, public appdata: AppdataService) { }

  ngOnInit() {
    this.ar.queryParams.subscribe(params => {
      this.category = params['category'];
      this.sub = params['sub'];
      this.name = params['name'];
    });

    this.appdata.getCounties().subscribe(data => {
      this.counties = data;
    })
  }

  scheduleAppointment() {
    if(this.from == undefined) {
      this.fromerr = "Please input a valid date and time";
    } else if(this.to == undefined) {
      this.toerr = "Please input a valid date and time";
    } else if (this.fullname == undefined) {
      this.fullerr = "Please input your name here";
    } else if (this.town == undefined) {
      this.twnerr = "Please add in your town.";
    } else if(this.select == undefined) {
      this.selerr = "Please select a county in Kenya.";
    } else if(this.street = undefined) {
      this.sterr = "Please input your street address."
    } else if(this.phone.toString().length < 9 || this.phone.toString().length > 9 || this.phone == undefined) {
      this.pherr = "Please input a valid phone number";
    } else {
      //send data
      this.appdata.makeAppointment(this.from, this.to, this.select, this.fullname, this.town, this.street, this.phone, this.category, this.sub, this.name).subscribe(data => {
        if(data.ok == true) {
          alert("Order for id " + data.id + " has been recieved.");
        }
      });
    }
  }
}
