import {Component, isDevMode} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn App';

  public static getHost() : string{
    if(isDevMode()){
      return "http://"+location.hostname+":8090/";
    }
    return "https://killerappfun4.herokuapp.com/";
  }
}
