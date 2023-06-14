import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1 class = "txt1">Marvellous Infosystems</h1>`,
  styles: 
  [`
    .txt1
    {
    color:blue;
    }
  `]
})
export class AppComponent {
  title = 'Marvellous';
}
