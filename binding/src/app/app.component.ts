import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string ="sripathi"

  cname:string = "cn"

  d:string=new Date().toLocaleDateString();
  t:string=new Date().toLocaleTimeString();

  timeid = setInterval(()=>{
    this.t=new Date().toLocaleTimeString();
  },1000)


  isdisable:boolean=true;

  color:string="green";


  counter:number=0;

  increment(){
    this.counter+=1
  }
  decrement(){
    this.counter-=1
  }
}
