import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num = ['1','2','3','4','5']

  num1:number=4;
  num2:number=6;

  op:string = ''
}
