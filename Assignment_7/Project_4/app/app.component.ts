import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public Message = "";

  public UPPER()
  {
     this.Message = "MARVELLOUS INFOSYSTEMS";
  }

  public LOWER()
  {
    this.Message = "marvellous infosystems";
  }
}
