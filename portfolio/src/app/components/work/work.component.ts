import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  workList: Array<any> = [
    {"id": "1", "title": "Web Developer","description": "Description"},
    {"id": "2", "title": "Your Market","description": "Description"},
    {"id": "3", "title": "Microsoft Developer","description": "Description"},
  ];
}
