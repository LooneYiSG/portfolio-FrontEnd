import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userLoginOn: boolean = false;

  openLogin(): void{
    console.log('open login')
  }

}
