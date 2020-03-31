import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleted-component',
  templateUrl: './deleted-component.component.html',
  styleUrls: ['./deleted-component.component.css']
})
export class DeletedComponentComponent implements OnInit {
  route = "deleted";
  constructor() { }

  ngOnInit() {
  }

}
