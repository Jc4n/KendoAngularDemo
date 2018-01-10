import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/@progress/kendo-theme-default/dist/all.css']
})
export class AppComponent {
  title = 'app';
  public value: Date = new Date();
  public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
  public itemValue = ['Basketball', 'Cricket'];
  public gridData: any[] = products;
  onButtonClick(){
    alert('search!');
  }
}
