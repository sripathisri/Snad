import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uppercase = "tihs is upper case pipe, in this total wordes cange in to upper case";

  titlecase  =" this is title case, in this every word first letter convert into uooer case";

  lowecase ="this is loercase pipe"

  currency = 250000

  json = { 'name':"sri",'age':25, 'json':'pipe'};

  date = new Date();

  persent = 9.800;

  slice = "sripathi";

  wish = "hi" ;
}
