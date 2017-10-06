import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://Francis4gb-PC:5000/api/';

@Injectable()
export class AuthService {

  constructor(public http: Http) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {

    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
          // console.log("#");
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
       // let headers = new Headers();
       // headers.append('X-Auth-Token', localStorage.getItem('token'));

       // this.http.post(apiUrl+'logout', {}, {headers: headers})
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'logout', JSON.stringify({ "data":"logout"}), {headers: headers})
          .subscribe(res => {
            localStorage.clear();
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

}