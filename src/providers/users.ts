import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
let apiUrl = 'http://Francis4gb-PC:5000/api/';
/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UsersProvider {
    data : any;
    constructor(public http: Http) {}

    getCategory(userID) {
       return this.http.get('assets/users/data//users.json')
            .map(x => x.json().filter(c => c.id == userID))
    }


        /** this method accepts a username and returns new users
          */
        getUsers(username) {
              console.log("getusers others called ...");
              return this.http.get(apiUrl+'others/'+username).map(res => res.json()).map(resp => resp.data);
          }


          /** this method accepts a username and new user and sends friend request
          */
          sendfriendrequest(newuser,currentuser){
            let url = apiUrl+'friendreq/'+newuser+'/'+currentuser;
               console.log("inside user.ts"+url);
              this.http.get(url).map(res => res).subscribe(data => {
            this.data = data;
            //console.log(this.data);
});
          }

          /** this method accepts a username and returns all the friends of the user
          */
          getfriends(username){
          console.log("getfriends called ...");
          return this.http.get(apiUrl+'requestType/1/'+username).map(res => res.json()).map(resp => resp.data);
          }

          /** this method accepts a username and returns all the friend request of the user
          */
          getrequested(username){
          console.log("getrequested requestType/2/ called ...");
          return this.http.get(apiUrl+'requestType/2/'+username).map(res => res.json()).map(resp => resp.data);
          }

          /** this method accepts a username and returns all the friend request of the user
          */
          getpending(username){
          console.log("getrequested requestType/3/ called ...");
          return this.http.get(apiUrl+'requestType/3/'+username).map(res => res.json()).map(resp => resp.data);
          }

    getRandomUsers(number) {
        return this.http.get('https://randomuser.me/api/?results='+number).map(res => res.json()).map(resp => resp.results)
    }

}
