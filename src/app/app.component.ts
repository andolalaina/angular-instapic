import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-instapic';

  @Input() items = [0,1,2] ;
  addFeed() {
    this.items = this.items.concat([1]);
  }
}
