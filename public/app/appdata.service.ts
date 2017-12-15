import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class AppdataService {

  constructor(public http: Http) { }

  getCounties() {
    return this.http.get('assets/json/counties.json').map(res => res.json());
  }

  makeAppointment(from, to, county, fullname, town, street, phone, category, sub, name) {
    return this.http.post('http://localhost:3000/addschedule', {
      from: from,
      to: to,
      county: county,
      category: category,
      fullname: fullname,
      town: town,
      street: street,
      phone: phone,
      sub: sub,
      name: name
    }).map(res => res.json());
  }

}
