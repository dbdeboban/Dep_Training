import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-component',
  templateUrl: './active-component.component.html',
  styleUrls: ['./active-component.component.css']
})
export class ActiveComponentComponent implements OnInit {
  route = "active";
  constructor() { }

  ngOnInit() {
  }

}
