import { IfStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Iregister } from '../register-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {

   registerUser = {} as Iregister;
    confirmPassword!: string;
    subscription!:Subscription;

  constructor(private _authenticationService: AuthenticationService) {  }

  ngOnInit(): void {
  }

  register(f:NgForm){

    this.subscription=this._authenticationService.postData("accounts",this.registerUser).subscribe({
      next:(data:any) =>{
        console.log(data);
        if(data.statusCode==200){
          alert(data.message);
        }
        else{
          alert(data.message);
        }
        this.registerUser={} as Iregister;
        f.resetForm();
      },
      error:reason =>{
        console.log(reason);
      }
  });
  }

  ngOnDestroy(): void {
   if(this.subscription)
   this.subscription.unsubscribe();
  }

}
