import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/entities/exp-laboral';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  workList: ExpLaboral[] = [];

  constructor(private WorkService: WorkService){}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList():void{
    this.WorkService.getWorkList().subscribe(workList => this.workList = workList);
  }

}
