import { Component, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { UsersProvider } from '../../providers/users';

@Component({
    selector: 'page-requested',
    templateUrl: 'requested.html',
    providers: [UsersProvider],
    animations: [
        trigger('flyInTopSlow1', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('200ms ease-in', keyframes([
                    style({ transform: 'translate3d(0,70px,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),
        trigger('flyInTopSlow2', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('400ms ease-in', keyframes([
                    style({ transform: 'translate3d(0,70px,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),
        trigger('flyInTopSlow3', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('600ms ease-in', keyframes([
                    style({ transform: 'translate3d(0,70px,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),
        trigger('flyInTopSlow4', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('800ms ease-in', keyframes([
                    style({ transform: 'translate3d(0,70px,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),
        trigger('flyInTopSlow5', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('800ms ease-in', keyframes([
                    style({ transform: 'translate3d(500px,0,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),
        trigger('heroState', [
            state('zoom', style({ 
                transform: 'translateX(0) scale(1)' 
            })),
            transition('* => zoom', [
                animate('800ms ease-in', keyframes([
                    style({ transform: 'translate3d(500px,0,0) scale(1)' })
                ]))
            ])
        ])
    ]
})

export class RequestedPage  {
    counter:number =0;
    featuredUsers: any = [];
    firstuser : any;
    value : any;
    username :any;
    pet: string = "puppies";
    backGround: any;
    animateClass: any;
    image: any;
    items: any = [
        { name: 'test', image: 'assets/users/images/1/1.jpg' },
        { name: 'test', image: 'assets/users/images/1/2.jpg' },
        { name: 'test', image: 'assets/users/images/1/3.jpg' },
        { name: 'test', image: 'assets/users/images/1/4.jpg' }
];

    data = { puppies: 'assets/users/images/1/1.jpg', kittens: 'https://s-media-cache-ak0.pinimg.com/236x/b3/1c/ce/b31cceccea15b00977c77fa7018345f9.jpg', ducklings: 'assets/users/images/1/1.jpg', ducklings2: 'assets/users/images/1/1.jpg' }
    constructor( private userData: UsersProvider) {
        
        this.backGround = 'assets/users/images/1/1.jpg';
        this.image = 'assets/users/images/1/1.jpg';
        setTimeout(function() {}, 800);
        this.animateClass = { 'zoom-in': true };
       
        //this.username = 'test01';
         userData.getpending(localStorage.getItem("user")).subscribe(data => {
        if(data == 0){
            this.username = 'Oops_no_user_left_!';
            this.backGround = 'assets/users/images/1/no_user.jpg';
        }else{
            this.username = data[0].friend.username; 

        }
        ;this.featuredUsers = data})

    }
  
    changeImage(image) {
        this.image = image
    }

    changepet(pet) {
        this.backGround = this.data[pet]
    }

    getHeight(pet){
        var height = "";
        if(pet == 'puppies')
        height = "hidden";
        return height;
    }

    close(){
    //console.log("close clicked");
            
        this.counter++;
        if(this.counter == this.featuredUsers.length)
        {
        this.counter=0;
        }
        this.username= this.featuredUsers[this.counter].friend.username;
        this.image = 'assets/users/images/1/'+this.counter+'.jpg'
        let incr=this.counter+1;
        this.backGround = 'assets/users/images/1/'+incr+'.jpg'

        
    }

    like(){
    console.log("like clicked");
   

    //Send friend request to the user and display next
        this.counter++;
        if(this.counter == this.featuredUsers.length)
        {
        this.counter=0;
        }
        

        this.userData.sendfriendrequest(this.username,localStorage.getItem("user"));


        this.username= this.featuredUsers[this.counter].friend.username;
        let incr=this.counter+1;
        this.backGround = 'assets/users/images/1/'+incr+'.jpg'
        location.reload();
        
    }

}
