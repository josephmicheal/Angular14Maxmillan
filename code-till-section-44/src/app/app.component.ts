import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h3{
    color: green;
}`]
})
export class AppComponent {
  showDetails = false;
  log = [];

  onToggle(){
    this.showDetails = !this.showDetails;
    this.log.push(new Date());
  }
}
